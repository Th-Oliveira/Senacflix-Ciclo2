import styles from './Cards.module.css';
import CategorySection from '../../../CategorySection';
import movies from '../../../../data/movies';

const CATEGORIES = ['Ação', 'Comédia', 'Romance', 'Terror'];

function Cards() {
  return (
    <section className={styles.wrapper}>
      {CATEGORIES.map((category) => {
        const moviesByCategory = movies.filter(
          (movie) => movie.category === category
        );

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
