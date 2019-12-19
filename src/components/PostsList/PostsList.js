import React from 'react'
import './PostsList.scss'
import ListItem from './ListItem/ListItem'

const PostsList = ({posts}) => {
  let arrayPosts = Object.keys(posts).map(elem => ({...posts[elem],id : elem}))
  return (
    <ul className='PostsList'>
      {arrayPosts.map(post => <ListItem title={post.title} date={post.date} key={post.id} id={post.id}/>)}
    </ul>
  )
}

export default PostsList
