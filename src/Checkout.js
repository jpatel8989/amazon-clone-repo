import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
// import CurrencyFormat from "react-currency-format";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_Left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/AISExports_UK_GW/Desktop/AIS_LP/LandingPageHeroTemplatev2.jpg"
          className="checkout_ad"
        ></img>

        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty!</h2>
            <p>
              You have not added any item in your cart yet. Add some and
              checkout again!
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">
              Your Shopping Cart have {basket.length} items
            </h2>

            {/* For all the items present in the cart*/}
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                rating={item.rating}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout_Right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
