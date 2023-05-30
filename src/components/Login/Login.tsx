import styles from './Login.module.css'
import logo from '../../assets/logo.svg'

export function Login() {
  return (
    <main className={styles.mainContainer}>
      <form className={styles.formContainer}>
          <img className={styles.logo} src={logo} alt="Todo logo" />
          <input className={styles.inputContainer} type="email" placeholder="E-mail"/>
          <input className={styles.inputContainer} type="password" placeholder="Password" />
          <button className={styles.loginButton} type="submit">Login</button>
      </form>
    </main>
  )
}