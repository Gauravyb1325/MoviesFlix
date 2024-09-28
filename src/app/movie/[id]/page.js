import React from 'react';
import styles from "@/app/styles/common.module.css"
import Image from "next/image";

const Page = async ({params}) => {
    const id = params.id;

    const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;

    const options = {
        method: 'GET',
        headers: {
          'x-rapidapi-key': '0ca5edbd97msh376acd30f5e9e5cp1c6134jsn12256962c371',
          'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
        }
      };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data;

    return (

            <div className={styles.container}>
                <h2 className={styles.movie_title}>   MoviesFlix \ <span> {main_data.genre} </span> </h2>
                <div className={styles.card_section}>
                    <div>
                        <Image src={main_data.image} alt={main_data.title} width={400} height={250} />
                    </div>
                    <div>
                        <h1>{main_data.title}</h1>
                        <p>{main_data.description}</p>
                    </div>
                </div>
            </div>

    );
};

export default Page;