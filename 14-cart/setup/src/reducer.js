const reducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_CART":
      return { ...state, cart: [] };
    case "REMOVE":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "INCREASE":
      let incCart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount + 1 };
        }
        return item;
      });
      return { ...state, cart: incCart };

    case "DECREASE":
      let decCart = state.cart
        .map((item) => {
          if (item.id === action.payload) {
            return { ...item, amount: item.amount - 1 };
          }
          return item;
        })
        .filter((cartItem) => cartItem.amount > 0);
      return { ...state, cart: decCart };

    case "GET_TOTAL":
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          cartTotal.total = cartTotal.total + amount * price;
          cartTotal.amount = cartTotal.amount + amount;

          return cartTotal;
        },
        {
          total: 0,
          amount: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };

    case "TOGGLE_AMOUNT":
      let temCart = state.cart
        .map((item) => {
          if (item.id === action.payload.id) {
            if (action.payload.type === "inc") {
              return { ...item, amount: item.amount + 1 };
            }
            if (action.payload.type === "des") {
              return { ...item, amount: item.amount - 1 };
            }
          }
          return item;
        })
        .filter((cartItem) => {
          return cartItem.amount > 0;
        });
      return { ...state, cart: temCart };

    case "LOADING":
      return { ...state, loading: true };
    case "DISPLAY_ITEM":
      return { ...state, cart: action.payload, loading: false };
  }

  throw new Error("No action Type Exist");
};

export default reducer;
