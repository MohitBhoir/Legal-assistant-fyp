import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import FindLawyer from './pages/findLawyer'
import FindTemplate from './pages/findTemplate'
import RegisterCase from './pages/registerCase'

const App = () => {
  return <>
    <Router>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/find-lawyer" element={<FindLawyer/>} />
           <Route path="/find-template" element={<FindTemplate/>} />
           <Route path="/register-case" element={<RegisterCase/>} />
       </Routes>
    </Router>
  </>
}

export default App