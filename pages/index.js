import Headinfo  from '../components/Headinfo';
import Image from 'next/image';
import homeStyle from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home({photos}) {
  return (
    <div>     
        <Headinfo></Headinfo>  
        <ul className={homeStyle.photo}>
          {photos.map ( photo => (                        
              <li key={photo.id}>
                <Link href={`/photos/${photo.id}`}>
                <a>
                  <Image 
                  src={photo.thumbnailUrl} 
                  width={100}
                  height={100}
                  alt={photo.title}
                  ></Image>
                <span>{photo.title}</span>
                 </a>
                </Link>
              </li>              
          ))}
        </ul>       
    </div>
  )
}

// export const  getServerSideProps = async () =>  {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=1&_end=10`);
//   const photos = await res.json();
//   return {
//      props : {
//        photos      
//      }
//   }
// }



export const getStaticProps = async() => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=1&_end=10`);
  const photos = await res.json();
  return {
     props : {
       photos      
     }
  }
}