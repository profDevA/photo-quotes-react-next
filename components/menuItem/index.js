import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/actions";

const MenuItem = (props) => {
  const dispatch = useDispatch();
  return (
    <li>
      <a
        href={props.to}
        onClick={() => {
          dispatch(setSearch(""));
        }}
      >
        {props.menuTitle}
      </a>
    </li>
  );
};

export default MenuItem;
