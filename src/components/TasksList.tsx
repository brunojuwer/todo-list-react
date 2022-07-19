import styles from './TasksList.module.css';
import addButton from '../assets/plus.svg'
import { Task } from './Task';

export function TasksList() {

  return (
  <div className={styles.container}>
    <main className={styles.content}>
      <form className={styles.createTaskField}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa'

        />
        <button type='submit'>Criar <img src={addButton} alt="Adicionar tarefa" /></button>
      </form>

      <div className={styles.tasksInfo}>
        <div className={styles.createdTasks}>
          <span className={styles.createdTasksTitle}>Tarefas criadas</span>
          <span className={styles.createdTasksAmount}>5</span>
        </div>
        
        <div className={styles.doneTasks}>
          <span className={styles.doneTasksTitle}>Concluídas</span>
          <span className={styles.doneTasksAmount}>2 de 5</span>
        </div>
      </div>

      <section>
        <Task />
        <Task />
      </section>
    </main>
  </div>
  )
}