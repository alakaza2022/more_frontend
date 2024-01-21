// pages/index.js

import Head from 'next/head';
import MovieList from '../components/MovieList';
import fs from 'fs';

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
        <h1 style={{ textAlign: 'center', color: '#0359AE', fontFamily: 'Arial' }}>
          More Movies
        </h1>
        <h2 style={{ textAlign: 'center', color: '#14B09B', fontFamily: 'Arial' }}>
          Find this week's treding movies </h2>
        <MovieList movies={moviesData} />
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const testing = process.env.TESTING; 
  let moviesData;

  if (testing) {
    const staticData = fs.readFileSync(process.cwd()+ '/test_files/static_movie_data.json', 'utf-8');
    moviesData = JSON.parse(staticData);
  } else {
    const res = await fetch(`${process.env.HOST}/movies`);
    moviesData = await res.json();
  }

  return {
    props: {
      moviesData,
    },
  };
}

export default Home;
