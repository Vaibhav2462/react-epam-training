import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
function AddressContainer() {
  let address = useSelector((reducers) => {
    return reducers.CartReducer.address;
  });
  const changeAddress = () => {
    dispatch({
      type: "editAddress",
      payload: address,
    });
  };
  const nameChange = (e) => {
    address.fullName = e.target.value;
    changeAddress();
  };
  const addressChange = (e) => {
    address.address = e.target.value;
    changeAddress();
  };
  const stateChange = (e) => {
    address.state = e.target.value;
    changeAddress();
  };
  const pincodeChange = (e) => {
    address.pincode = e.target.value;
    changeAddress();
  };
  const wholeAddressChange = () => {
    axios
      .delete("http://localhost:3500/shippngAddress/1")
      .then((resp) => {})
      .catch((error) => {});
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: 1,
        fullName: address.fullName,
        address: address.address,
        state: address.state,
        pincode: address.pincode,
      }),
    };
    let res = fetch(
      "http://localhost:3500/shippngAddress",
      requestOptions
    ).then((response) => response.json());
    res.then((data) => {});
  };
  const dispatch = useDispatch();
  useEffect(() => {
    let x = fetch("http://localhost:3500/shippngAddress").then((res) =>
      res.json()
    );
    x.then((data) => {
      let address = data;
      dispatch({
        type: "editAddress",
        payload: address[0],
      });
    }).catch((err) => {});
  }, []);

  return (
    <div className="addressContainer">
      <form>
        <div class="form-group">
          <input
            onChange={nameChange}
            class="form-control"
            style={{ marginTop: "1rem" }}
            id="exampleFormControlInput1"
            placeholder="Full Name"
          />
        </div>
        <div class="form-group">
          <input
            onChange={addressChange}
            class="form-control"
            style={{ marginTop: "1rem" }}
            id="exampleFormControlInput1"
            placeholder="Address"
          />
        </div>
        <div class="form-group">
          <input
            onChange={stateChange}
            class="form-control"
            style={{ marginTop: "1rem" }}
            id="exampleFormControlInput1"
            placeholder="State"
          />
        </div>
        <div class="form-group">
          <input
            onChange={pincodeChange}
            class="form-control"
            style={{ marginTop: "1rem" }}
            id="exampleFormControlInput1"
            placeholder="Pin"
          />
        </div>
      </form>
      <div
        style={{ marginTop: "3rem", border: "1px solid", borderRadius: "3px" }}
      >
        <table class="table table-borderless">
          <tbody>
            <tr>
              <th>
                <pre>Fullname :</pre>
              </th>
              <td>{address.fullName}</td>
            </tr>
            <tr>
              <th>
                <pre>Address :</pre>
              </th>
              <td>{address.address}</td>
            </tr>
            <tr>
              <th>
                <pre>State :</pre>
              </th>
              <td>{address.state}</td>
            </tr>
            <tr>
              <th>
                <pre>Pincode :</pre>
              </th>
              <td>{address.pincode}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={wholeAddressChange}
        className="processlink btn btn-primary"
        style={{ marginTop: "1.5rem" }}
      >
        Update
      </button>
    </div>
  );
}

export default AddressContainer;
