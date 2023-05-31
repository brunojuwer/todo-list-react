import styles from './Login.module.css'
import logo from '../../assets/logo.svg'
import { FormEvent, useContext, useState } from 'react'
import { AuthContext } from '../../contexts/AuthContext';
import bcrypt from 'bcryptjs'
import { NavLink } from 'react-router-dom';


export function Login() {
  const salt = bcrypt.genSaltSync(10)

  const {isAuthenticated, signIn} = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  async function handleSubmit(e: FormEvent) {

    e.preventDefault()

    const data = {
      email,
      password
    }

    await signIn(data)
  }


  return (
    <main className={styles.mainContainer}>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
          <img className={styles.logo} src={logo} alt="Todo logo" />
          <input 
            className={styles.inputContainer} 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            className={styles.inputContainer} 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button 
            className={styles.loginButton} 
            type="submit"
          >Login</button>
        <section className={styles.createAccountContainer}>
          <span>Or</span>
          <p>Don't have an account? <NavLink to="/createAccount">Sign up</NavLink></p>
        </section>
      </form>
    </main>
  )
}