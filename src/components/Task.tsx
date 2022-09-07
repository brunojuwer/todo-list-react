import { Trash, Check } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  id: number;
  taskName: string;
  taskComplete: boolean;
  onCheckTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({id, taskName, taskComplete, onCheckTask, onDeleteTask} : TaskProps) {

  function handleCheckTask(){
    onCheckTask(id)
  }

  function handleDeleteTask(){
    onDeleteTask(id)
  }

  return (
    
      <li>
        <div className={styles.checkboxContainer}>
          <label 
            className={taskComplete ? styles.checkboxTaskChecked : styles.checkboxTask}
            onClick={handleCheckTask}
            >
            <span className={taskComplete ? styles.checkmarkChecked : styles.checkmark }><Check size={14}/></span>
          </label>
        </div>

        <div className={taskComplete ? styles.taskTitleChecked : styles.taskTitle }>
          <p>{taskName}</p>
        </div>

        <button 
          className={styles.deleteTask}
          type='button'
          onClick={handleDeleteTask}
        >
          <Trash size={24}/>
        </button>
      </li>
  )
}