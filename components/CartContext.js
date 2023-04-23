import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    const existingProduct = cart.find((p) => p.slug === product.slug);

    if (existingProduct) {
      const updatedCart = cart.map((p) => {
        if (p.slug === product.slug) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });

      setCart(updatedCart); 
      setCart((prevState) => {
        // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
        const existingProductIndex = prevState.findIndex(
          (item) => item.slug === product.slug
        );
    
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm vào giỏ hàng
        if (existingProductIndex === -1) {
          return [...prevState, { ...product, quantity: 1 }];
        }
    
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, không thay đổi giỏ hàng
        return prevState;
      });
      console.log("Sản phẩm đã tồn tại, tăng số lượng:", updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      console.log("Sản phẩm mới, thêm vào giỏ hàng:", [
        ...cart,
        { ...product, quantity: 1 },
      ]);
    }
  }
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const increaseQuantity = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const index = newCart.findIndex((item) => item.slug === product.slug);

      if (index > -1) {
        newCart[index].quantity += 1;
      }

      return newCart;
    });
  };

  const decreaseQuantity = (product) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      const index = newCart.findIndex((item) => item.slug === product.slug);

      if (index > -1 && newCart[index].quantity > 1) {
        newCart[index].quantity -= 1;
      }

      return newCart;
    });
  };

  const removeProduct = (product) => {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.slug !== product.slug);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
