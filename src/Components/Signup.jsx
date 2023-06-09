import React, { useState } from 'react'
import './Style/form.css'
import { users } from './constant'
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [pass2, setPass2] = useState("");
    const [mail, setMail] = useState("");
    const [handel, setHandel] = useState("");
    const hist = useNavigate();

    const handleUserChange = (event) => {
        setUser(event.target.value);
    };
    const handleHandleChange = (event) => {
        setHandel(event.target.value);
    };
    const handlePassChange = (event) => {
        setPass(event.target.value);
    };
    const handlePass2Change = (event) => {
        setPass2(event.target.value);
    };
    const handleMailChange = (event) => {
        setMail(event.target.value);
    };

    const handleReset = (event) => {
        // event.preventDefault();
        setHandel('');
        setMail('');
        setPass('');
        setPass2('');
        setUser('');

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = [user,handel,pass,pass2,mail];
        if( data.some((input) => input.trim() === '')) {
            return false
        }
        if(pass !== pass2){
            alert("Pass does not match");
            return false
        }else if(pass.match(/(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*$/)){
            const userData = {
                name: user, 
                gameHandel: handel,
                password: pass,
                email:mail
            };
            users.push(userData);
            hist('/login');
            return true
        }
    }

    return (
        <>
        <div className='all-parent'>
        <div className='all'>

            <form onSubmit={handleSubmit} onReset={handleReset}>
            <div className='form'>
            <h1>
                Sign In
            </h1>
            <div className='form-input'>
                <input type='text' placeholder="Username" value={user} onChange={handleUserChange}/>
            </div>
            <div className='form-input'>
                <input type='text' placeholder="Game Handle" value={handel} onChange={handleHandleChange}/>
            </div>
            <div className='form-input'>
                <input type='email' placeholder="E-Mail" value={mail} onChange={handleMailChange}/>
            </div>
            <div className='form-input'>
                <input type='password' placeholder="Password" value={pass}  onChange={handlePassChange}/>
            </div>
            <div className='form-input'>
                <input type='password' placeholder="Renter Password" value={pass2}  onChange={handlePass2Change}/>
            </div>
            <div className='form-input'>
                <button id='form-submit' type='submit'/>
                <button id='form-reset'  type='reset' />
            </div>
            </div>
            </form>

        </div>
        </div>
    </>
    )
}

export default Signup