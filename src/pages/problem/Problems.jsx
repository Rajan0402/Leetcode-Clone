import Navbar from "../../components/Navbar"
import Description from "./description/Description"
import Solution from "./solution/Solution"
import Submission from "./submission/Submission"
import { Route, Routes } from "react-router-dom"
import './problems.css'

function Problems() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/description" element={<Description />} />
          <Route path="/solution" element={<Solution />} />
          <Route path="/submission" element={<Submission />} />
        </Routes>
      </div>
    </>
  )
}

export default Problems;