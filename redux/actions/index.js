import * as types from "../types";
import axios from "axios";
import {SERVER_URI} from '../../constants'


// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  });

// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {

    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } });
  }, 1000);

// INCREMENT COUNTER BY 1
export const setSearch = (data) => {
  return { type: types.SET_SEARCH_KEY, payload: { searchKey: data } };
}
  

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT });

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET });

// get blogs
export const getBlogList = () => async (dispatch) => {
  const res = await axios.get(SERVER_URI + "/api/articles");
  dispatch({
    type: types.GET_BLOG_LIST,
    payload: res.data,
  });
};
