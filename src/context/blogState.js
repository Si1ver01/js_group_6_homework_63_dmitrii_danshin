import React, { useReducer } from 'react'
import {BlogContext} from './blogContext'
import { blogReducer } from './blogReducer'
import {axiosBlog} from '../axios/axiosBlog.js'
import { GET_POSTS, GET_POST, DELETE_POST } from './types'

const BlogState = ({children}) => {
  const initiaState = {
    posts : [],
    post : {}
  }

  const [state,dispatch] = useReducer(blogReducer,initiaState);
  const {posts , post} = state;

  const sendMessage = async (event,message,props) => {
    event.preventDefault();
    await axiosBlog.post('/blogPost.json',{...message,date : new Date()});
    props.history.push({pathname : '/'})
  }

  const getPosts = async () => {
    const response = await axiosBlog.get('/blogPost.json');
    dispatch({
      type : GET_POSTS,
      payload : response.data
    })
  }

  const getSinglePost = async (props) => {
    const id = props.match.params.id;
    const response = await axiosBlog.get('/blogPost/' + id + '.json');
    dispatch({
      type: GET_POST,
      payload : response.data
    })
  }

  const removePost = async (props) => {
    const id = props.match.params.id;
    await axiosBlog.delete('/blogPost/' + id + '.json');
    dispatch({
      type: DELETE_POST
    })
    props.history.push({pathname : '/'})
  }

  const editPost = async (event,message,props) => {
    event.preventDefault();
    const id = props.match.params.id;
    await axiosBlog.put('/blogPost/' + id + '.json' , {...message,date : new Date()});
    props.history.push({pathname : '/post/' + id })
  }

  return (
    <BlogContext.Provider value={{
      sendMessage ,getPosts, getSinglePost,removePost,editPost,
      posts , post
    }}>
      {children}
    </BlogContext.Provider>
  )
}

export default BlogState;
