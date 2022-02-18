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
import sonic from './assets/sonic.svg'
import magic from './assets/magicpen.svg'
import { AiOutlineSetting } from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { BsNewspaper } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import Settings from './component/Dashboard/setting';


function App() {
  return (
    <div>
      <div className="DarkGradientBackground">

        <div className="container-fluid">

          <div className="row flex-nowrap">

            <Sidebar />

            <div className="col p-5" style={{ background: '#0D1019' }}>

              <Switch>
                <Route path="/" render={() => <Dashboard />} />
                <Route path="/setting" component={Settings}/>
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
        <div className='sidebaruppersection' style={{ display: 'flex', width: '16rem', height: '5rem', justifyContent: 'flex-start', paddingRight: '6rem' }}>
          <img src={poly} style={{ width: '7rem', height: '7rem', transform: 'translate(-34px, 0px)' }} />
          <h2 className='newfont' style={{ color: '#fff', fontWeight: '900', fontSize: '20px', transform: 'translate(-55px, 30px)' }}>
            <strong>Aladin</strong>
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
            <Link to="/setting" className="nav-link align-middle px-0 ps-md-2 ps-lg-5  text-dark  d-flex">
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
          <div className='mb-3' style={{ border: '1px solid #212738', width: '26.86vh', marginLeft: '1rem' }}></div>
          <div className='innerdrop' style={{ height: '106px', width: '26.86vh', background: '#1A1F2F', marginLeft: '1rem', borderRadius: '10px', display: 'flex' }}>
            <div className='sonicpic'>
              <img src={sonic} style={{ width: '7vh', height: '7vh' }} />
            </div>
            <div className='userufo' style={{ background: '#1a1f2f', width: '18vh' }}>
              <div className='usernamed'>
                <p className='newfont' style={{ color: '#fff' }}>night<span className='newfont' style={{ color: '#343C53' }}>#0709</span></p>
              </div>
              <div className='lifetime' style={{ paddingLeft: '1vh' }}>
                <img src={magic} style={{ width: '2.568vh', height: '2.568vh' }} /> <span className='newfont' style={{ color: '#707995' }}>LifeTime User</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
