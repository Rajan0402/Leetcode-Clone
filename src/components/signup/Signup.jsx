import React from 'react'
import logo from '../../assets/leetcode.png'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <React.Fragment>
      <div className='flex flex-col mt-20 py-10 max-w-[500px] w-full mx-auto items-center justify-center bg-white p-6 rounded-lg  '>
        <form className=''>
          <div>
            <img className='h-24 mx-auto' src={logo} alt="img" />
          </div>
          <div>
            <h3 className='text-xl mt-4'>Register here</h3>
          </div>
          <div>
          <input type="text" className='w-96 border border-black rounded-sm mt-6 p-3 focus:border-orange-500 focus:outline'
              placeholder='Username' />
          </div>
          <div className=''>
            <input type="text" className='w-96 border border-black rounded-sm mt-6 p-3  focus:border-orange-500 focus:outline'
              placeholder='Email' />
          </div>
          <div>
          <input type="Password" className='w-96 border border-black rounded-sm mt-6 p-3 focus:border-orange-500 focus:outline'
              placeholder='Password' />
          </div>
          <div>
            <button className='mt-6 p-3 w-96 rounded font-thin bg-gradient-to-r from-gray-700 to-gray-600 text-white shadow-md hover:bg-gray-500'>
              Sign Up
            </button>
          </div>
          <div className='flex flex-row mt-6 w-96 mx-auto justify-start'>
            <Link to={'/login'} className='hover:scale-110 text-gray-700 cursor-pointer'>
              Already user? Login
            </Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default Signup