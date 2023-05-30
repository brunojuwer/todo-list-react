import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login/Login'
import { TasksList } from './components/TaskList/TasksList'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<TasksList />}/>
        <Route path="/login" element={<Login />}/> 
      </Route>
    </Routes>
  )
}