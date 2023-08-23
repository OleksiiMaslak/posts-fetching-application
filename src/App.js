import React, { useRef } from 'react';
import { useState } from "react";
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';


function App() {
  

          const [posts, setPosts] = useState([
            {id:1, title:'JaBaScript', body: 'desctiption'},
            {id:2, title:'JaBaScript 2', body: 'desctiption'},
            {id:3, title:'JaBaScript 3', body: 'desctiption'},
          ])

          const createPost = (newPost) =>{
            setPosts([...posts, newPost])
          }

          



  return (
    <div className="App">
      <PostForm create={createPost}/>

      <PostList posts={posts} title={"JS post list"} />
    </div>
  );
}

export default App;
