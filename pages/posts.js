import React from 'react';
import Headinfo from '../components/Headinfo';
import postStyle from '../styles/posts.module.css';

export default function posts({posts}) {

   console.log(posts);

  return <div>
      <Headinfo title="posts">             
      </Headinfo>
      <h1>Posts Blog</h1>
      <ul className={postStyle.post}>
          { posts.map( post => (
              <li key={post.id}> 
                <span>{post.title}</span>
                <p>{post.body}</p>
              </li>
          ))}
      </ul>
  </div>;
}


export const getServerSideProps = async (context) => {

    const res =  await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    console.log(posts);

    return {
        props:{
            posts
        }
    }
}