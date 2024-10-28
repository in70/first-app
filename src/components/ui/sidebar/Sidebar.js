import Link from 'next/link';
import styles from './Sidebar.module.css';
import { Button } from '../button';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.navLinks}>
        <ul>
          <li>
            <Link href="/" passHref>
              <Button className={styles.clearButton}>Home</Button>
            </Link>
          </li>
          <li>
            <Link href="/leaderboard" passHref>
              <Button className={styles.clearButton}>Leaderboard</Button>
            </Link>
          </li>
          <li>
            <Link href="/farm" passHref>
              <Button className={styles.clearButton}>Farm</Button>
            </Link>
          </li>
          <li>
            <Link href="/governance" passHref>
              <Button className={styles.clearButton}>Governance</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
