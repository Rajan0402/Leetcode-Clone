import React from "react";
import './description.css';

const sampleProblem =   {
    title: "1. 3Sum",
    difficulty: "Medium",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.    Notice that the solution set must not contain duplicate triplets.",
    examples: {
        example1: {
            input:"nums = [-1,0,1,2,-1,-4]",
            output: "[[-1,-1,2],[-1,0,1]]",
            explanation: `nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
            nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
            nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
            The distinct triplets are [-1,0,1] and [-1,-1,2].
            Notice that the order of the output and the order of the triplets does not matter.`
        },
        example2: {
            input:"nums = [0,1,1]",
            output: "[]",
            explanation: `The only possible triplet does not sum up to 0.`
        }
    },
    constraints: ["3 <= nums.length <= 3000","-105 <= nums[i] <= 105"]
}

const Description = () => {
    return (
        <ProblemStatement />
    );
}

const ProblemStatement = () => {
    return (
      <React.Fragment>
          <h2>{sampleProblem.title}</h2>
          <h3>{sampleProblem.difficulty}</h3>
          <p>{sampleProblem.description}</p>
          <hr />
          <div className="example_1">
            <p><b>Example 1:</b></p>
            <pre>
              <p><strong>Input:</strong> {sampleProblem.examples.example1.input}</p>
              <p><strong>Output:</strong>  {sampleProblem.examples.example1.output}</p>
              <p><strong>Explanation:</strong>  {sampleProblem.examples.example1.explanation}</p>
            </pre>
          </div>
          <hr />
          <div className="example_2">
            <p><b>Example 2:</b></p>
            <pre>
              <p><strong>Input:</strong> {sampleProblem.examples.example2.input}</p>
              <p><strong>Output:</strong>  {sampleProblem.examples.example2.output}</p>
              <p><strong>Explanation:</strong>  {sampleProblem.examples.example2.explanation}</p>
            </pre>
          </div>
      </React.Fragment>
    );
}

export default Description;