import { useState } from "react";
import { useEffect } from "react";

export default function MyOrder() {
  const [orderedBooks, setBooks] = useState([]);
  orderedBooks;
  useEffect(() => {
    let x = fetch("http://localhost:3500/orders").then((res) => res.json());
    x.then((data) => {
      const books = data;
      setBooks(books);
    }).catch((err) => {
      err;
    });
  }, []);
  if (!orderedBooks.length) {
    return <h1 style={{ textAlign: "center" }}>No Orders Yet...</h1>;
  }
  return (
    <>
      {orderedBooks.map((book) => {
        return (
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 mt-3">
                <div class="card">
                  <div class="card-horizontal">
                    <div class="img-square-wrapper">
                      <img
                        class=""
                        src={book.bookToBuy.thumbnailUrl}
                        alt="Card image cap"
                      />
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">{book.bookToBuy.title}</h4>
                      <h4 class="card-title">Rs. 1999/-</h4>
                      <h4 class="card-title">ISBN : {book.bookToBuy.isbn}</h4>
                    </div>
                  </div>
                  <div class="card-footer">
                    <small class="text-muted">Delivered</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
