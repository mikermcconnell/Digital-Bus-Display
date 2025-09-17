import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Barrie Transit Digital Platform Signs
        </h1>

        <p className={styles.description}>
          Select a terminal location to view platform displays (320x80px)
        </p>

        <div className={styles.grid}>
          <Link
            href="/downtown"
            className={styles.card}
          >
            <h2>Downtown Terminal</h2>
            <p>Platforms 13 & 14</p>
          </Link>

          <Link
            href="/allandale"
            className={styles.card}
          >
            <h2>Allandale Transit Terminal</h2>
            <p>Platforms 1-14</p>
          </Link>
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