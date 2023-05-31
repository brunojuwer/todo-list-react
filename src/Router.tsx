import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login/Login'
import { TasksList } from './components/TaskList/TasksList'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CreateAccount } from './components/CreateAccount/CreateAccount'
import { CreatedAccountSuccess } from './components/CreatedAccountSuccess/CreatedAccountSuccess'

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />} >
        <Route path="/" element={<TasksList />}/>
        <Route path="/login" element={<Login />}/> 
        <Route path='/createAccount' element={<CreateAccount />}/>
        <Route path='/createAccountSuccess' element={<CreatedAccountSuccess />}/>
      </Route>
    </Routes>
  )
}