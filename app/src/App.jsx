import Card from "./components/card/Card";

const App = () => {
  const pets = ["Cat", "Dog", "Bird", "Hamster", "Horse", "Racoon"];

  const content = pets.map((pet) => <Card pet={pet} />);

  return (
    <>
      <h1> Hello React</h1>
      <div className='container'>{content}</div>
    </>
  );
};
export default App;
