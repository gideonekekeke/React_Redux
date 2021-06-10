import React, { useState, useEffect } from "react";
import { Button } from "antd";
import pic from "../Component/img/1.png";
import ViewCart from "./ViewCart";
import { connect } from "react-redux";

function CartDetails({ cart }) {
  const [totalCost, setTotalCost] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let price = 0;
    let item = 0;

    cart.forEach((r) => (item += r.qty));

    setTotalItems(item);

    cart.forEach((r) => (price += r.price * r.qty));
    setTotalCost(price);
  }, [cart, totalCost, totalItems, setTotalCost, setTotalItems]);

  return (
    <div
      style={{
        width: "98%",
        justifyContent: "space-between",
        margin: "20px",
        display: "flex",
      }}
    >
      <div style={{ width: "300px" }}>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>Summary</div>
          <br />
          <div
            style={{
              display: "flex",
              marginTop: "10px",
            }}
          >
            Total Item Selected :{" "}
            <h2 style={{ marginTop: "-5px", marginLeft: "5px" }}>
              {totalItems}
            </h2>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              marginTop: "10px",
            }}
          >
            Total Cost :{" "}
            <h2 style={{ marginTop: "-5px", marginLeft: "5px" }}>
              {totalCost}
            </h2>
          </div>
          <Button type="primary">Checkout</Button>
        </div>
      </div>
      {cart.map((item) => (
        <ViewCart item={item.id} q={item} />
      ))}
    </div>
  );
}

const mapState = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapState)(CartDetails);
