import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import Layout from '../containers/Layout'
import Login from '../containers/Login'
import ResetPassword from '../containers/ResetPassword'
import RecoveryPassword from '../containers/RecoveryPassword'
import Signup from '../containers/Signup'
import '../styles/global.css';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/recovery-password' element={<RecoveryPassword />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
