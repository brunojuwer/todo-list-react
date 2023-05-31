import { NavLink } from "react-router-dom";
import styles from './CreatedAccountSuccess.module.scss'


export function CreatedAccountSuccess() {
  return (
    <main className={styles.createdAccountContainer}>
      <div className={`${styles.dummyPositioning}`}>
        <div className={styles.successIcon}>
          <div className={styles.successIcon__tip}></div>
          <div className={styles.successIcon__long}></div>
        </div>
      </div>
      <h1 className={styles.successAccount}>
        Account created successfully
      </h1>
      <NavLink to="/login">
        BACK TO LOGIN
      </NavLink>
    </main>
  )
}