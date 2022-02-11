let initialState = {
  booksInCart: [],
  address: {
    id: 1,
    fullName: "",
    address: "",
    state: "",
    pincode: "",
  },
};

function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "insertBookArray":
      return {
        ...state,
        booksInCart: action.payload,
      };
    case "insertBookInCart":
      return {
        ...state,
        booksInCart: state.booksInCart.push(action.payload),
      };
    case "editAddress":
      return {
        ...state,
        address: action.payload,
      };
    default: {
      return state;
    }
  }
}

export default CartReducer;
