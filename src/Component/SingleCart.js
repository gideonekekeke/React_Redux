import { Button } from "antd";
import React, { useEffect } from "react";
// import img from "../../../assets/masterclass.jpg"
import { useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { viewCart } from "./State/ActionState";
const SingleCart = () => {
  return (
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
          src=""
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
          <div>tdyudjkfjaenj</div>

          <div>price</div>
        </div>

        <div
          style={{
            width: "300px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button type="primary" danger>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
