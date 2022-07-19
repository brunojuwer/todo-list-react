import { Header } from './components/Header';

import styles from './App.module.css';
import { TasksList } from './components/TasksList';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <TasksList />
    </div>
  )
}

export default App;