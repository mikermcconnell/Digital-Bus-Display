import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function AllendaleTerminal() {
  const platforms = Array.from({ length: 14 }, (_, i) => i + 1); // Platforms 1-14

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Allandale Transit Terminal
        </h1>

        <p className={styles.description}>
          Digital platform signs for Allandale Terminal (320x80px)
        </p>

        <div className={styles.grid}>
          {platforms.map((platform) => (
            <Link
              href={`/allandale/platform/${platform}`}
              key={platform}
              className={styles.card}
            >
              <h2>Platform {platform}</h2>
              <p>View display</p>
            </Link>
          ))}
        </div>

        <div className={styles.info}>
          <h3>Allandale Terminal Information:</h3>
          <ul>
            <li>Platforms: 1-14</li>
            <li>Full transit hub with all Barrie Transit routes</li>
            <li>Display: 320px × 80px</li>
            <li>Auto-refreshing clock & alerts</li>
          </ul>

          <Link href="/" className={styles.backLink}>
            ← Back to Terminal Selection
          </Link>
        </div>
      </main>
    </div>
  );
}