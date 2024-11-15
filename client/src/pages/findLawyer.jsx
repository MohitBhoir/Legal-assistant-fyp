import React from 'react'
import NavBar from '../components/navbar'
import LawyerForm from '../components/lawyerForm'

const FindLawyer = () => {
  return  <>
  <div className="hero-container min-h-screen flex flex-col pt-2  ">
            <NavBar/>
            <LawyerForm/>
        </div>
  </>
}

export default FindLawyer