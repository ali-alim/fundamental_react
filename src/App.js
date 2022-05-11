import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Визит к стоматологу-терапевту",
      body: "Пломбирование зубов",
    },
    {
      id: 2,
      title: "Визит к стоматологу-ортодонту",
      body: "Исправление нижних передних зубов",
    },
  ]);


  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const bodyInputRef = useRef();

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  


  return (
    <div className="app">
      <PostForm create={createPost} />
      {posts.length !== 0
      ? <PostList remove={removePost} posts={posts} title={"Здоровье: надо успеть все до Июля"} />
      : <h1><center>No Posts Found</center></h1>
      }
    </div>
  );
};

export default App;
