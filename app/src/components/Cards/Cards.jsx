import Card from "../Card/Card";

const Cards = ({ data }) => {
  return (
    <div className='container'>
      {data.map((el) => (
        <Card {...el} key={el._id} />
      ))}
    </div>
  );
};

export default Cards;
