import React , { useState } from 'react'
import './Style/form.css'
import { users } from './constant'
import { useNavigate } from 'react-router-dom';

const Login = ({setloggedUser}) => {

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [stay, setstay] = useState(false);
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

    for(const u in users){
      // console.log(users[u]);
      if((users[u]['name'] === user|| users[u]['gameHandel'] === user) && users[u]['password']=== pass){
        setloggedUser(user);
        // console.log(setloggedUser)
        hist('/');
        window.localStorage.setItem('isLoggedIn',true);
        window.localStorage.setItem('loggedUser',user);
        window.localStorage.setItem('loggedUserStay',stay);
        return true;
      }
      else if(users[u]['name'] === user){
        alert("WRONG PASSWORD");
        return false;
      }
    }
    alert("NO SUCH USER");
    return false;
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