import React, { useState } from "react";
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

  return (
    <div className="app">
      <form>
        <MyInput type="text" placeholder="title" />
        <MyInput type="text" placeholder="body" />
        <MyButton disabled>Создать новое дело</MyButton>
      </form>
      <PostList posts={posts} title={"Здоровье: надо успеть все до Июля"} />
    </div>
  );
};

export default App;
