import logo from '../../assets/logo.svg'
import styles from './CreateAccount.module.css'

export function CreateAccount() {
  return (
    <main className={styles.createAccountContainer}>
      <form className={styles.createAccountForm}>
        <img className={styles.logo} src={logo} alt="Todo logo" />
        <h2 className={styles.createAccountTitle}>Create Account</h2>
        <input className={styles.inputContainer} type="text" placeholder="Full Name"/>
        <input className={styles.inputContainer} type="email" placeholder="E-mail"/>
        <input className={styles.inputContainer} type="password" placeholder="Password"/>
        <input className={styles.inputContainer} type="password" placeholder="Confirm password"/>
        <button className={styles.createAccountButton} type="submit">Create</button>
      </form>
    </main>
  )
}