import { useState } from 'react'
import { Link, useNavigate, Form } from 'react-router-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {showWarningAlert,showSuccessAlert,showErrorAlert} from '../utils'
import {userLogin} from '../services/user'

export default function Signin(){
    
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate= useNavigate();
  const onLogin = () => {
      debugger
    if (email.length === 0) {
        showWarningAlert('please enter email')
      } else if (password.length === 0) {
        showWarningAlert('please enter password')
      } else {
        userLogin(email, password, (result) => {
          if (result['status'] === 'success') {
          
            // extract the token and cache it for further api calls
            const { userId,firstName, lastName, token, profileImage } = result['data']
            sessionStorage.setItem('userId', userId)
            sessionStorage.setItem('firstName', firstName)
            sessionStorage.setItem('lastName', lastName)
            sessionStorage.setItem('token', token)
            sessionStorage.setItem('profileImage', profileImage)
            showSuccessAlert('welcome')
  
            // redirect to the home page
            navigate('/mail')
          } else {
            showErrorAlert('invalid email or password')
          }
        })
      }
    }
return(
    <div>
    <h3 className='header'>Login</h3>

    <div className='row'>
      <div className='col'></div>
      <div className='col'>
        <div className='form'>
          <div className='mb-3'>
            <label htmlFor=''>Email</label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <label htmlFor=''>Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              className='form-control'
            />
          </div>

          <div className='mb-3'>
            <div>
              Don't you have an account yet?{' '}
              <Link to='/register'>register here</Link>
            </div>
            <button
              onClick={onLogin}
              style={{ marginTop: 10 }}
              className='btn btn-success'>
              Login
            </button>
          </div>
        </div>
      </div>
      <div className='col'></div>
    </div>
  </div>
)
}



