import styles from './Home.module.css';
import { Banner, Cards } from '../../components';

function Home({ searchTerm }) {
  return (
    <main className={styles.main}>
      <div className={styles.page}>
        <Banner />
        <Cards searchTerm={searchTerm} />
      </div>
    </main>
  );
}

export default Home;
