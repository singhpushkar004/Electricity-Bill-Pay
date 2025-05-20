import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const About = () => {
  return (
   <>
   <Header/>
        <>
  {/*main start*/}
  <div className="row">
    <div className="col-sm-12 bg-warning text-center py-2">
      <h6>Home/About</h6>
      <h4>About</h4>
    </div>
  </div>
  <div className="row">
    <div className="col-sm-10 bg-light shadow border-0 mx-auto py-5  rounded-3 mb-3 my-2">
      <ul>
        <li>
          <a href="#">Madhyananchal Vidyut Vitaran Nigam Limited</a>
        </li>
        <br />
        <li>
          <a href="#">Pashchimanchal Vidyut Vitaran Nigam Limited</a>
        </li>
        <br />
        <li>
          <a href="#">Dakshinanchal Vidyut Vitaran Nigam Limited</a>
        </li>
        <br />
        <li>
          <a href="#">Kanpur Vidyut Vitaran Nigam Limited</a>
        </li>
        <br />
        <li>
          <a href="#">Uttar Pradesh Vidyut Vitaran Nigam Limited</a>
        </li>
        <br />
        <li>
          <a href="#">Madhyananchal Vidyut Vitaran Nigam Limited</a>
        </li>
        <br />
        <li>
          <a href="#">Madhyananchal Vidyut Vitaran Nigam Limited</a>
        </li>
        <br />
      </ul>
    </div>
  </div>
  {/*-main end*/}
  <Footer/>
</>

   </>
  )
}

export default About