import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function Preview(props) {
  const previewBook = useSelector((data) => {
    return data;
  });
  const dispatch = useDispatch();
  const BackToHome = () => {
    dispatch({
      type: "removeBook",
      payload: null,
    });
  };
  const proceedToCart = () => {
    let cartBook = previewBook.BookToShow.book;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartBook }),
    };
    let res = fetch("http://localhost:3500/cart", requestOptions).then(
      (response) => response.json()
    );
    res.then((data) => {
      dispatch({
        type: "insertBookInCart",
        payload: cartBook,
      });
      dispatch({
        type: "removeBook",
        payload: null,
      });
    });
  };
  return (
    <>
      <button
        style={{ marginLeft: "68rem" }}
        className="processlink btn btn-danger"
        onClick={BackToHome}
      >
        close
      </button>
      <div className="selectedBookPage">
        <div className="SelectedBookfakeImage">
          <img
            className="fakeImageOfBookCard"
            src={previewBook.BookToShow.book.thumbnailUrl}
            alt="book image"
          />
        </div>
        <div className="SelectedBookDetails">
          <h1>{previewBook.BookToShow.book.title}</h1>
          <h3>
            <pre>Book Price : Rs 1,999/-</pre>
          </h3>
          <h4>Author Name:{previewBook.BookToShow.book.authors[0]}</h4>
          <h4>Page Count:{previewBook.BookToShow.book.pageCount}</h4>
          <h4>ISBN:{previewBook.BookToShow.book.isbn}</h4>
          <button
            className="processlink btn btn-warning"
            onClick={proceedToCart}
          >
            <Link to="/">Add To Cart</Link>
          </button>
          <button className="processlink btn btn">
            <Link to="/buyingOptions/buyNow">Buy Now</Link>
          </button>
          <div className="descriptionBox">
            <p>{previewBook.BookToShow.book.longDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
}
