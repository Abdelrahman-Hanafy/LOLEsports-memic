import React , { useState,useEffect } from 'react'
import './Style/form.css'
import { useNavigate } from 'react-router-dom';

const Login = ({setloggedUser}) => {

  const [users,setUsers] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7091/api/Users',{
    })
    .then(response => response.json())
    .then(json => setUsers(json))
    }, []);

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
      if((users[u]['email'] === user|| users[u]['handel'] === user)){
        if(users[u]['password']=== pass){
          setloggedUser(user);
          // console.log(setloggedUser)
          hist('/');
          window.sessionStorage.setItem('isLoggedIn',true);
          window.sessionStorage.setItem('loggedUser',users[u]['name']);
          window.sessionStorage.setItem('loggedUserStay',stay);
          return true;
        }
        else{
          alert("WRONG PASSWORD");
          return false;
        }
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