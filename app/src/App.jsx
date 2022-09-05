import { useEffect, useState } from "react";
import {  Routes, Route } from "react-router-dom";
import api from "./Api";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import Product from "./pages/Product";
import Profile from "./pages/Profile";


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
      setData(ans.products)
      setGoods(ans.products)
    })
  }, [])

  


  return (
    <>
      <Header appHeandlerText={appHeandlerText} />
      <main>
        <Routes>
          <Route path="/" element={<Main name="Главная" />} /> 
            <Route path="/catalog" element={<Catalog name="Каталог" request={request} amount={amount} data={data} />} />
            <Route path="/favorites" element={<Favorites name="Избранное" />} />
            <Route path="/cart" element={<Cart name="Корзина" />} />
            <Route path="/product" element={<Product name="Товар" />} />
            <Route path="/profile" element={<Profile name="Личный кабинет" />} />
            <Route path="/contacts" element={<Contacts name="Контакты" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};
export default App;
