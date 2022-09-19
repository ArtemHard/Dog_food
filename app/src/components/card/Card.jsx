import React from "react";
import Counter from "../Counter/Counter";
import "./Card.css";
/*
import { useSelector } from "react-redux";
const products = useSelector(state => state.products.products)*/
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
