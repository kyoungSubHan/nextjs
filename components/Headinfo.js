import Head  from 'next/head';

export default function Headinfo( {title} ) {
  return (
     <>
       <Head >
        <title>{title}</title>
      </Head> </> )
}

Headinfo.getInitialProps = ({title})  => {
    return {
        title : "next Pracetice"
    }
}