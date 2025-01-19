import { Link, useLocation } from 'react-router-dom'
import styles from './index.module.scss'

const Header = () => {
  const location = useLocation()

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Link
          to="/"
          className={`${styles.link} ${
            location.pathname === '/' ? styles.active : ''
          }`}
        >
          Все котики
        </Link>
        <Link
          to="/favorites"
          className={`${styles.link} ${
            location.pathname === '/favorites' ? styles.active : ''
          }`}
        >
          Любимые котики
        </Link>
      </div>
    </header>
  )
}

export default Header
