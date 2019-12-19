import { GET_POSTS, GET_POST, DELETE_POST } from "./types"

const handlers = {
  [GET_POSTS] : (state,{payload}) => ({...state,posts : payload}),
  [GET_POST] : (state,{payload}) => ({...state,post : payload}),
  [DELETE_POST] : state => ({...state,post : {}}),
  DEFAULT : state => state
}

export const blogReducer = (state,action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state,action)
}