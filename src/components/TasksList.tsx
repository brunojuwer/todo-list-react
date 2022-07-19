import styles from './TasksList.module.css';
import addButton from '../assets/plus.svg'
import { Task } from './Task';
import { useState } from 'react';

const mytasks = [
  {
    id: 1,
    taskTitle: 'asdopaskdpoaksd asd a sd çfgkhjfgolij adasd asd',
    isComplete: false
  },
  {
    id: 2,
    taskTitle: 'asdafuhjlidjlf sdf kjsdf asd a sd asd  sad ad adasd asd',
    isComplete: false
  },
  {
    id: 3,
    taskTitle: 'asdopaskdpoaksd asd   sad ad adasd asd',
    isComplete: false
  },
]

export function TasksList() {

  const [tasks, setTasks] = useState(mytasks);

  function handleTaskCompleted(id: number) {
    const checkedTask = tasks.map(task => task.id === id ?
      {...task, isComplete: !task.isComplete } : task
    )
      console.log(checkedTask)
    setTasks(checkedTask)
  }

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
          <span className={styles.createdTasksAmount}>{tasks.length}</span>
        </div>
        
        <div className={styles.doneTasks}>
          <span className={styles.doneTasksTitle}>Concluídas</span>
          <span className={styles.doneTasksAmount}>2 de 5</span>
        </div>
      </div>

      <section>
        {tasks.map(({id, taskTitle, isComplete})=> (
          <ul key={id}>
            <Task
              id={id}
              taskTitle={taskTitle}
              isComplete={isComplete}
              onCheckTask={handleTaskCompleted}
            />
          </ul>
        ))}
        
      </section>
    </main>
  </div>
  )
}