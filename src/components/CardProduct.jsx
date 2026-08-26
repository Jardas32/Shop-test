import "../css/cardproduct.css";

function CardProduct({ product, addToCart, cart }) {
  const inCart = cart.find((p) => p.id === product.id);

  return (
    <div className="card">
      <div className="wrapper-img">
        <img className="card-img" src={product.img} alt={product.title} />
      </div>

      <h2 className="card-title">{product.title}</h2>

      <div className="card-body">
        <span>
          {product.price.toLocaleString("cs-CZ", {
            style: "currency",
            currency: "CZK",
            minimumFractionDigits: 0,
          })}
        </span>
        <span>{product.quantity}</span>
      </div>
      <button
        onClick={() => addToCart(product)}
        className={`btn-addCart ${inCart ? "active" : ""}`}
      >
        {inCart ? "in Cart" : "Add to cart"}
      </button>
    </div>
  );
}

export default CardProduct;
