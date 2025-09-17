import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import busRoutes from '../../../data/busRoutes';
import styles from '../../../styles/Platform.module.css';

export default function AllandalePlatformSign() {
  const router = useRouter();
  const { id } = router.query;
  const [currentTime, setCurrentTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Validate platform ID for Allandale Terminal
  const platformId = parseInt(id);
  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  if (!id || isNaN(platformId) || platformId < 1 || platformId > 14) {
    return (
      <div className={styles.container}>
        <div className={styles.errorMessage}>Allandale Platform 1-14 Only</div>
      </div>
    );
  }

  const routes = busRoutes.allandale[platformId] || [];
  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <div className={styles.container}>
      {/* Service Alert Banner */}
      <div className={styles.alertBanner}>
        <span className={styles.alertText}>⚠ Terminal Changes Coming September 21st ⚠</span>
      </div>

      {/* Main Content Area */}
      <div className={styles.mainContent}>
        {/* Platform Number */}
        <div className={styles.platformSection}>
          <div className={styles.platformLabel}>PLATFORM</div>
          <div className={styles.platformNumber}>{platformId}</div>
        </div>

        {/* Divider */}
        <div className={styles.divider}></div>

        {/* Bus Routes */}
        <div className={styles.routesSection}>
          <div className={styles.routesHeader}>BUSES</div>
          <div className={styles.routesList}>
            {routes.map((bus, index) => (
              <div key={index} className={styles.routeItem}>
                <span
                  className={styles.routeNumber}
                  style={{
                    backgroundColor: bus.color || '#808080',
                    color: bus.color === '#000000' || bus.color === '#C2185B' || bus.color === '#8B0000' ? '#FFFFFF' :
                           bus.color === '#FFD700' || bus.color === '#4FC3F7' ? '#000000' : '#FFFFFF',
                    border: bus.color === '#4FC3F7' ? '1px solid #FFFFFF' : 'none'
                  }}
                >
                  {bus.route}
                </span>
                <span className={styles.routeDestination}>{bus.destination}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Clock */}
        <div className={styles.clockSection}>
          <div className={styles.time}>{timeString}</div>
        </div>
      </div>
    </div>
  );
}