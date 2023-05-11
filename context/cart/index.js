import { createContext, useEffect, useState } from "react"


const cartContext = createContext()

const CartContext = ({children})=>{
    var [carts,setCarts] = useState([])
    useEffect(()=>{
        localStorage.getItem('carts') && setCarts(JSON.parse(localStorage.getItem('carts')))
    },[])
    const setLocalStore = value=>{
        localStorage.setItem('carts',JSON.stringify(value))
    }
    const handleAddProduct = value=>{
        if(carts.length > 0){
            const product = carts.filter(item=>item._id === value._id)[0]
            console.log(product)
           
            if(product){
                setCarts(carts.map(item=>{
                    product._id === item._id ? {...item,quantity: item.quantity+1} : item
                }))
                console.log(carts)
                setLocalStore(carts)
            }
            else{
                carts = [...carts,product]
                setLocalStore(carts)
                console.log(carts)
            }
        }
        else{
            carts = [...carts,value]
            setLocalStore(carts)
        }
    }
    const handlePlusProduct = id=>{
        setCarts(carts.map(item=>{
            product._id === item._id ? {...item,quantity: item.quantity+1} : item
        }))
        setLocalStore(carts)
    }
    const handleMinorProduct = id=>{
        setCarts(carts.map(item=>{
            product._id === item._id ? {...item,quantity: item.quantity-1} : item
        }))
        setLocalStore(carts)
    }
    const handleDeleteProduct = id=>{
        setCarts(carts.filter(item=>item._id!==id))
        setLocalStore(carts)
    }
    return (
        <cartContext.Provider value={{
            carts,
            handleAddProduct,
            handlePlusProduct,
            handleMinorProduct,
            handleDeleteProduct
        }}>
            {children}
        </cartContext.Provider>
    )
}

export {cartContext}
export default CartContext