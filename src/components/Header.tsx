import styles from './Header.module.css';
import headerLogo from '../assets/logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img src={headerLogo} alt="Imagem de logo" />
      </div>
    </header>
  )
}