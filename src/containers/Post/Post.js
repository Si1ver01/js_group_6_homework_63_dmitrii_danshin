import React, { useContext, useEffect } from "react";
import Button from "../../components/Ui/Button/Button";
import "./Post.scss";
import { BlogContext } from "../../context/blogContext";
import { Link } from "react-router-dom";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";

const Post = props => {
  const { getSinglePost, post, removePost } = useContext(BlogContext);

  useEffect(() => {
    getSinglePost(props);
  }, [props.match.params.id]);

  const newDate = new Date(post.date).toLocaleDateString('ru')
  return (
    <div className="Post">
      <div className="container">
        <div className="singlePost">
          <div className="postTop">
            <h1>{post.title}</h1>
            <span>Date :{newDate}</span>
          </div>
          <div className="postBody">
            <p>{post.text}</p>
          </div>
          <div className="postFooter">
            <Button handler={() => removePost(props)}>
              {<FaRegTrashAlt />}
            </Button>
            <Link to={"/post/edit/" + props.match.params.id}>
              {<FaPencilAlt />}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
