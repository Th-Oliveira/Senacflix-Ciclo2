// src/pages/Home/index.js
import styles from './Home.module.css';
import { Banner, Cards } from '../../components';

function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.page}>
        <Banner />
        <Cards />
      </div>
    </main>
  );
}

export default Home;
