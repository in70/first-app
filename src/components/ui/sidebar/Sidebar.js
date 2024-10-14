import Link from 'next/link';
import styles from './Sidebar.module.css';
import { Button } from '../button';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <nav className={styles.navLinks}>
        <ul>
          <li>
            <Button className={styles.clearButton}>
              <Link href="/">Stake</Link>
            </Button>
          </li>
          <li>
          <Button className={styles.clearButton}>
              <Link href="/">Bond</Link>
            </Button>
          </li>
          <li>
          <Button className={styles.clearButton}>
              <Link href="/">Farm</Link>
            </Button>
          </li>
          <li>
            <Button className={styles.clearButton}>
              <Link href="/">Governance</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
