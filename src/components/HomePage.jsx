import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../small-components/Card";
import Preview from "./Preview";
function HomePage() {
  let books = [];
  const data = useSelector((data) => {
    return data;
  });
  let previewBook = true;
  if (data.BookToShow.book == null) {
    previewBook = false;
  } else {
    previewBook = true;
  }
  books = data.AllBooksReducer.books;
  const dispatch = useDispatch();

  useEffect(() => {
    let x = fetch("http://localhost:3500/books").then((res) => res.json());
    x.then((data) => {
      books = data;
      dispatch({
        type: "setBooks",
        payload: books,
      });
    }).catch((err) => {});
  }, []);
  return !previewBook ? (
    <>
      <main className="card-container">
        {books.map((bookObj) => {
          return (
            <>
              <Card bookObj={bookObj}></Card>
            </>
          );
        })}
      </main>
    </>
  ) : (
    <Preview></Preview>
  );
}
export default HomePage;
