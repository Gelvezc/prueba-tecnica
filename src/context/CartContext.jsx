import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const isInCart = cart.some(prod => prod.id === item.id);
    if (isInCart) {
      setCart(cart.map(prod => prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod));
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const clearCart = () => setCart([]);

  const removeItem = (id) => setCart(cart.filter(prod => prod.id !== id));

  const increaseQuantity = (id, stock) => {
    setCart(cart.map(prod => {
      // Validamos que no supere el stock
      if(prod.id === id && prod.quantity < prod.stock) {
        return { ...prod, quantity: prod.quantity + 1 };
      }
      return prod;
    }));
  };

  const decreaseQuantity = (id) => {
    setCart(cart.map(prod => {
      // Validamos que la cantidad no sea menor a 1
      if(prod.id === id && prod.quantity > 1) {
        return { ...prod, quantity: prod.quantity - 1 };
      }
      return prod;
    }));
  };

  const getTotalQuantity = () => cart.reduce((acc, prod) => acc + prod.quantity, 0);
  const getTotal = () => cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, increaseQuantity, decreaseQuantity, getTotalQuantity, getTotal, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};