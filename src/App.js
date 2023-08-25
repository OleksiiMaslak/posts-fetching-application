import React, { useRef } from 'react';
import { useState } from "react";
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';


function App() {
  

          const [posts, setPosts] = useState([
            {id:1, title:'dawd', body: 'gawg'},
            {id:2, title:'JaBaSdawdcript 2', body: 'aaaagawgggg'},
            {id:3, title:'aaaaaJaBaSfafwafafcript 3', body: 'gwfawfawa'},
          ])

          const [selectedSort, setSelectedSort] = useState('')

          const createPost = (newPost) =>{
            setPosts([...posts, newPost])
          }

          const removePost = (post) =>{
            setPosts(posts.filter(p => p.id !== post.id))
          }

          const sortPost = (sort) => {
            setSelectedSort(sort)
            setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
          }


  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
         <MySelect
         value={selectedSort}
         onChange={sortPost}
          defaultValue="Sort by"
          options={[
            {value : "title", name : "By name"},
            {value : "body", name : "By description"},

          ]}  
        />
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title={"JS post list"} />
      ) : (
        <h1 style={{ textAlign: "center" }}>Posts not found</h1>
      )}
    </div>
  );
}

export default App;