import styles from '../styles/common.module.css';
import Image from 'next/image';
import Link from 'next/link';
const MovieCard=(curlEle)=> {

const{id,genre,title,description}=curlEle;

  return (
    <>
     <div className={styles.card}>
       <div className={styles.card_image}>

       <Image  src={curlEle.image} alt={title}  width={260} height={200}/>

       </div>
       <div className={styles.card_data}>
    <h2>{title.substring(0,18)}</h2>
    <p>
       {`${description.substring(0,66)}...`}
    </p>
    <Link   href={`/movie/${id}`}>
    <button>

        Read More...
    </button>
    </Link>
       </div>

     </div>

    </>
  )
}

export default MovieCard