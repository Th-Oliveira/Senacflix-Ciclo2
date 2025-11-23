import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../assets/img-logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink}>
        <img src={logo} alt="Senacflix" className={styles.logo} />
      </Link>
    </header>
  );
}

export default Header;
