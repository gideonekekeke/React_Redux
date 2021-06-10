import React, { useState } from "react";
import { Button, Input } from "antd";
import { connect } from "react-redux";
import { adjustCart, removeFromCart } from "./State/ActionState";

function ViewCart({ q, enter, remove }) {
  const [counter, setCounter] = useState(q.qty);
  return (
    <div>
      <div>
        <div
          style={{
            width: "300px",
            backgroundColor: "lightblue",
            height: "470px",
            margin: "30px",
            borderRadius: "10px",
            paddingBottom: "20px",
            boxShadow: "0 4px 8px 0 rgba(0,0,0,0.4)",
          }}
        >
          <img
            src={q.image}
            style={{
              width: "300px",
              height: "350px",
              borderRadius: "10px 10px 0 0",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              marginLeft: "40px",
              marginTop: "10px",
            }}
          >
            <div>{q.title}</div>

            <div>$ {q.price}</div>
          </div>

          <div
            style={{
              width: "300px",
              display: "flex",
              justifyContent: "space-around",
              marginTop: "10px",
            }}
          >
            <Input
              value={counter}
              min="1"
              type="number"
              style={{
                width: "80px",
              }}
              onChange={(e) => {
                setCounter(e.target.value);
                enter(q.id, e.target.value);
              }}
            />

            <Button
              onClick={() => {
                remove(q.id);
              }}
              type="primary"
              danger
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatch = (dispatch) => {
  return {
    enter: (id, value) => {
      dispatch(adjustCart(id, value));
    },
    remove: (id) => {
      dispatch(removeFromCart(id));
    },
  };
};

export default connect(null, mapDispatch)(ViewCart);
