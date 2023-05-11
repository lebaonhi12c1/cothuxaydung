import React, { createContext } from 'react';
import useLocalStorage from 'react-use-localstorage';
export const cartContext = createContext()
function CartLocalStore({ children }) {
    const [carts, setCarts] = useLocalStorage('carts', [])
    const handleAdd = value => {
        if (carts.length > 0) {
            const product = carts.filter(item => item._id === value._id)[0]
            product ? setCarts(carts.map(item => {
                return item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
            })) : setCarts([...carts, product])
        } else {
            setCarts([...carts, value])
        }
    }
    const handleIncrea = id=>{
        setCarts(carts.map(item=>(item._id === id ? {...item,quantity: item.quantity+1} : item)))
    }
    const handleDecrea = id=>{
        setCarts(carts.map(item=>(item._id === id ? {...item,quantity: item.quantity-1} : item)))
    }
    const hanldeDelete = id=>{
        setCarts(carts.filter(item=>(item._id!==id)))
    }
    return (
        <cartContext.Provider value={{
            carts,
            handleAdd,
            handleDecrea,
            handleIncrea,
            hanldeDelete
        }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartLocalStore;