import './App.css'
import { Route,BrowserRouter,Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Forget from './components/Forget'
import ResePassword from './components/ResePassword'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/forget' element={<Forget/>}/>
      <Route path='resetpassword/*' element={<ResePassword/>}/>
      <Route path='/*'  element={<Navigate to='/login'/>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
