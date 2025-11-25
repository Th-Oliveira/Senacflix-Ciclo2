import { useParams, Link } from 'react-router-dom';
import styles from './Watch.module.css';
import movies from '../../data/movies';

function getExtraInfo(movie) {
  const baseByCategory = {
    'Ação': {
      year: '2025',
      duration: '2h 10min',
      rating: '14 anos',
      director: 'James Cameron',
    },
    'Comédia': {
      year: '2024',
      duration: '1h 45min',
      rating: '12 anos',
      director: 'Woody Allen',
    },
    'Romance': {
      year: '2023',
      duration: '1h 55min',
      rating: '12 anos',
      director: 'Nancy Meyers',
    },
    'Terror': {
      year: '2022',
      duration: '1h 40min',
      rating: '16 anos',
      director: 'James Wan',
    },
  };

  const base =
    baseByCategory[movie.category] || {
      year: '2025',
      duration: '2h',
      rating: '12 anos',
      director: 'Diretor Fictício',
    };

  return {
    ...base,
    description: `Esta é uma sinopse fictícia criada apenas para demonstrar a página Watch do projeto Senacflix.\n
    Em ${movie.title}, acompanhamos uma história de ${movie.category.toLowerCase()} 
    cheia de reviravoltas e momentos marcantes.`,
  };
}

function Watch() {
  const { id } = useParams();

  if (!id) {
    return (
      <main className={styles.main}>
        <div className={styles.page}>
          <h1 className={styles.pageTitle}>Watch</h1>
          <p className={styles.pageText}>
            Nenhum filme selecionado. Acesse a Home e escolha um trailer para
            ver os detalhes aqui.
          </p>

          <Link to="/" className={styles.backLink}>
            Voltar para Home
          </Link>
        </div>
      </main>
    );
  }

  const movie = movies.find((m) => m.id === id);

  if (!movie) {
    return (
      <main className={styles.main}>
        <div className={styles.page}>
          <h1 className={styles.pageTitle}>Filme não encontrado</h1>
          <p className={styles.pageText}>
            O filme solicitado não foi encontrado. Verifique o endereço ou
            volte para a página inicial.
          </p>

          <Link to="/" className={styles.backLink}>
            Voltar para Home
          </Link>
        </div>
      </main>
    );
  }

  const extra = getExtraInfo(movie);
  const embedUrl = `https://www.youtube.com/embed/${movie.id}`;

  return (
    <main className={styles.main}>
      <div className={styles.page}>
        <div className={styles.card}>
          {/* TÍTULO + BOTÃO NA MESMA LINHA */}
          <div className={styles.cardHeader}>
            <h1 className={styles.title}>{movie.title}</h1>

            <Link to="/" className={styles.backLink}>
              Voltar para Home
            </Link>
          </div>

          <span className={styles.category}>{movie.category}</span>

          {/* PLAYER EMBUTIDO */}
          <div className={styles.playerWrapper}>
            <iframe
              src={embedUrl}
              title={movie.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* DESCRIÇÃO COM SUBTÍTULO */}
          <div className={styles.descriptionBlock}>
            <span className={styles.infoLabel}>Descrição</span>
            <p className={styles.description}>{extra.description}</p>
          </div>

          {/* OUTRAS INFORMAÇÕES */}
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Ano</span>
              <span className={styles.infoValue}>{extra.year}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Duração</span>
              <span className={styles.infoValue}>{extra.duration}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Classificação</span>
              <span className={styles.infoValue}>{extra.rating}</span>
            </div>

            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>Direção</span>
              <span className={styles.infoValue}>{extra.director}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Watch;
