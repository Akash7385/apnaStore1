const InitialState = {
  carts: [],
};

export const cartReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.carts[itemIndex].qty += 1;
      } else {
        const temp = { ...action.payload, qty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);

      return {
        ...state,
        carts: data,
      };

    case "RMV_ONE":
      const IteamIndex_dec = state.carts.findIndex(
        (it) => it.id === action.payloadS
      );

      if (state.carts[IteamIndex_dec].qnty >= 1) {
        const dltiteam = (state.carts[IteamIndex_dec].qnty = -1);
        console.log([...state.carts, dltiteam]);

        return {
          ...state,
          carts: [...state.carts],
        };
      }

    default:
      return state;
  }
};
cartReducer;
