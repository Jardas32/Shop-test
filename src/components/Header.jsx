import "../css/header.css";
import { useOpenCart } from "../context/OpenCartContext";

function Header({
  searchValue,
  setSearchValue,
  searchProducts,
  totalQuantity,
}) {
  const { setOpenCart } = useOpenCart();

  return (
    <div className="wrapper-header">
      <div className="logo">
        <span>E</span>
        -shop
      </div>

      <div className="wrapper-search">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Enter product title..."
          className="search-value"
        />
        <button
          onClick={() => searchProducts(searchValue)}
          className="btn-search"
        >
          Search
        </button>
      </div>

      <div className="wrapper-right-nav">
        <div
          onClick={() => setOpenCart((prev) => !prev)}
          className="wrapper-header-cart"
        >
          <span className="countCart">{totalQuantity}</span>
          <span className="open-cart">Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
