import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/img-logo.svg'; 
import Search from '../Search';

function Header({ onSearch }) {
  return (
    <header className={styles.header}>
      <div className={styles.leftSpacer} />

      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="Senacflix" className={styles.logo} />
      </Link>

      <div className={styles.searchContainer}>
        <Search onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Header;
