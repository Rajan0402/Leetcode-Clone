import React from 'react'
import ProblemsNav from '../../components/problemsNav/ProblemsNav'
import Description from "./description/Description"
import Solution from "./solution/Solution"
import Submission from "./submission/Submission"
import { Route, Routes } from "react-router-dom"
import './problems.css'

function Problems() {
  return (
    <React.Fragment>
      <ProblemsNav />
      <div className="problem_page">
        <div className="Problem_container">
          <Routes>
            <Route path="/description" element={<Description />} />
            <Route path="/solution" element={<Solution />} />
            <Route path="/submission" element={<Submission />} />
          </Routes>
        </div>
        {/* <div className="coding_space">
          /* <textarea name="write your code here" id="codespace" cols="90" rows="60">
             </textarea> */}
         {/* </div> */}
      </div>
    </React.Fragment>
  )
}

export default Problems;