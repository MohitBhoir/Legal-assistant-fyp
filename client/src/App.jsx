import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/home'
import './App.css'
import FindLawyer from './pages/findLawyer'
import FindTemplate from './pages/findTemplate'
import RegisterCase from './pages/registerCase'
import Template from './components/Template'

const App = () => {
  return <>
    <Router>
       <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/find-lawyer" element={<FindLawyer/>} />
           <Route path="/find-template" element={<FindTemplate/>} />
            <Route path='/find-template/fir' element={<Template template={'fir'} />} />
            <Route path='/find-template/name-change' element={<Template template={'name-change'} />} />
            <Route path='/find-template/property' element={<Template template={'property'} />} />
            <Route path='find-template/lease' element={<Template template={'lease'} />} />
           <Route path="/register-case" element={<RegisterCase/>} />
       </Routes>
    </Router>
  </>
}

export default App