import './App.css'
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Forget from './components/Forget'
import ResePassword from './components/ResePassword'
import UserDetails from './components/userDetailContext'
import DashBoard from './components/DashBoard'
import ProtectedRoute from './components/ProtectedRoute'
import UseValidate from './components/CustomHooks/UseValidate'
// import { userDetailContext } from './components/userDetailContext'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/forget' element={
            <UserDetails>
              <Forget />
            </UserDetails>
          } />
          <Route path='/dashboard' element={
            <ProtectedRoute>
              <DashBoard />
            </ProtectedRoute>
          } />
          <Route path='/resetpassword/*' element={
            <UserDetails>

              {/* <UseValidate> */}
              <ResePassword />
              {/* </UseValidate> */}

            </UserDetails>
          } />
          <Route path='/login' element={<Login />} />

          <Route path='/*' element={<Navigate to='/login' />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
