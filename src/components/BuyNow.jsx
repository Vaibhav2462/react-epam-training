import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
function BuyNow() {
  const reducer = useSelector((book) => {
    return book;
  });
  const bookToBuy = reducer.BookToShow.book;
  const dispatch = useDispatch();
  const addOrder = () => {
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
      dispatch({
        type: "removeBook",
        payload: null,
      });
    });
  };
  return (
    <>
      <div
        class="card"
        style={{
          width: "36rem",
          marginLeft: "23rem",
          height: "30rem",
          marginTop: "1.5rem",
        }}
      >
        <div style={{ display: "flex" }}>
          <img
            src={bookToBuy.thumbnailUrl}
            style={{ marginLeft: "-13rem" }}
            class="card-img-top"
            alt="..."
          />
          <div style={{ marginLeft: "-11rem", marginTop: "1.5rem" }}>
            <h2 class="card-title">
              <span
                style={{ backgroundColor: "lightblue", borderRadius: "5px" }}
              >
                {bookToBuy.title}
              </span>
            </h2>
            <h4>Author Name:{bookToBuy.authors[0]}</h4>
            <h4>Page Count:{bookToBuy.pageCount}</h4>
            <h4>ISBN:{bookToBuy.isbn}</h4>
          </div>
        </div>
        <div class="card-body">
          <h4>Payment Info</h4>
          <pre style={{ marginTop: "1rem" }}>Item Price Rs. 1999/-</pre>
          <pre>Tax Rs. 100/- </pre>
          <pre>Shipping Charges Rs. 40/- </pre>
          <hr />
          <pre style={{ fontWeight: "bold" }}>Total Rs. 2139/-</pre>
          <button
            type="button"
            class="btn btn-success"
            style={{ marginTop: "10px", marginLeft: "10.5rem" }}
            onClick={addOrder}
          >
            <Link to="/"> Checkout</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default BuyNow;
