import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import api from "./Api";
import CreateProductForm from "./components/CreateProductForm/CreateProductForm";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Favorites from "./pages/Favorites";
import Main from "./pages/Main";
import Product from "./pages/Product/Product";
import Profile from "./pages/Profile";

const App = () => {
  const [goods, setGoods] = useState([]);
  const [data, setData] = useState([]);
  const [request, setRequest] = useState("");
  const [amount, setAmount] = useState("");
  const [modalActiv, setModalActiv] = useState(false);
  const [store, setStore] = useState([]);

  const appHeandlerText = (textFromSearchForm) => {
    const newCards = goods.filter((el) =>
      el.name.toLowerCase().includes(textFromSearchForm.toLowerCase().trim())
    );
    setRequest(textFromSearchForm);
    setAmount(newCards.length);
    setData(newCards);
  };

  useEffect(() => {
    api.getProductList().then((ans) => {
      setData(ans.products);
      setGoods(ans.products);
    });
  }, []);

  return (
    <>
      <Header
        appHeandlerText={appHeandlerText}
        modalActiv={modalActiv}
        setModalActiv={setModalActiv}
        store={store}
      />
      <main>
        <Routes>
          <Route path='/' element={<Main name='Главная' />} />
          <Route
            path='/catalog'
            element={
              <Catalog
                name='Каталог'
                request={request}
                amount={amount}
                data={data}
              />
            }
          />
          <Route path='/favorites' element={<Favorites name='Избранное' />} />
          <Route path='/cart' element={<Cart name='Корзина' />} />
          <Route
            path='/product/:id'
            element={<Product store={store} setStore={setStore} name='Товар' />}
          />
          <Route path='/profile' element={<Profile name='Личный кабинет' />} />
          {/* <Route
            path='/profile/signup'
            element={<SignUp name='Регистрация' />}
          /> */}
          {/* <Route path='/profile/signin' element={<SignIn name='Войти' />} /> */}
          <Route
            path='/createproduct'
            element={<CreateProductForm name='Создать товар' />}
          />
          <Route path='/contacts' element={<Contacts name='Контакты' />} />
        </Routes>
      </main>
      <Footer />
      <Modal active={modalActiv} changeActive={setModalActiv} />
    </>
  );
};
export default App;
