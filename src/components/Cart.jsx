import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddressContainer from "../small-components/AddressContainer";
import { Link } from "react-router-dom";
function Cart() {
  const reducers = useSelector((data) => {
    return data;
  });
  const allBooksInCart = reducers.CartReducer.booksInCart;
  const price = allBooksInCart.length * 1999;
  const tax = allBooksInCart.length * 100;
  const total = price + tax + 50;
  const dispatch = useDispatch();
  const addBooksToOrders = () => {
    for (let i = 0; i < allBooksInCart.length; i++) {
      const bookToBuy = allBooksInCart[i].cartBook;
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookToBuy }),
      };
      let res = fetch("http://localhost:3500/orders", requestOptions).then(
        (response) => response.json()
      );
      res.then((data) => {
        dispatch({
          type: "orderAdd",
          payload: bookToBuy,
        });
      });
    }
  };
  useEffect(() => {
    let x = fetch("http://localhost:3500/cart").then((res) => res.json());
    x.then((data) => {
      let books = data;
      console.log(books);
      dispatch({
        type: "insertBookArray",
        payload: books,
      });
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  if (!allBooksInCart.length) {
    return <h1 style={{ textAlign: "center" }}>Cart Is Empty</h1>;
  }
  return (
    <>
      <div class="allCart" style={{ display: "flex" }}>
        <div className="addressSection">
          <AddressContainer></AddressContainer>
        </div>
        <hr />
        <div class="itemSection">
          <table class="table">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th scope="col">SNo.</th>
                <th scope="col">Book Name</th>
                <th scope="col">ISBN</th>
                <th scope="col">Price (Rs)</th>
              </tr>
            </thead>
            <tbody>
              {allBooksInCart.map((data) => {
                console.log(data);
                return (
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.cartBook.title}</td>
                    <td>{data.cartBook.isbn}</td>
                    <td>1999/-</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div class="card-body">
            <h4>Payment Info</h4>
            <pre style={{ marginTop: "1rem" }}>Item Price Rs. {price}/-</pre>
            <pre>Tax Rs. {tax}/- </pre>
            <pre>Shipping Charges Rs. 50/- </pre>
            <hr />
            <pre style={{ fontWeight: "bold" }}>Total Rs. {total}/-</pre>
            <button
              type="button"
              class="btn btn-success"
              style={{ marginTop: "3rem", marginLeft: "10.5rem" }}
              onClick={addBooksToOrders}
            >
              {" "}
              <Link to="/"> Checkout</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
