import React, { useState } from "react";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
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
      <PostList posts={posts} />
    </div>
  );
};

export default App;
