import * as types from '../types'

// COUNTER REDUCER
const blogReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_BLOG_LIST:
      return action.payload
    default:
      return state
  }
}

export default blogReducer;