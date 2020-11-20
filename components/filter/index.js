import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/actions";

const Filter = () => {
  const dispatch = useDispatch();

  const setSearchKey = (e) => {
    dispatch(setSearch(e.target.value));
  };

  return (
    <div className="container">
      <div className="bottom-header row">
        <div className="bottom-header__left col-md-3 col-2">
          <span className="icon-alphabet"></span>
          <p className="text__small bold">Filter by alphabet</p>
        </div>
        <div className="bottom-header__right col">
          <div className="bottom-header__container search-field">
            <form action="" className="bottom-header__content">
              <input
                type="text"
                placeholder="What are you searching for?"
                onChange={setSearchKey}
              />
              <button type="submit" className="icon-search"></button>
            </form>
          </div>
          <div className="bottom-header__container alphabet-container hide-header">
            <div className="bottom-header__content">
              <ul className="alphabet"></ul>
              <span className="icon-delete" id="search-close"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
