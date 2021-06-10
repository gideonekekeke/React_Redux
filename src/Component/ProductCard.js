import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import pic from "../Component/img/1.png";
import { addToCart } from "./State/ActionState";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function ProductCard({ r, addCart }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "10px",
          width: "100%",
          // backgroundColor: "red",
        }}
      >
        <div
          style={{
            height: "350px",
            width: "300px",
            backgroundColor: "white",
            boxShadow: "0px 5px 7px -2px rgba(0, 0, 0, 0.35)",
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                height: "150px",
                width: "150px",
                backgroundColor: "silver",
                // marginTop: "10px",
                borderRadius: "360px",
              }}
            >
              <img
                alt="productimage"
                src={r.image}
                style={{ height: "100%", width: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ fontWeight: "bold" }}>Grand product</div>
            <div style={{ width: "90%", textAlign: "center" }}>{r.title}</div>
            <div>
              <Link to={`/prod/${r.id}`}>
                <div>$ {r.price}</div>
              </Link>
            </div>
            <Button
              onClick={() => {
                addCart(r.id);
              }}
              type="primary"
              style={{ marginTop: "10px" }}
            >
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatch = (dispach) => {
  return {
    addCart: (id) => {
      dispach(addToCart(id));
    },
  };
};

export default connect(null, mapDispatch)(ProductCard);
