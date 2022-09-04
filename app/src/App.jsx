import { useState } from "react";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import data from './data.json';

const App = () => {

  const [searchText, setSearchText ] = useState('')

  const [goods, setGoods] = useState(data)

  const appHeandlerText = (textFromSearchForm) => {
    console.log('App >>>>>>', textFromSearchForm);
    const newCards = data.filter(el => el.name.toLowerCase().includes(textFromSearchForm.toLowerCase()))
    setGoods(newCards)
  }



  return (
    <>
      <Header searchText={searchText} appHeandlerText={appHeandlerText} />
      <Cards goods={goods} />
      <Footer />
    </>
  );
};
export default App;
