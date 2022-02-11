let initialState = {
  book: null,
};

function BookToShow(state = initialState, action) {
  switch (action.type) {
    case "setBook":
      return {
        ...state,
        book: action.payload,
      };
    case "removeBook":
      return {
        ...state,
        book: action.payload,
      };
    default: {
      return state;
    }
  }
}

export default BookToShow;
