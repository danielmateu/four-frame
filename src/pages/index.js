import { Layout } from '@/components/Layout'
import Head from 'next/head'



export default function Home() {
  return (
    <>
      <Head>
        <title>4 Frame</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout
        title="Home"
        description="This is the home page"
      >

      </Layout>
    </>
  )
}


export const getServerSideProps = async (ctx) => {
  // your fetch function here 
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${
    process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`);
  const series = await res.json();
  console.log(series);
  return {
    props: {
      serie: series
    }
  }
}