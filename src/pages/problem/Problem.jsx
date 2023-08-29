import React, { useState } from "react";
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import './problem.css'

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

const Problems = () => {
    return (
        <MuiTabs />
    );
}


const MuiTabs = () => {
  const [value, setValue] = useState('1')
  
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label='Tabs example'
            textColor='secondary'
            indicatorColor='secondary'>
            <Tab label='Tab One'value='1'/>
            <Tab label='Tab Two' value='2'/>
            <Tab label='Tab Three' value='3' />
          </TabList>
        </Box>
        <TabPanel value='1'><ProblemStatement/></TabPanel>
        <TabPanel value='2'>Item Two</TabPanel>
        <TabPanel value='3'>Item Three</TabPanel>
      </TabContext>
    </Box>
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
export default Problems;