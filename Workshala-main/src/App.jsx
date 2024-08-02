import React from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Protectedroute from './Components/Protectedroute';
import Home from './Home';
import Login from './Components/Login';
import Reset from './Components/Reset password/Reset'
import Register from './Components/Register/Register'
import CompaniesCard from './Components/ComapaniesCard';
import Companies from './Components/Companies';
import Jobs from './Components/Jobs'
import Profile from './Components/Profile';
import Welcome from './Components/Welcome'
import Courses from './Components/Courses'
import Courses2 from './Components/Courses2'
function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
   <>
 <Router>
  <Routes>
   <Route exact path='/' element={<Home />} />
   <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/reset' element={<Reset/>}/>
    <Route exact path='/register' element={<Register/>}/>
    <Route element={<Protectedroute isAuthenticated={isAuthenticated} />}>
   <Route exact path='/companies' element={<Companies/>}/>
   <Route exact path='/jobs' element={<Jobs/>}/>
   <Route exact path='/profile' element={<Profile/>}/>
    <Route exact path='/welcome' element={<Welcome/>}/>
    <Route exact path='/courses' element={<Courses/>}/>
    <Route exact path='/courses2' element={<Courses2/>}/>
    </Route>
    </Routes> 
    </Router>      
   </>
  )
}
export default App
