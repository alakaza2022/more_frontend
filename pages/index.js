// pages/index.js

import Head from 'next/head';
import MovieList from '../components/MovieList';

const Home = ({ moviesData }) => {
  return (
    <>
      <Head>
        <title>More Movies</title>
        <meta name="description" content="A simple movie app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MovieList movies={moviesData} />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/movies');
  const moviesData = await res.json();

  return {
    props: {
      moviesData,
    },
  };
}

export default Home;
