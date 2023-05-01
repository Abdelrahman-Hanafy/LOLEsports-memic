import React , { useState } from 'react'
import './Style/form.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setloggedUser}) => {


  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [stay, setstay] = useState(false);
  const [token, setToken] = useState("");
  const hist = useNavigate();

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const handleStayChange = (event) => {
    setstay(event.target.checked);
    // console.log(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(user === '' || pass === ''){
      alert("PLS ENTER FULL DATA");
      return false;
    }

    const userData = {
      "handel": user, 
      "password": pass,
    };

    axios.post(`https://localhost:7091/api/Users/login`,userData)
      .then(res => {
        const token = res.data;
        setToken(token)
        window.sessionStorage.setItem('userToken',token);
        window.sessionStorage.setItem('loggedUserStay',stay);
        window.sessionStorage.setItem('loggedUser',user);
        setloggedUser(user);
        hist("/")
        // console.log(token)
      }).catch(err => {
        const msg = err.response.data;
        // handle error here
        if(msg === "Wrong Password"){
          alert("WRONG PASSWORD");
          return false
        }
        if(msg === "NO user found"){
          alert("NO SUCH USER");
          return false;
        }

      });

  };

  return (
    <>
    <div className='all-parent'>
      <div className='all'>

        <form onSubmit={handleSubmit}>
        <div className='form'>
          <h1>
            Sign In
          </h1>
          <div className='form-input'>
            <input type='text' placeholder="Username" value={user} onChange={handleUserChange}/>
          </div>
          <div className='form-input'>
            <input type='password' placeholder="Password"  onChange={handlePassChange}/>
          </div>
          <div className='form-input-box'>
            <input type='checkbox' name='remem' checked={stay} onChange={handleStayChange}/>
            <label htmlFor='remem'>Stay signed in</label>
          </div>
          <div className='form-input'>
            <button id='form-submit' type='submit'/>
          </div>
        </div>
        </form>

      </div>
    </div>
    </>
  )
}

export default Login