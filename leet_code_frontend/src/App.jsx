import { useState } from "react";

const problems1 = [{
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "42%"
},
{
  title: "201. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "412%"
},
{
  title: "202. Happy Number",
  difficulty: "Easy",
  acceptance: "54.9%"
},
{
  title: "203. Remove Linked List Elements",
  difficulty: "Hard",
  acceptance: "42%"
}];

const problems2 = [{
  title: "101. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "42%"
},
{
  title: "102. Bitwise AND of Numbers Range",
  difficulty: "Medium",
  acceptance: "412%"
},
{
  title: "103. Happy Number",
  difficulty: "Easy",
  acceptance: "54.9%"
},
{
  title: "104. Remove Linked List Elements",
  difficulty: "Hard",
  acceptance: "42%"
}];

function App() {

  const [problems, setProblems] = useState([])

  return (
      <div>
        <input type="text" placeholder="email"></input>
        <input type="text" name="password" id="" placeholder="password"></input>
        <button>Submit</button>
        <div>
            <button onClick={() => {
              setProblems(problems => problems1);
            }}>1</button>
            <button onClick={() => {
              setProblems(problems => problems2);
            }}>2</button>
        </div>
        <div>
          {problems.map(problem => {<ProblemStatement
              title={problem.title}
              acceptance={problem.acceptance}
              difficulty={problem.difficulty}
            />})}
        </div>
      </div>
  )
}


function ProblemStatement(props) {

  return <tr>
    <td>
      {props.title}
    </td>
    <td>
      {props.acceptance}
    </td>
    <td>
      {props.difficulty}
    </td>
  </tr>
}

export default App
