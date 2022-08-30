import React from "react";
import Counter from "../Counter/Counter";
import "./Card.css";


const Card = (props) => {

  return (
    <div className='card'>
        <img
          className='imgOfgoods'
          src={props.picture}
          alt={props.name}
        />
        <span className='price'>{props.price}</span>
        <div className='count'>{props.stock}</div>
        <div className='name'>{props.name}</div>
        <Counter />
      </div>
  )
}
export default Card

/*
class Card extends React.Component {
  render() {
    /*
- добавить картинку
-цену
=количество
=<Название>
Кнопку
    */
   /*
    return (
      <div className='card'>
        <img
          className='imgOfgood'
          src='/img/flower-48px.png'
          alt={this.props.name}
        />
        <span className='price'>200</span>
        <div className='count'>2</div>
        <div className='name'>{this.props.name}</div>
        <button></button>
        {this.props.name}
      </div>
    );
  }
}

export default Card;
*/