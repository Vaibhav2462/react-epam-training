import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Navbar() {
  const data = useSelector((data) => {
    return data;
  });
  data;
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {data.BookToShow.book == null ? (
        <>
          <a class="navbar-brand" href="#">
            Shoping App ||{" "}
          </a>
        </>
      ) : (
        <a class="navbar-brand" href="#">
          Shoping App || {data.BookToShow.book.title}{" "}
        </a>
      )}

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="/home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/myorder">
              My Orders
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/buyingOptions/cart">
              Cart
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
