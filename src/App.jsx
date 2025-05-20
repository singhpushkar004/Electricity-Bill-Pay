import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter as Router , Routes, Route } from 'react-router'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Policy from './pages/Policy'
import AdminDashboard from './pages/admin/AdminDashboard'
import UserManagement from './pages/admin/UserManagement'
import AdminHome from './pages/admin/AdminHome'
import BillingManagement from './pages/admin/BillingManagement'
import PaymentManagement from './pages/admin/PaymentManagement'
import UnitUsageManagement from './pages/admin/UnitUsageManagement'
import ComplaintManagement from './pages/admin/ComplaintManagement'
import ReportGeneration from './pages/admin/ReportGeneration'
import AdminSettings from './pages/admin/AdminSettings'
import AdminLogin from './pages/admin/AdminLogin '


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/policy' element={<Policy/>}></Route>

        {/* admin route */}
        <Route path='/adlogin' element={<AdminLogin/>}></Route>
        <Route path='/admin/' element={<AdminDashboard/>}>
          <Route index element={<AdminHome/>}/> 
          <Route path="users" element={<UserManagement />} />
          <Route path="billing" element={<BillingManagement/>} />
          <Route path="payments" element={<PaymentManagement />} />
          <Route path="usage" element={<UnitUsageManagement />} />
          <Route path="complaints" element={<ComplaintManagement />} />
          <Route path="reports" element={<ReportGeneration />} />
          <Route path="settings" element={<AdminSettings />} />  
        </Route>
      </Routes>
     </Router>
    </>
  )
}

export default App
