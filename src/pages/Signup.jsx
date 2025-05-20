import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Signup = () => {
  return (
    <>
    <Header/>
        <div className="row">
  <div className="col-sm-6" id="registration">
    <h3 className="text-center mb-4">Electricity Bill Registration</h3>
    <form>
      <div className="mb-3">
        <label htmlFor="fullName" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fullName"
          placeholder="Enter your full name"
          required=""
        />
      </div>
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
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter your email"
          required=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="mobile" className="form-label">
          Mobile Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="mobile"
          placeholder="Enter your mobile number"
          required=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <textarea
          className="form-control"
          id="address"
          rows={2}
          placeholder="Enter your address"
          defaultValue={""}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Set Password
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Create a password"
          required=""
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          placeholder="Confirm your password"
          required=""
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="agreeTerms"
          required=""
        />
        <label className="form-check-label" htmlFor="agreeTerms">
          I agree to the terms and conditions
        </label>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Register
      </button>
    </form>
    <p className="text-center mt-3 mb-0">
      Already registered? <a href="#">Login here</a>
    </p>
  </div>
</div>

<Footer/>
    </>
  )
}

export default Signup