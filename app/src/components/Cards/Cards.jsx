import { Link } from "react-router-dom";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

const Cards = () => {
  const dataFromServer = useSelector((state) => state.products.products);
  const { status, error } = useSelector((state) => state.products);
  return (
    <div className='container'>
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>An error occured: {error}</h2>}
      {dataFromServer.map((el) => (
        <Link to={"/product/" + el._id} key={el._id}>
          <Card {...el} key={el._id} />
        </Link>
      ))}
    </div>
  );
};

export default Cards;
