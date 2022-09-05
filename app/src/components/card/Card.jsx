import React from "react";
import Counter from "../Counter/Counter";
import "./Card.css";

const Card = (props) => {
  return (
    <div className='card'>
      <img className='imgOfgoods' src={props.pictures} alt={props.name} />
      <span className='price'>{props.price}</span>
      <div className='count'>{props.stock}</div>
      <div className='name'>{props.name}</div>
      <Counter />
    </div>
  );
};
export default Card;
