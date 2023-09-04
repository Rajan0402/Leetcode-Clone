// import React from 'react'
import { useState } from 'react'

const problems1 = [{
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
  
  const problems2 = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
  },
  {
    title: "202. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
  },
  {
    title: "203. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%"
  },
  {
    title: "204. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%"
  }];

const ProblemsAll = () => {
    const [problems, setProblems] = useState([{
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
      }])

    return (
      <div>
        {/* <input type="text" placeholder="email"></input>
        <input type="text" name="password" id="" placeholder="password"></input>
        <button>Submit</button> */}
        <div>
          <table className="table_root">
            <tbody>
              <tr className="table-row">
                <th className="table__head--title">Title</th>
                <th className="table__head--Acceptance">Acceptance</th>
                <th className="table__head--Difficulty">Difficulty</th>
              </tr>
                {problems.map(problem => <ProblemTitles
                key={null}
                title={problem.title}
                acceptance={problem.acceptance}
                difficulty={problem.difficulty}
                />)}
            </tbody>
          </table>
        </div>
        <div>
            <button onClick={() => {
              setProblems(problems1);
            }}>1</button>
            <button onClick={() => {
              setProblems(problems2);
            }}>2</button>
        </div>
      </div>
    );
};

export default ProblemsAll
  
// eslint-disable-next-line react/prop-types
function ProblemTitles({title, acceptance, difficulty}) {

return (
<tr>
    <td className="table_head-title">
    {title}
    </td>
    <td className="table__head--Acceptance">
    {acceptance}
    </td>
    <td className="table__head--Difficulty">
    {difficulty}
    </td>
</tr>
);
}