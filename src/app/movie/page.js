
import Link from 'next/link'
import React from 'react'
import styles from '../styles/common.module.css'
import MovieCard from '../components/MovieCard';

const page = async () => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const url = 'https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ba521b3f75msh9471761f54cae46p1cc4bcjsn62500278e9e8',
      'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
    }
  };

  const res = await fetch(url, options);
  const data = await res.json();
  const main_data = data.titles
  console.log(data);
  return <>
  <section className={styles.movieSection}>
    <div className={styles.container}>
    <h1>Series & Movies</h1>
    <div className={styles.card_section}>
    {
      main_data.map((movie) => {
        return <MovieCard key={movie.id} {...movie}
        
         />
     
      })
    }
    </div>
    </div>
    </section>
  </>
}

export default page