import React, { useEffect, useMemo, useRef } from 'react';
import { useState } from "react";
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePosts';
import axios from 'axios';
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';


function App() {
  

          const [posts, setPosts] = useState([])

          const [filter, setFilter] = useState({sort : '', query : ''});
          const [modal, setModal] = useState(false);
          const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
          const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
              const posts = await PostService.getAll();
              setPosts(posts)
          })

          useEffect(() => {
            fetchPosts();
            
          }, [])

          const createPost = (newPost) => {
                  setPosts([...posts, newPost]);
                  setModal(false);
          };


          const removePost = (post) =>{
            setPosts(posts.filter(p => p.id !== post.id))
          }




  return (
      <div className="App">
          <button onClick={fetchPosts}>Get posts</button>
          <MyButton
              style={{ marginTop: "30px" }}
              onClick={() => setModal(true)}
          >
              Create user
          </MyButton>
          <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost} />
          </MyModal>

          <hr style={{ margin: "15px 0" }} />
          <PostFilter filter={filter} setFilter={setFilter} />

          {postError &&
            <h1>Error ${postError}</h1>}

          {isPostsLoading ? 
             <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div> 
           : 
              <PostList
                  remove={removePost}
                  posts={sortedAndSearchedPosts}
                  title={"JS post list"}
              />
          }
      </div>
  );
}

export default App;