import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = ({setIsAuthenticated}) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState('')
    const handleChange = (e) => {
        if(errorMessage) setErrorMessage('')
        setUsername(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(username === 'Oybek') {
            setIsAuthenticated(true);
            navigate('/')
            return
        }

        setErrorMessage('invalid username, please enter again')
        
    }
  return (
    <form onSubmit={handleSubmit} className='login'>
        {errorMessage && <p>{errorMessage}</p>}
        <h3>Login</h3>
      <input type="text" placeholder='enter your username' value={username} onChange={handleChange} />
      <button>enter</button>
    </form>
  )
}

export default Login
