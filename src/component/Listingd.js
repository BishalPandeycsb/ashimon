import React from "react";
import Product from "./Product";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

const ListingD = (props) => {
  
  const listu = ({ d }) => {
    console.log("mealdata esto xa ki  uk:", d);
    if (d) {
      return d.map((item) => {
        return (
          <div className="col-md-6">
            <Product
              id={item._id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          </div>
        );
      });
    }
  };

  return (
    <div class="quickSearchContainer">
    <Carousel fade>
    <Carousel.Item>
    <img class="d-block w-100" src="https://source.unsplash.com/1600x200/?laptops" alt="First slide"/>

      <Carousel.Caption>
        <h3>Ashimon </h3>
        <p>E-commerce website</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img class="d-block w-100" src="https://source.unsplash.com/1600x200/?laptops" alt="First slide"/>

      <Carousel.Caption>
        <h3>Ashimon </h3>
        <p>E-commerce website</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img class="d-block w-100" src="https://source.unsplash.com/1600x200/?laptops" alt="First slide"/>

      <Carousel.Caption>
        <h3>Ashimon </h3>
        <p>E-commerce website</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img class="d-block w-100" src="https://source.unsplash.com/1200x200/?laptops" alt="First slide"/>

      <Carousel.Caption>
        <h3>Ashimon </h3>
        <p>E-commerce website</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  
      <div className="row">{listu(props)}</div>
    </div>
  );
};

export default ListingD;
