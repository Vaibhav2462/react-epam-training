let initialState = {
  books: [],
};

function AllOrders(state = initialState, action) {
  switch (action.type) {
    case "orderAdd":
      return {
        ...state,
        book: state.books.push(action.payload),
      };
    default: {
      return state;
    }
  }
}

export default AllOrders;
