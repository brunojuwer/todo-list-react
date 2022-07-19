import { Trash, Check } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  id: number;
  taskTitle: string;
  isComplete: boolean;
  onCheckTask: (id: number) => void;
}

export function Task({id, taskTitle, isComplete, onCheckTask} : TaskProps) {

  function handleCheckTask(){
    onCheckTask(id)
  }

  return (
    
      <li>
        <div className={styles.checkboxContainer}>
          <label 
            className={isComplete ? styles.checkboxTaskChecked : styles.checkboxTask}
            onClick={handleCheckTask}
            >
            <input
              type="checkbox"
            />
            <span className={isComplete ? styles.checkmarkChecked : styles.checkmark }><Check size={14}/></span>
          </label>
        </div>

        <div className={isComplete ? styles.taskTitleChecked : styles.taskTitle }>
          <p>{taskTitle}</p>
        </div>

        <button 
          className={styles.deleteTask}
          type='button'
        >
          <Trash size={24}/>
        </button>
      </li>
  )
}