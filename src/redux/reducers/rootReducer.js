import { combineReducers } from "redux";
import AllBooksReducer from "./AllBooksReducer";
import BookToShow from "./BookToShow";
import AllOrders from "./AllOrders";
import CartReducer from "./CartReducer";
const rootReducer = combineReducers({
  AllBooksReducer,
  BookToShow,
  AllOrders,
  CartReducer,
});

export default rootReducer;
