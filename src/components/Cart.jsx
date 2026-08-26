import "../css/cart.css";
import { useOpenCart } from "../context/OpenCartContext";
import { IoMdCloseCircle } from "react-icons/io";

function Cart({ cart, deleteCart, totalQuantity }) {
  const totalPrice = cart.reduce((prev, p) => (prev + p.price) * p.quantity, 0);
  const { openCart, setOpenCart, cartRef } = useOpenCart();

  return (
    <div
      ref={cartRef}
      className={`wrapper-cart-bg ${openCart ? "active" : ""} `}
    >
      <div className="wrapper-cart-top">
        <IoMdCloseCircle
          onClick={() => setOpenCart(false)}
          className="icon-close-cart"
        />

        <span>Total products: {totalQuantity}</span>
      </div>

      <div className="wrapper-cart">
        {cart.length === 0 ? (
          <p className="empty-cart">Yuor cart is empty...</p>
        ) : (
          <div className="cart">
            {cart.map((p) => (
              <div key={p.id} className="wrapper-card-cart">
                <h3>{p.title}</h3>

                <span className="price-card-cart">
                  {p.price.toLocaleString("cs-CZ", {
                    style: "currency",
                    currency: "CZK",
                    minimumFractionDigits: 0,
                  })}
                </span>
                <div className="wrapper-card-cart-body">
                  <span>{p.quantity}</span>
                </div>
                <button onClick={() => deleteCart(p.id)} className="btn-delete">
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="wrapper-cart-bottom">
          <button className="btn-payment">Payment</button>

          <div className="wrapper-total-price">
            <span> Total price:</span>
            <span>
              {totalPrice.toLocaleString("cs-CZ", {
                style: "currency",
                currency: "CZK",
                minimumFractionDigits: 0,
              })}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
