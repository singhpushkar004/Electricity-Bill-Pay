import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import c1  from "../assets/images/c1.png"
import c2 from "../assets/images/c2.png"
import c3 from "../assets/images/c3.png"
import c4 from "../assets/images/c4.png"
import c5 from "../assets/images/c5.png"
import c6 from "../assets/images/c6.png"
const Contact = () => {
  return (
    <>
        <Header/>
  {/*main start*/}
    <div className="container-fluid">
    <div className="row">
    <div className="col-sm-12 bg-warning text-center py-2">
      <h6>Home/Contact</h6>
      <h4>Contact Us</h4>
    </div>
    <div className="row">
      <div className="col-sm-10 bg-light shadow py-3 mx-auto">
        <div className="row">
          <div className="col-sm-5 mx-3 py-4">
            <img src={c1} alt="" />
          </div>
          <div className="col-sm-5 mx-3 py-4">
            <img src={c2} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-10 bg-light shadow py-3 mx-auto">
        <div className="row">
          <div className="col-sm-5 mx-3 py-4">
            <img src={c3} alt="" />
          </div>
          <div className="col-sm-5 mx-3 py-4">
            <img src={c6} alt="" />
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-10 bg-light shadow py-3 mx-auto">
        <div className="row">
          <div className="col-sm-5 mx-3 py-4">
            <img src={c4} alt="" />
          </div>
          <div className="col-sm-5 mx-3 py-4">
            <img src={c5} alt="" />
          </div>
        </div>
      </div>
    </div>
    {/*-main end*/}
    {/*Footer start*/}
    <div className="row p-3" style={{ backgroundColor: "#352c47" }}>
      <div className="col-sm-3">
        <img src="./images/logo2.png" alt="" />
      </div>
      <div className="col-sm-9 text-light">
        <h5>UP POWER CORPORATION LIMITED</h5>
        <p>
          Shakti Bhavan,14, Ashok Marg, Lucknow, UP, India Phone :
          91-522-2887701-03
        </p>
        Consumers can contact on 1912 for complaint registration and resolution
        <div className="row">
          <div className="col-sm-2">
            <ul id="h">
              Discom
              <li>
                <a href="#">&gt;DVVNL</a>
              </li>
              <li>
                <a href="#">&gt;MVVNL</a>
              </li>
              <li>
                <a href="#">&gt;PUVVNL</a>
              </li>
              <li>
                <a href="#">&gt;PVVNL</a>
              </li>
              <li>
                <a href="#">&gt;KESCo</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-2">
            <ul id="w">
              Whatsapp
              <li>
                <a href="#">8010957826</a>
              </li>
              <li>
                <a href="#">8010924203</a>
              </li>
              <li>
                <a href="#">8010968292</a>
              </li>
              <li>
                <a href="#">7859804803</a>
              </li>
              <li>
                <a href="#">8287835233</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <ul id="i">
              Customer care
              <li>
                <a href="#">1800-180-3023</a>
              </li>
              <li>
                <a href="#">1800-180-3023</a>
              </li>
              <li>
                <a href="#">1800-180-3023</a>
              </li>
              <li>
                <a href="#">1800-180-3023</a>
              </li>
              <li>
                <a href="#">1800-180-3023</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-5">
            <ul id="l">
              Address
              <li>
                <a href="#">4-A, Gokhale Marg, Lucknow - 226001</a>
              </li>
              <li>
                <a href="#">
                  Urja Bhavan Agra - Delhi, Bypass Road, Sikandra, Agra - 282007
                </a>
              </li>
              <li>
                <a href="#">DLW Bhikharipur, Varanasi - 221004</a>
              </li>
              <li>
                <a href="#">Victoria Park, Meerut - 250001</a>
              </li>
              <li>
                <a href="#">Kesa House, 14/71 Civil Lines, Kanpur - 208001</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/*Footer end*/}
    <div className="row bg-dark text-light text-center">
      <div className="col-sm-12">
        Copyright © 2024 UPPCL| All rights reserved
      </div>
    </div>
    {/*footer end*/}
  </div>
    </div>
  <Footer/>
</>

    
  )
}

export default Contact