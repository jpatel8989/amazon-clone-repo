import React from "react";
import "./CkeckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, rating, price, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //For removing item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} className="ckeckoutProduct_Image"></img>
      <div className="checkoutProduct_Info">
        <p className="checkoutProduct_Title">{title}</p>
        <p className="checkoutProduct_Price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_Rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
