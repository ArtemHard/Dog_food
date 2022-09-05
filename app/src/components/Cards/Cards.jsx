import Card from "../Card/Card";

const Cards = ({ goods }) => {
  console.log(goods);
  return (
    <div className='container'>
      {goods.map((el) => (
        <Card {...el} key={el._id} />
      ))}
    </div>
  );
};

export default Cards;
