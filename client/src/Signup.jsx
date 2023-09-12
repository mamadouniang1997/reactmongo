import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [alertMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://127.0.0.1:3000/auth/register', { username, email, password })
      .then((result) => {
        console.log(result);
        navigate('/login');
        setAlertMessage('Enregistré');
        setUserName('');
        setEmail('');
        setPassword('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='col-md-12 w-100 d-flex justify-content-center align-items-center bg-secondary vh-100'>
      <div className='col-md-4 col-sm-12 sm-w-100 justify-content-center bg-white p-3 rounded'>
        <h2>REGISTER</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='text'>
              <strong>Name</strong>
            </label>
            <input
              type='text'
              placeholder='Enter Name'
              autoComplete='off'
              name='username'
              className='form-control rounded-0'
              onChange={(e) => setUserName(e.target.value)}
              value={username}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              autoComplete='off'
              name='email'
              className='form-control rounded-0'
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter password'
              autoComplete='off'
              name='password'
              className='form-control rounded-0'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type='submit' className='btn btn-primary w-100 rounded-0'>
            Register
          </button>
        </form>
        {alertMessage && <p>{alertMessage}</p>}
        <p>Vous avez un compte</p>
        <Link
          to='/login'
          className='btn btn-secondary border w-100 rounded-0 text-decoration-none'
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Signup;
