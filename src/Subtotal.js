// import React from "react";
// import "./Subtotal.css";
// import { useStateValue } from "./StateProvider";
// import CurrencyFormat from "react-currency-format";
// import { getBasketTotal } from "./reducer";

// function Subtotal() {
//   const [{ basket }, dispatch] = useStateValue();

//   return (
//     <div className="subtotal">
//       <CurrencyFormat
//         renderText={(value) => (
//           <>
//             <p>
//               Subtotal ({basket.length} items): <strong>{value}</strong>
//             </p>
//             <small className="subtotal_gift">
//               <input type="checkbox" /> "This order contains a subtotal gift"
//             </small>
//           </>
//         )}
//         // all the necessary attributes
//         decimalScale={2}
//         value={getBasketTotal(basket)}
//         displayType={"text"}
//         thousandSeparator={true}
//         prefix={"$"}
//       />

//       <button>Proceed To Checkout</button>
//     </div>
//   );
// }

// export default Subtotal;
