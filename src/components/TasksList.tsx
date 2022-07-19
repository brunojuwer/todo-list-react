import styles from './TasksList.module.css';
import addButton from '../assets/plus.svg'
import { Task } from './Task';
import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


interface Tasks {
  id: string;
  taskTitle: string;
  isComplete: boolean;
}

export function TasksList() {

  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [taskName, setTaskName] = useState('');
  const [tasksCompleted, setTasksCompleted] = useState(0);


  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()
    if (taskName){
      const newTask = {
        id: uuidv4(),
        taskTitle: taskName,
        isComplete: false
      }
      setTasks([...tasks, newTask])
      setTaskName('')
    }
  }

  function handleOnChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setTaskName(e.target.value)
  }

  function handleTaskCompleted(id: string) {
    const checkedTask = tasks.map(task => task.id === id ?
      {...task, isComplete: !task.isComplete } : task
    )
    setTasks(checkedTask)
  }

  function handleDeleteTask(id: string) {
    const deletedTask = tasks.filter(task => task.id !== id)
    setTasks(deletedTask)
  }

  function verifyTasksDone() {
    const tasksDone = tasks.reduce((acc, {isComplete}) => {
      return isComplete ? acc + 1 : acc
    }, 0)
    
    setTasksCompleted(tasksDone)
  }


  return (
  <div className={styles.container}>
    <main className={styles.content}>
      <form 
        className={styles.createTaskField}
        onSubmit={handleCreateNewTask}
      >
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa'
          name='taskName'
          onChange={handleOnChangeInput}
          value={taskName}
        />

        <button 
          type='submit'>Criar 
          <img src={addButton} 
          alt="Adicionar tarefa" 
        />
        </button>
      </form>

      <div className={styles.tasksInfo}>
        <div className={styles.createdTasks}>
          <span className={styles.createdTasksTitle}>Tarefas criadas</span>
          <span className={styles.createdTasksAmount}>{tasks.length}</span>
        </div>
        
        <div className={styles.doneTasks}>
          <span className={styles.doneTasksTitle}>Concluídas</span>
          <span 
            className={styles.doneTasksAmount}
          >
            {tasksCompleted} de {tasks.length}
          </span>
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
              onDeleteTask={handleDeleteTask}
              onTasksDone={verifyTasksDone}
            />
          </ul>
        ))}
        
      </section>
    </main>
  </div>
  )
}