import React from "react";
// import PropTypes from 'prop-types'

function Product(props) {
  return (
    <div>
      <img src={props.img} alt="sneakers" />
      <h4>{props.name}</h4>
      <p>{props.desc}</p>
      <h4>{props.price}</h4>s
    </div>
  );
}

export default Product;
