import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage';
import Login from './Component/Login/Login';
import Navbar from './Component/Navbar/Navbar';
import SignUp from './Component/SignUp/SignUp';
import SysState from './context/Items/SysState';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
          <SysState>
          <Navbar/>
        
          <Routes>
            <Route  path='/login'  element={<Login/>}/>
            <Route  path='/signup'  element={ <SignUp/>}/>
            <Route  path='/'  element={<LandingPage/>}/>
          </Routes>
          </SysState>
        </Router>
    </>
  )
}

export default App
