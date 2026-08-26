import "../css/header.css";
import { useOpenCart } from "../context/OpenCartContext";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function Header({
  searchValue,
  setSearchValue,
  searchProducts,
  totalQuantity,
}) {
  const { setOpenCart, btnOpenCartRef } = useOpenCart();

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
        <Link className="link-to-favorites" to="/Shop-test/favorites">
          <FaHeart className="icon-link-favorites" />
        </Link>

        <div
          ref={btnOpenCartRef}
          onClick={() => setOpenCart(true)}
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
