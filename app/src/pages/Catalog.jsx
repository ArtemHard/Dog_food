import { useEffect } from "react";
import Cards from "../components/Cards/Cards";
import SearchResult from "../components/SearchResult/SearchResult";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/store/productSlice";
const Catalog = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div>
      <h1>{props.name}</h1>
      <SearchResult request={props.request} amount={props.amount} />
      <Cards data={props.data} />
    </div>
  );
};

export default Catalog;
