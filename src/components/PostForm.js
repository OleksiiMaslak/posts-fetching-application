import React from 'react';
import { useState } from "react";
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';

const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', body:''})

     
    const addNewPost= (e)=> {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost)
        setPost({title: '', body:''})
       
        
      }

  return (
    <form>
    {/* Управляемый компонент  */}
    <MyInput
      type="text"
      placeholder="Post name"
      value={post.title}
      onChange={(e) => setPost({...post, title: e.target.value})}
    />

    {/* неуправляемый/неконтролируемый компонент 
    <MyInput
      type="text"
      placeholder="Post description"
      ref={bodyInputRef}
    />

    !! В сам компонент MyInput нужно добавить React.forwardRef !!
*/}

    <MyInput
      type="text"
      placeholder="Post description"
      value={post.body}
      onChange={(e) => setPost({...post, body: e.target.value})}

    />

    <MyButton onClick={addNewPost}>Create the post</MyButton>
  </form>
  )
}

export default PostForm