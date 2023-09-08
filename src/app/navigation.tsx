'use client';
import Link from 'next/link';
import styles from './navigation.module.css';
import { useGlobalContext } from './context/store';

const linksInfo = [
  { label: 'Acerca de', route: '/about' },
  { label: 'Bibliografía', route: '/bibliografia' },
  { label: 'Encuentros', route: '/' },
];

const Navigation = () => {
  const { clicksCount, setClicksCount } = useGlobalContext();
  const displayNav = clicksCount >= 8;

  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        onClick={() => setClicksCount(clicksCount + 1)}
      >
        {displayNav && (
          <ul className={styles.menu}>
            {linksInfo.map(({ label, route }, i) => (
              <li key={i} className={styles.menuItem}>
                <Link href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        )}
        <span className={styles.counter}>Clics: [{clicksCount}]</span>
      </nav>
    </header>
  );
};

export default Navigation;
