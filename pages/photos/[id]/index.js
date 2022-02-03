import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function index({photo}) {

  const {url, title} = photo;

  console.log('photo',photo);

  return (
  <div>
    <h2>Image {title}</h2>    
    <Image
      src={url}
      height={500}
      width={500}
    />
     <div>
      <Link href="/">
        <a>Go to Back</a>
      </Link>
    </div>
  </div>
  )
}

export const getStaticPaths = async() =>{

    return{
      paths:[
        {
          params:{id : '1'}
        },
        {
          params:{id : '2'}
        },
        {
          params:{id : '3'}
        }
      ],
      fallback:false,
    }
  }

  export const getStaticProps = async(context) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`);
    const photo = await res.json();
    console.log(photo);
    return {
       props : {
         photo    
       }
    }
  }