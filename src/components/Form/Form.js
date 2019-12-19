import React, { useState, useContext, useEffect } from "react";
import Input from "../Ui/Input/Input.jsx";
import "./Form.scss";
import TextArea from "../Ui/TextArea/TextArea.js";
import Button from "../Ui/Button/Button.jsx";
import { BlogContext } from "../../context/blogContext.js";

const Form = (props) => {
  console.log(props)
  const {sendMessage , editPost , post , getSinglePost} = useContext(BlogContext);
  
  // useEffect(() => {
  //   if(props.type){
  //     getSinglePost(props)
  //   }
  // },[])

  const initialState = {
    title :props.type ? post.title : '',
    text : props.type ? post.text : ''
  }
  // console.log(initialState);

  const [state, dispatch] = useState(initialState);
  // console.log(state)


  return (
    <div className="Form" onSubmit={props.type ? (event) => editPost(event,state,props) : (event) => sendMessage(event,state,props)}>
      <form className="decor">
        <div className="form-left-decoration"></div>
        <div className="form-right-decoration"></div>
        <div className="circle"></div>
        <div className="form-inner">
          <Input
            label="Input title"
            value={state.title}
            handler={event => dispatch({ ...state, title: event.target.value })}
          />
          <TextArea
            label="Сообщение..."
            rows="5"
            value={state.text}
            handler={event => dispatch({ ...state, text: event.target.value })}
          />
          <Button type="submit">Отправить</Button>

        </div>
      </form>
    </div>
  );
};

export default Form;
