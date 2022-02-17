import React, { useState } from 'react';
import { facirclecheck, faCheckCircle, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { MdSmartDisplay } from "react-icons/md";
import { BsPlayBtnFill } from "react-icons/bs";
import { BsStopBtnFill } from "react-icons/bs";




function Dashboard() {


    return (
        <div className='row'>
            <div className='leftarea p-3'>
                <div className='chartareaa col-12' >
                    <div className='upper-div'>
                        <div className='workSummaryL newfont' >
                    <h6 className=' newfont' style={{fontFamily:"", color:"#fff"}} >Your work Summary   </h6> <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#262C44", height: "2vh", marginLeft:"0.4rem" }} />
                        </div>

                        <div className='playButtonR' >
                        <BsPlayBtnFill style={{fontSize: "3.5vh", color:"#47FFD33B"}} />
                        <BsStopBtnFill  style={{fontSize: "3.5vh", color:"#E85DD536",marginLeft: "0.4rem"}}/>
                        </div>
                    </div>
                </div>
                <div className='tableareaa col-12' >

                </div>
            </div>
            <div className='rightarea' style={{ paddingLeft: '1vh' }}>
                <div className='col-auto' style={{ width: '52vh', height: '18vh', borderRadius: '10px', background: '#fff', marginTop: '2vh', backgroundColor: '#10131E', border: '1px solid #1B2031' }}>

                <div className='rightBarL'>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#262C44", height: "2vh", marginLeft:"0.4rem" }} />
                <h6 className=' newfont'>Bitcoin</h6> <h6 className=' newfont'>$67,205.10</h6>
                
                <div className='arrowup'>
                <FontAwesomeIcon icon={faArrowUp}/> <h6 className=' newfont'>37.8% this week</h6>
                </div>
                </div>

                <div className='rightBarR'>


                </div>
                </div>
                <div className='col-auto' style={{ width: '52vh', height: '18vh', borderRadius: '10px', background: '#fff', marginTop: '2vh', backgroundColor: '#10131E', border: '1px solid #1B2031' }}>



                </div>
                <div className='col-auto' style={{ width: '52vh', height: '18vh', borderRadius: '10px', background: '#fff', marginTop: '2vh', backgroundColor: '#10131E', border: '1px solid #1B2031' }}>



                </div>
                <div className='col-auto' style={{ width: '52vh', height: '38vh', borderRadius: '10px', background: '#fff', marginTop: '2vh', backgroundColor: '#10131E', border: '1px solid #1B2031' }}>
                <h6 className=' newfont' style={{fontFamily:"", color:"#fff"}} >Daily Earning</h6> <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#262C44", height: "2vh", marginLeft:"0.4rem" }} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard