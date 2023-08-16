import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import styles from './layout.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Clicar',
  description: 'Seminario de Mediación cultural digital',
};
const links = [
  { label: 'home', route: '/' },
  { label: 'poéticas', route: '/poeticas' },
  { label: 'user', route: '/user' },
  { label: 'virtual infrastructour', route: '/virtual-infrastructour' },
  { label: 'mediar el daño digital', route: '/mediar-dano-digital' },
  { label: 'sostenibilidad y archivo', route: '/sostenibilidad-y-archivo' },
  { label: 'residuos sónicos', route: '/residuos-sonicos' },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav>
            <ul className={styles.menu}>
              {links.map(({ label, route }, i) => (
                <li key={i}>
                  <Link href={route}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
