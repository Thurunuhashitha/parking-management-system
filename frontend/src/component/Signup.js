import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Signupvalidation';
import axios from 'axios';
import background from './image/background.jpg';


function Signup() {

  const [values, setValues] = useState({
      name: '',
      email: '',
      password: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values));
      if(errors.name === "" && errors.email === "" && errors.password === "") {
        axios.post("http://localhost:8081/signup", values)
        .then (res =>  {
          navigate("/")
      })
        .catch(err => console.log(err));
      }
    }
  return (
    <div
      className='d-flex justify-content-center align-items-center vh-100 text-white'
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>
        <div
        className='p-3 rounded w-25'
        style={{
            backgroundColor: 'transparent',
            border: '1px solid rgba(186, 188, 75, 0.5)',
            backdropFilter: 'blur(5px)',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}
>   

          <h2>Sign-Up</h2>
            <form action="" onSubmit={handleSubmit}>
              <div className='mb-3 '>
                    <label htmlFor="name" ><strong>Name</strong></label>
                    <input type="text"  placeholder='Enter Name'  name='name'
                    onChange={handleInput} className='form-control rounded-0 text-white'  
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(228, 229, 149, 0.5)', 
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'                  
                }} />
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input  type="email" placeholder='Enter Email ' name='email'
                    
                    onChange={handleInput} className='form-control rounded-0 text-white'
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(228, 229, 149, 0.5)', 
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'                  
                }} />
                    {errors.email && <span className='text-danger '>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password'
                    onChange={handleInput} className='form-control rounded-0 text-white'
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid rgba(228, 229, 149, 0.5)', 
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'                  
                }} />
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 text-black'
                style={{
                      backgroundColor: 'white',
                      border: '1px solid black', 
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'                  
                }}
                >Log in</button>
                <p>You are agree to our terms and conditions</p> 
                <Link to="/" className='text-white'>Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup