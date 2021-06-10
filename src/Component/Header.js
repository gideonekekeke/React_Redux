import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Header({ cart }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let newCount = 0;

    cart.forEach((prod) => (newCount += prod.qty));

    setCounter(newCount);
  }, [cart, counter]);

  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "80%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Logo</div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none", color: "white" }} to="/cart">
            <ShoppingCartOutlined />
          </Link>
          <div style={{ fontSize: "15px", marginLeft: "5px" }}>{counter}</div>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapState)(Header);
