import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../Api";
import style from "./product.module.css";

const Product = (props) => {
  console.log(props.store);
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const setCart = (e) => {
    let arr = [...props.store];
    let flag = true;
    console.log("id >>>>>> " + id);
    arr.forEach((el) => {
      console.log(el);
      console.log(el.id);
      if (el.id === id) {
        el.cnt++;
        flag = false;
      }
    });
    if (flag) {
      arr.push({ id: id, cnt: 1 });
    }
    props.setStore(arr);
  };

  useEffect(() => {
    api.getSingleProduct(id).then((ans) => {
      console.log(ans);
      setProduct(ans);
    });
  }, []);

  return (
    <div className={style.product__container}>
      <div
        className={style.product__pic}
        style={
          product.pictures && { backgroundImage: `url(${product.pictures})` }
        }
      ></div>
      <h1>{product.name || "Нет информации о товаре"}</h1>
      <div className='btn' onClick={setCart}>
        Добавить в корзину
      </div>
    </div>
  );
};

export default Product;
