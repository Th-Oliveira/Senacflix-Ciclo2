import styles from './Banner.module.css';
import bannerImg from '../assets/img-banner.svg';

function Banner() {
  return (
    <section className={styles.banner}>
      <img
        src={bannerImg}
        alt="Cinema - Movie Time"
        className={styles.image}
      />
    </section>
  );
}

export default Banner;
