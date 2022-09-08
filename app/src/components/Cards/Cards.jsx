import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Cards = ({ data }) => {
  return (
    <div className='container'>
      {data.map((el) => (
        <Link to={"/product/" + el._id} key={el._id}>
          <Card {...el} key={el._id} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
