import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useFetching} from '../../hooks/useFetching';
import PostService from '../../API/PostService';
import { useState } from 'react';
import Loader from '../../components/UI/Loader/Loader'


const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPostByID, isLoading, error] = useFetching ( async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data)
  })

  const [fetchComments, isComLoading, comError] = useFetching ( async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    console.log(response.data);
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostByID(params.id);
    fetchComments(params.id);


  } , [])

  return (
    <>
      <h1>
          Post item with id = {params.id} was opened. 
      </h1>
      {isLoading ? <Loader/> : <div>{post.id} {post.title}</div>}

      <h1 style={{marginTop: 20}}>Comments:</h1>
     
      {isComLoading ? <Loader/> :     
          <div>
            {comments.map(comm => {
              
              return (
                <div style={{marginTop: 15}}>
                  <h4>{comm.email}</h4>
                  <div>{comm.body}</div>
                </div>
              )
            })}
        </div>
      }
    </>  
  )
}

export default PostIdPage