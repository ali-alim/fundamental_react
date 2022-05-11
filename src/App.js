import React, { useRef, useState } from "react";
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

  const [post, setPost] = useState({title:'', body:''})

  const addNewPost = (e) => {
    e.preventDefault();
     // console.log(bodyInputRef.current.value)
    // const newPost = {
    //   id: Date.now(),
    //   title,
    //   body
    // }
    setPosts([...posts,{...post, id: Date.now()}])
    setPost({title:'', body:''})
  }


  return (
    <div className="app">
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="title"
        />
        <MyInput
          // ref={bodyInputRef}
          value={post.body}
          onChange={(e) => setPost({...post, body: e.target.value})}
          type="text"
          placeholder="body"
        />
        <MyButton onClick={addNewPost}>Создать новое дело</MyButton>
      </form>
      <PostList posts={posts} title={"Здоровье: надо успеть все до Июля"} />
    </div>
  );
};

export default App;
