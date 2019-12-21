import React, { useContext, useEffect } from 'react'
import './MainPage.scss'
import {MdBookmarkBorder} from 'react-icons/md'
import PostsList from '../../components/PostsList/PostsList'
import { BlogContext } from '../../context/blogContext'

const MainPage = () => {
  const {getPosts,posts} = useContext(BlogContext);

  useEffect(() => {
    getPosts();
  },[posts])

  return (
    <div className='MainPage'>
      <div className='container'>
        <h1>My blog <MdBookmarkBorder/> </h1>
        {posts && <PostsList posts={posts}/>}
      </div>
    </div>
  )
}

export default MainPage
