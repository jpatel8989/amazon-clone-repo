// Place where the data and action is

export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //Logic for removing items

      //Cloning the existing basket and storing into a new object
      let newBasket = [...state.basket];

      //Finding the index value of the item to remove
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // Removing the item
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove product as it doesnt exist");
      }

      //Updating the basket
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
