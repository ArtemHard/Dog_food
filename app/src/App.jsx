import { useEffect, useState } from "react";
import api from "./Api";
import Cards from "./components/Cards/Cards";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SearchResult from "./components/SearchResult/SearchResult";

const App = () => {


  const [goods, setGoods] = useState([])
  const [data, setData] = useState([])
  const [request, setRequest] = useState('')
  const [amount, setAmount] = useState('')


  const appHeandlerText = (textFromSearchForm) => {
    const newCards = goods.filter(el => el.name.toLowerCase().includes(textFromSearchForm.toLowerCase().trim()))
    setRequest(textFromSearchForm)
    setAmount(newCards.length)
    setData(newCards)
  }

  useEffect(() => {
    api.getProductList().then(ans => {
      console.log(ans.products);
      setData(ans.products)
      setGoods(ans.products)
    })
  }, [])

  


  return (
    <>
      <Header appHeandlerText={appHeandlerText} />
      <SearchResult request={request} amount={amount} />
      <Cards goods={data} />
      <Footer />
    </>
  );
};
export default App;
