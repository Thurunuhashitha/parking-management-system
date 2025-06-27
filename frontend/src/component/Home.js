import React, {useState } from 'react' 
import {useNavigate  } from 'react-router-dom'
import Validation from './Homevalidation';
import axios from 'axios';
import background from './image/background.jpg';

function Home() {

  const [values, setValues] = useState({
    place: '',
    vehicleType: '',
    name: '',
    mobile: '',
    entryDateTime: '',
    exitDateTime: ''
    });
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const handleInput = (event) => {
      setValues(prev => ({...prev, [event.target.name]: event.target.value }));
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      setErrors(Validation(values));
      if(errors.name === "" && errors.mobile === "" && errors.entryDateTime === "" && errors.exitDateTime === "") {
        axios.post("http://localhost:8081/home", values)
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
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-transparent">
      <div className="container">
        <h4 >PARKLANKA</h4>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-white" href="#home">HOME</a>
            </li> 
            <li className="nav-item">
              <a className="nav-link text-white" href="#about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#pricing">PRICING</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#why-us">WHY US</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="testimonial">TESTIMONIAL</a>
            </li>
              
          </ul>
        </div>
      </div>
    </nav>
   
    {/* Main Content */}
      <div className="container mt-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">FINDING PARKING LOTS MADE EASY</h1>
          <p className="lead">
            Do we not lead to the needs of this pain? Therefore let the flatteries of life be greater, from expedient ex. All but blinded. It pleases most of the harshest people who are held to the duties of laborious tasks by nothing!
          </p>
        </div>
        <form action="" onSubmit={handleSubmit}>
          <div className="row mb-4">
            <div className="col-md-3 mb-3 mb-md-0">
              <label className="form-label">Select Parking Place</label>
              <select name='place' onChange={handleInput} className='form-select rounded-0 '>
                {errors.place && <span className='text-danger'>{errors.place}</span>}
                <option>Highway Park</option>
                <option>City Park</option>
                <option>Underground</option>
              </select>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <label className="form-label">Select Vehicle Type</label>
              <select name='vehicleType' onChange={handleInput} className='form-select rounded-0  '>
                {errors.vehicleType && <span className='text-danger'>{errors.vehicleType}</span>}
                <option>Electric</option>
                <option>Long(Bus/Lorry)</option>
                <option>Car/Van</option>
              </select>
            </div>
            <div className="col-md-3 mb-3 mb-md-0">
              <label className="form-label">Your Name</label>
              <input type="text"  placeholder="Your Name" name='name' onChange={handleInput} className='form-control rounded-0 ' />
              {errors.name && <span className='text-danger'>{errors.name}</span>}
            </div>
            <div className="col-md-3">
              <label className="form-label">Your Mobile Number</label>
              <input type="text"  placeholder="070 5656164" name='mobile' onChange={handleInput} className='form-control rounded-0 ' />
              {errors.mobile && <span className='text-danger'>{errors.mobile}</span>}
            </div>
          </div>
          <div className="row mb-4">
  <div className="col-md-6 mb-3 mb-md-0">
    <label className="form-label" htmlFor="entryDateTime">Entry Time and Date</label>
    <input
      type="datetime-local"
      id="entryDateTime" 
      name='entryDateTime' onChange={handleInput} className='form-control rounded-0  ' />
              {errors.entryDateTime && <span className='text-danger'>{errors.entryDateTime}</span>}
  </div>
  <div className="col-md-6">
    <label className="form-label" htmlFor="exitDateTime">Exit Time and Date</label>
    <input
      type="datetime-local"
      id="exitDateTime" 
      name='exitDateTime' onChange={handleInput} className='form-control rounded-0  ' />
              {errors.exitDateTime && <span className='text-danger'>{errors.exitDateTime}</span>}
  </div>
</div>

          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-warning px-5 py-2 fs-5">Search Now</button>
          </div>
        </form>
      </div> 
       </div>
 
  )
}

export default Home;
