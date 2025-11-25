import { useState } from 'react';
import styles from './Search.module.css';

function Search({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setTerm(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className={styles.searchWrapper}>
      <span className={styles.icon}>🔍</span>
      <input
        type="text"
        placeholder="Pesquisar filmes..."
        value={term}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
}

export default Search;
