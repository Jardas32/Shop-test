import "../css/home.css";
import { useEffect, useState } from "react";
import { products } from "../data/products";
import Header from "./Header";
import Categories from "./Categories";
import CardProduct from "./CardProduct";
import Cart from "./Cart";
import Footer from "../components/Footer";
import BtnUp from "./BtnUp";
import { useOpenCart } from "../context/OpenCartContext";

function Home() {
  const [selectCategory, setSelectCategory] = useState(null);
  const [allProducts, setAllProducts] = useState([
    ...products.laptop,
    ...products.phone,
    ...products.television,
    ...products.watch,
  ]);
  const [getProducts, setGetProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  // const [cart, setCart] = useState([]);
  const { cart, setCart, addToCart } = useOpenCart();
  const totalQuantity = cart.reduce((prev, p) => prev + p.quantity, 0);

  useEffect(() => {
    function getProductsCategory(category) {
      if (category === "all" || !category) {
        setGetProducts([
          ...products.laptop,
          ...products.phone,
          ...products.television,
          ...products.watch,
        ]);
        return;
      }

      const findCategory = products[category];
      setGetProducts(findCategory);
    }

    getProductsCategory(selectCategory);
  }, [selectCategory]);

  function sortProducts(sort) {
    if (!sort) return;

    if (sort === "min") {
      const sortedProducts = [...getProducts].sort((a, b) => a.price - b.price);

      setGetProducts(sortedProducts);
    }

    if (sort === "max") {
      const sortedProducts = [...getProducts].sort((a, b) => b.price - a.price);

      setGetProducts(sortedProducts);
    }

    if (sort === "all") {
      setGetProducts([
        ...products.laptop,
        ...products.phone,
        ...products.television,
        ...products.watch,
      ]);
    }
  }

  function searchProducts(serach) {
    if (!serach || !serach.trim()) return;

    const findProducts = allProducts.filter((p) =>
      p.title.toLowerCase().includes(serach.toLowerCase())
    );

    if (findProducts) {
      setGetProducts(findProducts);
    }

    setSearchValue("");
  }

  // function addToCart(product) {
  //   const findProduct = setCart((prev) =>
  //     prev.some((p) => p.id === product.id)
  //   );

  //   if (findProduct) {
  //     setCart((prev) => {
  //       return prev.map((p) =>
  //         p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
  //       );
  //     });
  //   } else {
  //     return setCart((prev) => [...prev, product]);
  //   }
  // }

  function deleteCart(id) {
    setCart((c) => c.filter((p) => p.id !== id));
  }

  return (
    <>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchProducts={searchProducts}
        totalQuantity={totalQuantity}
      />

      <Cart cart={cart} deleteCart={deleteCart} totalQuantity={totalQuantity} />

      <div className="wrapper-products-page">
        <Categories
          products={products}
          setSelectCategory={setSelectCategory}
          selectCategory={selectCategory}
        />

        <div className="wrapper-products">
          <div className="wrapper-top-products">
            <h3>Products: {getProducts.length}</h3>

            <div className="wrapper-sorted">
              <select onChange={(e) => sortProducts(e.target.value)}>
                <option value="all">All</option>
                <option value="min">Min price</option>
                <option value="max">Max price</option>
              </select>
            </div>
          </div>

          <BtnUp />

          {getProducts.length === 0 ? (
            <p className="no-found">No found...</p>
          ) : (
            <div className="wrapper-products-grids">
              {getProducts.map((product) => (
                <CardProduct
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                  cart={cart}
                  setCart={setCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
