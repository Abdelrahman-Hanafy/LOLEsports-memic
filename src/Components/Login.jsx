import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <>
    <div className='all-parent'>
      <div className='all'>

        <div className='form'>
          <h1>
            Sign In
          </h1>
          <div className='form-input'>
            <input type='text' placeholder="Username"/>
          </div>
          <div className='form-input'>
            <input type='password' placeholder="Password"/>
          </div>
          <div className='form-input-box'>
            <input type='checkbox' name='remem'/>
            <label htmlFor='remem'>Stay signed in</label>
          </div>
          <div className='form-input'>
            <button id='form-submit' type='submit'/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login