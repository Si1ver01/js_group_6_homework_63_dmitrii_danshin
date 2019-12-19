import React from 'react'
import Form from '../../components/Form/Form'
import './CreatePost.scss'

const CreatePost = (props) => {
  console.log(props);


  return (
    <div className='CreatePost'>
      <div className='container'>
        <h1>Create post</h1>
        <Form {...props}/>
      </div>
    </div>
  )
}

export default CreatePost
