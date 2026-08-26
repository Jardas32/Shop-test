import { useRef, useContext, createContext, useState, useEffect } from "react";

const openCartContext = createContext(null);

function OpenCartContext({ children }) {
  const [openCart, setOpenCart] = useState(false);
  const cartRef = useRef(null);
  const btnOpenCartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      
      if (
        btnOpenCartRef.current &&
        btnOpenCartRef.current.contains(event.target)
      )
        return;

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
    btnOpenCartRef,
  };

  return (
    <openCartContext.Provider value={value}>
      {children}
    </openCartContext.Provider>
  );
}

export default OpenCartContext;

export const useOpenCart = () => useContext(openCartContext);
