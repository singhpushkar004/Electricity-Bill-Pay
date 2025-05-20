import React from 'react'
import Header from '../components/Header'
import slider1 from "../assets/images/slider1.jpg"
import slider2 from "../assets/images/slider2.jpg"
import slider3 from "../assets/images/slider3.jpeg"
import Footer from '../components/Footer'
import "../assets/css/style.css"
const Home = () => {
  return (
   <>
    <Header/>

    
    <div className="container-fluid">
         {/*Slider start*/}
  <div className="row">
    <div className="col-sm-12 p-0">
      <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={slider1}
              className="d-block w-100"
              alt="Slide 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={slider2}
              className="d-block w-100"
              alt="Slide 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={slider3}
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" />
        </button>
      </div>
    </div>
  </div>
  {/*slider end*/}
  {/*colorful row start*/}
  <div className="row">
    <div className="col-sm-12 bg-dark">
      <marquee behavior="scroll" direction="left" className="text-light">
        Welcome to Uttar Pradesh Power Corporation Limited
      </marquee>
      <div className="row mx-au">
        <div className="col-sm-2 bg-warning text-center text-light">
          Bill Payment
          <h4 className="text-center text-light">
            <i className="fa-solid fa-briefcase" />
          </h4>
        </div>
        <div className="col-sm-2 bg-success text-center text-light">
          Prepaid Recharge
          <h4 className="text-center text-light">
            <i className="fa-solid fa-money-bill" />
          </h4>
        </div>
        <div className="col-sm-2 bg-primary text-center text-light">
          NEFT/RTGS
          <h4 className="text-center text-light">
            <i className="fa-solid fa-book" />
          </h4>
        </div>
        <div className="col-sm-2 bg-info text-center text-light">
          Last online Receipt
          <h4 className="text-center text-light">
            <i className="fa-solid fa-newspaper" />
          </h4>
        </div>
        <div className="col-sm-2 bg-danger text-center text-light">
          Self Bill Generate
          <h4 className="text-center text-light">
            <i className="fa-solid fa-credit-card" />
          </h4>
        </div>
      </div>
    </div>
  </div>
  {/*-colorful row end*/}
  {/*Announcement start*/}
  <div className="row p-2">
    <div className="col-sm-3">
      <h5>
        <i className="fa-solid fa-file-lines" />
        Latest News
      </h5>
      <hr />
      <marquee behavior="scroll" direction="up" scrollamount={2}>
        <ul>
          <li>Achievements of 100 Days</li>
          <br />
          <li>GENERAL NOTICE AGAINST FRAUDULENT ADVERTISEMENT</li> <br />
          <li>UPPCL News Flash</li> <br />
        </ul>
      </marquee>
    </div>
    <div className="col-sm-3 mx-5">
      <h5>
        <i className="fa-solid fa-bell" />
        Updates
      </h5>
      <hr />
      <ul>
        <li>
          <a href="#">your Arrer</a>{" "}
        </li>
        <li>
          <a href="#">your New Account Number(For Rural Consumer)</a>{" "}
        </li>
        <li>
          <a href="#">Whatsapp subscription</a>
        </li>
        <li>
          <a href="#">Update Mobile Number</a>
        </li>
        <li>
          <a href="#"> Update whatsapp Number</a>
        </li>
        <li>
          <a href="#">Smart meter Prepaid Recahrge</a>
        </li>
        <li>
          <a href="#">Uttar Pradesh Krishak Vidyut Mafi Yojana</a>
        </li>
      </ul>
    </div>
    <div className="col-sm-3">
      <h5>
        <i className="fa-solid fa-hand-point-right" />
        New Connection Services
      </h5>
      <hr />
      <ul>
        <li>
          <a href="#">Apply for New Domestic Connection(JHATPAT)</a>
        </li>
        <li>
          <a href="#">Apply for New Connection for Private Tube well</a>
        </li>
        <li>
          <a href="#">Apply for New connection for commercial (Nivesh Mitra)</a>
        </li>
        <li>
          <a href="#">Downloads Forms</a>
        </li>
      </ul>
    </div>
  </div>
  {/*Annountment end*/}
  {/*card start*/}
  <div className="row mx-2 py-5">
    <div className="col-sm-3 shadow-lg">
      <div className="card-body bg-warning text-center p-5 text-light rounded rounded-3">
        <h5 style={{ fontSize: "xx-large" }}>
          <i className="fa-solid fa-panorama" />
        </h5>
        <br />
        <h4>UPDATE PAIN</h4>
        <div className="py-5">
          <button type="button" className="btn btn-warning btn-outline-light">
            Know More
          </button>
        </div>
      </div>
    </div>
    <div className="col-sm-3 shadow-lg">
      <div className="card-body bg-warning text-center p-5 text-light rounded rounded-3 shadow">
        <h5 style={{ fontSize: "xx-large" }}>
          <i className="fa-solid fa-user-group" />
        </h5>
        <h5>ONLINE LOAD ENHANCEMENT</h5>
        <div className="py-5">
          <button type="button" className="btn btn-warning btn-outline-light">
            Know More
          </button>
        </div>
      </div>
    </div>
    <div className="col-sm-3 shadow-lg">
      <div className="card">
        <div className="card-body bg-warning text-light p-5 text-center rounded rounded-3 shadow">
          <h5 style={{ fontSize: "xx-large" }}>
            <i className="fa-solid fa-envelope" />
          </h5>
          <h5>SERVICE REQUEST STATUS</h5>
          <div className="py-5">
            <button type="button" className="btn btn-warning btn-outline-light">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="col-sm-3 shadow-lg">
      <div className="card">
        <div className="card-body bg-warning text-light p-5 text-center rounded rounded-3">
          <h5 style={{ fontSize: "xx-large" }}>
            <i className="fa-solid fa-user" />
          </h5>
          <h5>OTHER CONSUMER SERVICES</h5>
          <div className="py-5">
            <button type="button" className="btn btn-warning btn-outline-light">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*card end*/}
    </div>

<Footer/>
   </>
  )
}

export default Home