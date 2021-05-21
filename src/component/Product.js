import React from "react";
import { PopoverTitle } from "react-bootstrap";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p><center><b>{title.toUpperCase()}</b></center></p>
        <hr/>
        <center>
        <p className="product__price">
          <b>Rs : </b>
          <strong>{price}</strong>
        </p>
        </center>
        <center>
        <div className="product__rating">
        <b>Rating :</b>  
            {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        </center>
      </div>

      <img src={image} alt="" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;