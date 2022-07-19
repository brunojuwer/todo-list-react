import { Trash, Check } from 'phosphor-react';

import styles from './Task.module.css';

export function Task() {
  return (

    <ul>
      <li key={'d'}>
        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxTask}>
            <input
              type="checkbox"
            />
            <span className={styles.checkmark}><Check/></span>
          </label>
        </div>

        <div className={styles.taskTitle}>
          <p>Fazer comidaas dasdasda asdasdasda  asdasdasdasdadasdasdasdasd sdasdasasdasdas asdasds</p>
        </div>

        <button 
          className={styles.deleteTask}
          type='button'
        >
          <Trash size={22}/>
        </button>
      </li>
    </ul>
  )
}