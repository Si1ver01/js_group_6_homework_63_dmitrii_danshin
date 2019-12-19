import React from "react";
import "./App.scss";
import Layout from "./hoc/Layout/Layout";
import { BrowserRouter, Route, Switch , Redirect     } from "react-router-dom";
import MainPage from "./containers/MainPage/MainPage";
import CreatePost from "./containers/CreatePost/CreatePost";
import BlogState from "./context/blogState";
import Post from "./containers/Post/Post";
import About from "./containers/About/About";

function App() {
  return (
    <div className="App">
      <BlogState>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route path="/" exact component={MainPage} />
              <Route path="/newPost" component={CreatePost} />
              <Route path='/post/edit/:id' render={(props) => (<CreatePost {...props} type='edit'/>)}/>
              <Route path="/post/:id" component={Post} />
              <Route path="/about" component={About}/>
              <Redirect to='/'/>
            </Switch>
          </Layout>
        </BrowserRouter>
      </BlogState>
    </div>
  );
}

export default App;
