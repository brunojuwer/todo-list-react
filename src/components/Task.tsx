import { Trash, Check } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  id: string;
  taskTitle: string;
  isComplete: boolean;
  onCheckTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export function Task({id, taskTitle, isComplete, onCheckTask, onDeleteTask} : TaskProps) {

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
            className={isComplete ? styles.checkboxTaskChecked : styles.checkboxTask}
            onClick={handleCheckTask}
            >
            <span className={isComplete ? styles.checkmarkChecked : styles.checkmark }><Check size={14}/></span>
          </label>
        </div>

        <div className={isComplete ? styles.taskTitleChecked : styles.taskTitle }>
          <p>{taskTitle}</p>
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