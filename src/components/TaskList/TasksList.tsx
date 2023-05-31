import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';

import styles from './TasksList.module.css';

import { Task } from '../Task/Task';

import empty from '../../assets/emptyList.svg';
import addButton from '../../assets/plus.svg';
import { Header } from '../Header/Header';
import { AuthContext } from '../../contexts/AuthContext';
import { Forbidden } from '../Forbidden/Forbidden';


interface Tasks {
  id: number;
  todoName: string;
  taskComplete: boolean;
}


export function TasksList() {

  const isLocalStorageNull = localStorage.getItem('todo-local-storage')
  
  if(!isLocalStorageNull) {
    localStorage.setItem('todo-local-storage', '[]');
  }

  const {isAuthenticated} = useContext(AuthContext)

  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [todoName, setTodoName] = useState('');
  const [tasksCompleted, setTasksCompleted] = useState(0);
  let tasksToShow = tasks

  const isInputEmpty = todoName.trim().length === 0;
  const url = 'http://localhost:8080/'

  useEffect(() => {
    fetch(`${url}todos`)
      .then(response => response.json())
      .then(values => setTasks(values))
      .catch(console.log)
  }, [tasksToShow])
  

  useEffect(() => {
    const tasksDone = tasks.reduce((acc, {taskComplete}) => {
      return taskComplete ? acc + 1 : acc
    }, 0)

    setTasksCompleted(tasksDone)
  }, [tasks])

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault()

    if (!isInputEmpty){
    
      const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({todoName})
      }

      fetch(`${url}todos`, requestOptions)
        .then(response => response.json())
        .catch(console.log)
      setTodoName('')
    }
  }

  function handleOnChangeInput(e: ChangeEvent<HTMLInputElement>) {
    setTodoName(e.target.value)
  }

  function handleTaskCompleted(id: number) {
    
    const requestOptions = {
      method: 'PUT',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({
        'idTask': id.toString()
      })
    }

    fetch(`${url}todos`, requestOptions)
  }

  function handleDeleteTask(id: number) {
    const requestOptions = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: new URLSearchParams({
        'idTask': id.toString()
      })
    }

    fetch(`${url}todos`, requestOptions)
  }

  return isAuthenticated ? (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.content}>
          <form 
            className={styles.createTaskField}
            onSubmit={handleCreateNewTask}
          >
            <input 
              type="text" 
              placeholder='Adicione um novo todo'
              name='todoName'
              onChange={handleOnChangeInput}
              value={todoName}
            />

            <button 
              type='submit'>Criar 
              <img src={addButton} 
              alt="Adicionar todo" 
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


          {
            tasks.length ?
            <section>
            {tasks.map(({id, todoName, taskComplete})=> (
              <ul key={id}>
                  <Task
                    id={id}
                    todoName={todoName}
                    taskComplete={taskComplete}
                    onCheckTask={handleTaskCompleted}
                    onDeleteTask={handleDeleteTask}
              />
              </ul>
              ))}
            </section> 
                : 
            <section className={styles.tasksEmpty}>
              <img src={empty} alt="todo vazio"/>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </section>
          }
        </main>
      </div>
  </>
  ) : (<Forbidden />)
}