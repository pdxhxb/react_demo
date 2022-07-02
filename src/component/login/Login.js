import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login'>
      <Link className='loginItem' to="/cards">Start App</Link>
      {/* <button>Start App</button> */}
    </div>
  )
}
