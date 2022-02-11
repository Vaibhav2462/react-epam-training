let initialState = {
  books: [],
};

function AllBooksReducer(state = initialState, action) {
  switch (action.type) {
    case "setBooks":
      return {
        ...state,
        books: action.payload,
      };
    default: {
      return state;
    }
  }
}

export default AllBooksReducer;
