import { useDispatch } from "react-redux";

function Card(props) {
  const dispatch = useDispatch();
  const bookObjToShow = (bookObj) => {
    dispatch({
      type: "setBook",
      payload: bookObj,
    });
  };
  return (
    <div class="card h-100 shadow-sm">
      {" "}
      <img src={props.bookObj.thumbnailUrl} class="card-img-top" alt="..." />
      <div class="card-body">
        <div class="clearfix mb-3">
          {" "}
          <div class="float-start badge rounded-pill bg-primary">
            {props.bookObj.title}
          </div>
        </div>
        <h5 class="card-title">{props.bookObj.longDescription}</h5>
        <div
          onClick={() => bookObjToShow(props.bookObj)}
          class="text-center my-4"
        >
          {" "}
          <div class="btn btn-warning">Buying Options</div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Card;
