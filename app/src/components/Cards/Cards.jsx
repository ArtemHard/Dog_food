import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards = () => {
  const dataFromServer = useSelector((state) => state.products.products);

  return (
    <div className='container'>
      {dataFromServer.map((el) => (
        <Link to={"/product/" + el._id} key={el._id}>
          <Card {...el} key={el._id} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
