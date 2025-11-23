import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

function MovieCard({ movie }) {
  return (
    <Link
      to={`/watch/${movie.id}`}
      className={styles.card}
      title={movie.title}
    >
      <img src={movie.img} alt={movie.title} className={styles.image} />

      {/* TÍTULO DO FILME ABAIXO DO CARD */}
      <span className={styles.title}>{movie.title}</span>
    </Link>
  );
}

export default MovieCard;
