'use client';
import Link from 'next/link';
import styles from './nav.module.css';
import { useGlobalContext } from './context/store';

const links = [
  { label: 'CLICAR', route: '/' },
  { label: 'POÉTICAS', route: '/poeticas' },
  { label: 'USUARIAS', route: '/user' },
  { label: 'VIRTUAL INFRASTRUCTOUR', route: '/virtual-infrastructour' },
  { label: 'MEDIAR EL DAÑO DIGITAL', route: '/mediar-dano-digital' },
  { label: 'ARCHIVO', route: '/sostenibilidad-y-archivo' },
  { label: 'RESIDUOS SÓNICOS', route: '/residuos-sonicos' },
];

const Navigation = () => {
  const { clicksCount, setClicksCount } = useGlobalContext();
  return (
    <nav className={styles.nav} onClick={() => setClicksCount(clicksCount + 1)}>
      <ul className={styles.menu}>
        {links.map(({ label, route }, i) => (
          <li key={i} className={styles.menuItem}>
            <Link href={route}>{label}</Link>
          </li>
        ))}
      </ul>
      <span className={styles.counter}>Clics: [{clicksCount}]</span>
    </nav>
  );
};

export default Navigation;
