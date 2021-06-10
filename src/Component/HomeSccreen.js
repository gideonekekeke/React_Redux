import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { myShopReducer } from "./State/reducerState";
import { addProduct } from "./State/ActionState";

import { connect, useDispatch, useSelector } from "react-redux";

function HomeSccreen({ view }) {
  const dispatch = useDispatch();
  const getProductData = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    if (res) {
      dispatch(addProduct(res.data));
      console.log(res.data);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        margin: "10px",
        width: "95%",
        // backgroundColor: "red",
        flexWrap: "wrap",
      }}
    >
      {view.map((item) => (
        <ProductCard item={item.id} r={item} />
      ))}
    </div>
  );
}

const mapState = (state) => {
  return {
    view: state.shop.products,
  };
};

export default connect(mapState)(HomeSccreen);
