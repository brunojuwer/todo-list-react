import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import { Router } from './Router';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App;