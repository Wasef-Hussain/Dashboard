/* global chrome */
import './App.css';
import React, { useState, useEffect } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from './component/Dashboard';
import { AiOutlineDashboard } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import svgg from './assets/Vector.svg'
import notselectedMarket from './assets/Union.svg'
import poly from './assets/Polygon1.svg'
import { AiOutlineSetting } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'


function App() {
  return (
    <div>
      <div className="DarkGradientBackground">

        <div className="container-fluid">

          <div className="row flex-nowrap">

            <Sidebar />

            <div className="w-100">

              <Switch>


                <Route path="/" render={() => <Dashboard />} />
                {/* <Route path="/" render={() => <Task />} /> */}

              </Switch>
            </div>
          </div>

        </div>

      </div>
    </div >
  );
}





function Sidebar({ }) {
  const [version, setVersion] = useState("0.0.0");

  let [pathname, setPathname] = useState("");



  return (
    <div className="col-auto col-3 col-md-2 col-xl-2 px-sm-2 px-0 DarkSidebar" style={{ width: '613px' }}>
      <div className="d-flex flex-column align-items-center align-items-sm-start  min-vh-100 ">
        <div className='sidebaruppersection'>
          <img src={poly} />
          <h2 style={{ color: '#13111E', fontWeight: '900' }}>
            <strong>Wallet</strong>
          </h2>
        </div>

        <ul className="nav pl-3 nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu" style={{ marginTop: '7rem' }}>

          <li className="selected-nav-item mb-3 d-flex ">
            <Link to="/" className="nav-link align-middle px-0 ps-md-2 ps-lg-5  text-dark  " style={{ display: 'flex' }}>
              <BiHomeAlt style={{
                fontSize: '1.6rem', color: '#6486FF'
              }} /><span
                className=" d-none d-sm-inline ml-3 mt-1 font-weight-bolder newfont" style={{
                  fontSize: '15px', color: '#6486FF'
                }} >Home</span>
            </Link>
          </li>
          <li className="nav-item mb-3" d-flex>
            <Link to="/profiles" className="nav-link align-middle px-0 ps-md-2 ps-lg-5  text-dark  d-flex">
              <CgProfile style={{
                fontSize: '1.6rem', color: '#707995'
              }} /> <span
                className=" d-none d-sm-inline ml-3 mt font-weight-bolder newfont" style={{
                  fontSize: '15px', color: '#707995'
                }} >News</span>
            </Link>
          </li>
          <li className="nav-item mb-3" d-flex>
            <Link to="/profiles" className="nav-link align-middle px-0 ps-md-2 ps-lg-5  text-dark  d-flex">
              <img src={notselectedMarket} style={{
                fontSize: '1.6rem', color: '#707995', height: '23.46px'
              }} /> <span
                className=" d-none d-sm-inline ml-3 mt font-weight-bolder newfont" style={{
                  fontSize: '15px', color: '#707995'
                }} >Settings</span>
            </Link>
          </li>


          {/* <li>
            <Link to="/settings" className="nav-link px-0 align-middle ps-md-2 ps-lg-5 text-dark mt-3">
              <AiOutlineSetting style={{ fontSize: '2rem' }} /><span
                className="ms-1 d-none d-sm-inline ps-2 ml-3 font-weight-bolder">Settings</span> </Link>
          </li> */}
        </ul>
        <hr />
        <div className="dropdown pb-4">
          {/* <p
            className="small d-flex align-items-center text-white text-decoration-none nav-item nav-link px-0 py-0 align-middle px-md-5 text-white mt-3 mb-1">
            {version}
          </p>
          <a href="#"
            className="Text-Gold d-flex align-items-center text-white text-decoration-none nav-item nav-link px-0 align-middle px-md-5 text-white py-0 my-0  ">
            Check for Updates
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default App;
