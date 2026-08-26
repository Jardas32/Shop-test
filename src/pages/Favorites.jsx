import "../css/favorites.css";
import { Link } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { useOpenCart } from "../context/OpenCartContext";
import CardProduct from "../components/CardProduct";

function Favorites() {
  const { favoritProducts } = useOpenCart();

  return (
    <div className="wrapper-favorites-page">
      <Link className="link-to-home" to="/Shop-test/">
        <IoIosHome className="icon-link-home" />
      </Link>
      <h2 className="title-page-favorites">
        Favorites: {favoritProducts.length}
      </h2>

      <div className="wrapper-favorites-grids">
        {favoritProducts.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Favorites;
