import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Login = () => {
  return (
    <>
    <Header/>
    <div className="container-fluid">
         {/*main start*/}
  <div className="row">
    <div className="col-sm-5" id="login">
      <h3 className="text-center mb-4"> Electricity Bill Login</h3>
      <form>
        <div className="mb-3">
          <label htmlFor="consumerNumber" className="form-label">
            Consumer Number
          </label>
          <input
            type="text"
            className="form-control"
            id="consumerNumber"
            placeholder="Enter your consumer number"
            required=""
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            required=""
          />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberMe" />
          <label className="form-check-label" htmlFor="rememberMe">
            Remember Me
          </label>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
      <p className="text-center mt-3 mb-0">
        <a href="#">Forgot password?</a> | <a href="#">Register</a>
      </p>
    </div>
  </div>
  {/*main end*/}
    </div>
  <Footer/>
</>

  )
}

export default Login