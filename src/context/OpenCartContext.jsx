import { useRef, useContext, createContext, useState, useEffect } from "react";

const openCartContext = createContext(null);

function OpenCartContext({ children }) {
  const [openCart, setOpenCart] = useState(false);
  const cartRef = useRef(null);
  const btnOpenCartRef = useRef(null);

  const [cart, setCart] = useState(() => {
    const getCart = localStorage.getItem("cart");
    return getCart ? JSON.parse(getCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const [favoritProducts, setFavoritProducts] = useState(() => {
    const getFavorites = localStorage.getItem("favorites");
    return getFavorites ? JSON.parse(getFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritProducts));
  }, [favoritProducts]);

  const addToCart = (product) => {
    setCart((prev) => {
      const findProduct = prev.some((p) => p.id === product.id);

      if (findProduct) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }

      return [...prev, product];
    });
  };

  const addToFavorites = (product) => {
    setFavoritProducts((prev) => {
      const findProduct = prev.some((p) => p.id === product.id);

      if (findProduct) {
        return prev.filter((p) => p.id !== product.id);
      }

      return [...prev, product];
    });
  };

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
    favoritProducts,
    setFavoritProducts,
    addToFavorites,
    addToCart,
    cart,
    setCart,
  };

  return (
    <openCartContext.Provider value={value}>
      {children}
    </openCartContext.Provider>
  );
}

export default OpenCartContext;

export const useOpenCart = () => useContext(openCartContext);
