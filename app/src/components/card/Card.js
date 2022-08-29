import React from "react";
import "./Card.css";

class Card extends React.Component {
  render() {
    return <div className='card'>{this.props.pet}</div>;
  }
}

export default Card;
