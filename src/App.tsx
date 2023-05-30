import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.css';
import { Router } from './Router';
import { AuthContext, AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default App;