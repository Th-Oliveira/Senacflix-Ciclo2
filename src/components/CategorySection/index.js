import styles from './CategorySection.module.css';
import MovieCard from '../MovieCard';

function CategorySection({ title, movies }) {
  return (
    <section className={styles.categorySection}>
      <div className={styles.categoryBox}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.content}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
