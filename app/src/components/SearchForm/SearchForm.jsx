import { useState } from "react";
import "./index.css";
import srchIcon from "./img/SearchIcon.svg";
import closeIcon from "./img/close.svg";

const SearchForm = (searchText) => {
  const [search, setSearch] = useState('');

  const SubmitHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className='SearchForm'>
      <input
        type='text'
        placeholder='Поиск товара'
        onSubmit={SubmitHandler}
        className='SearchForm__input'
      />
      <button className='SearchForm__btn'>
        {searchText === '' ? <img className="SearchForm__btn__srchIcon" src={srchIcon} alt="search icon" /> : <img className="SearchForm__btn__closeIcon" src={closeIcon} alt="close search form" /> }
      </button>
    </form>
  );
};

export default SearchForm;
