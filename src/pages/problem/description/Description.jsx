import React from "react";
import './description.css';

const sampleProblem =   {
    title: "1. 3Sum",
    difficulty: "Medium",
    description: "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.    Notice that the solution set must not contain duplicate triplets.",
    examples: {
        example1: {
            input:"nums = [-1,0,1,2,-1,-4]",
            output: "[[-1,-1,2],[-1,0,1]]"
        },
        example2: {
            input:"nums = [0,1,1]",
            output: "[]"
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
          <div>
            <p><b>Example 1:</b></p>
            <p><b>Input:</b> {sampleProblem.examples.example1.input}</p>
            <p><b>Output:</b>  {sampleProblem.examples.example1.output}</p>
          </div>
      </React.Fragment>
    );
}

export default Description;