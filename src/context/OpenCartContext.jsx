import { useRef, useContext, createContext, useState, useEffect } from "react";

const openCartContext = createContext(null);

function OpenCartContext({ children }) {
  const [openCart, setOpenCart] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setOpenCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const value = {
    openCart,
    setOpenCart,
    cartRef,
  };

  return (
    <openCartContext.Provider value={value}>
      {children}
    </openCartContext.Provider>
  );
}

export default OpenCartContext;

export const useOpenCart = () => useContext(openCartContext);
