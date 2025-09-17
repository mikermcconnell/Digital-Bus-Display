import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function DowntownTerminal() {
  const platforms = [13, 14]; // Downtown Terminal platforms

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Downtown Terminal
        </h1>

        <p className={styles.description}>
          Digital platform signs for Downtown Barrie (320x80px)
        </p>

        <div className={styles.grid}>
          {platforms.map((platform) => (
            <Link
              href={`/downtown/platform/${platform}`}
              key={platform}
              className={styles.card}
            >
              <h2>Platform {platform}</h2>
              <p>View display</p>
            </Link>
          ))}
        </div>

        <div className={styles.info}>
          <h3>Downtown Terminal Information:</h3>
          <ul>
            <li>Platforms: 13 & 14</li>
            <li>Routes: 100 (Red), 101 (Blue), 12A, 12B</li>
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