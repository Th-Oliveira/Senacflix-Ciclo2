import styles from './Cards.module.css';
import CategorySection from '../../../CategorySection';
import movies from '../../../../data/movies';

const CATEGORIES = ['Ação', 'Comédia', 'Romance', 'Terror'];

function Cards({ searchTerm = '' }) {
  const normalizedTerm = searchTerm.trim().toLowerCase();

  const filteredMovies = normalizedTerm
    ? movies.filter((movie) =>
        movie.title.toLowerCase().includes(normalizedTerm)
      )
    : movies;

  return (
    <section className={styles.wrapper}>
      {CATEGORIES.map((category) => {
        const moviesByCategory = filteredMovies.filter(
          (movie) => movie.category === category
        );

        if (normalizedTerm && moviesByCategory.length === 0) {
          return null;
        }

        return (
          <CategorySection
            key={category}
            title={category}
            movies={moviesByCategory}
          />
        );
      })}
    </section>
  );
}

export default Cards;
