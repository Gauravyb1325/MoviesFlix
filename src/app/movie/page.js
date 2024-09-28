import Link from 'next/link'
import React from 'react'
import MovieCard from '../components/MovieCard';
import styles from '../styles/common.module.css'
import { resolve } from 'styled-jsx/css';
const movie=async()=>  {

  await new Promise(resolve => setTimeout(resolve, 2000));
    
  
  //  const fetch = require('node-fetch');

const url = process.env.RAPID_KEY;

const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '0ca5edbd97msh376acd30f5e9e5cp1c6134jsn12256962c371',
    'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};
const res= await fetch(url,options);
const data= await res.json();
const main_data=data;



  return (
   /* another way to write className using templete letral */
    <section  className={`${styles.movieSection}`}>    
    <div className={styles.container}>
    
    <h1>Series and Movies</h1>
    <div className={styles.card_section}>
     {
      main_data.map((curlEle)=>{
            return <MovieCard key={curlEle.imdbid}  {...curlEle} />  /*key aur sara data pass krr rha hu */
      })
     }
     </div>
    </div>
    </section>
  )
}

export default movie