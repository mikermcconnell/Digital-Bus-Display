import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  const platforms = Array.from({ length: 14 }, (_, i) => i + 1);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Barrie Transit Platform Signs
        </h1>

        <p className={styles.description}>
          Digital signage system for platform displays (320x80px)
        </p>

        <div className={styles.grid}>
          {platforms.map((platform) => (
            <Link
              href={`/platform/${platform}`}
              key={platform}
              className={styles.card}
            >
              <h2>Platform {platform}</h2>
              <p>View display</p>
            </Link>
          ))}
        </div>

        <div className={styles.info}>
          <h3>Display Information:</h3>
          <ul>
            <li>Dimensions: 320px × 80px</li>
            <li>Auto-refreshing clock</li>
            <li>Live bus route information</li>
            <li>Service alerts</li>
          </ul>
        </div>
      </main>
    </div>
  );
}