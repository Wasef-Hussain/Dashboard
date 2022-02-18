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
                        <BsPlayBtnFill style={{fontSize: "3.5vh", color:"#47FFD33B", background:"#fff"}} />
                        <BsStopBtnFill  style={{fontSize: "3.5vh", color:"#E85DD536",marginLeft: "0.4rem"}}/>
                        </div>
                    </div>
                </div>
                <div className='tableareaa col-12'>
                <div className='contractTable'>

                </div> 
                {/* <div className='contractTable2'>
                </div> 
                <div className='contractTable'>
                </div> 
                <div className='contractTable2'>
                </div> 
                <div className='contractTable'>
                </div>  */}



                </div>
            </div>
            <div className='rightarea' style={{ paddingLeft: '1vh' }}>
                <div className='col-auto bars' style={{}}>

                <div className='rightBarL'>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#262C44", height: "2vh", marginLeft:"0.4rem" }} />
                <h6 className=' newfont bitcoinColor'>Bitcoin</h6> <h6 className=' newfont cashColor'>$67,205.10</h6>
                
                <div className='arrowup'>
                <FontAwesomeIcon icon={faArrowUp} style={{color:"#47FFD3"}}/> <h6 className=' newfont' style={{color:"#47FFD3"}}>37.8%</h6> <h6 className=' newfont' style={{color:"#3D4665"}}>this week</h6>
                </div>
                </div>

                <div className='rightBarR'>

                <h6 className=' newfont bitcoinColor'>Graph here</h6>
                </div>
                </div>
                <div className='col-auto bars' >

                <div className='rightBarL'>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#262C44", height: "2vh", marginLeft:"0.4rem" }} />
                <h6 className=' newfont bitcoinColor'>Bitcoin</h6> <h6 className=' newfont cashColor'>$67,205.10</h6>
                
                <div className='arrowup'>
                <FontAwesomeIcon icon={faArrowUp} style={{color:"#DC59CC"}}/> <h6 className=' newfont' style={{color:"#DC59CC"}}>37.8%</h6> <h6 className=' newfont' style={{color:"#3D4665"}}>this week</h6>
                </div>
                </div>

                <div className='rightBarR'>

                <h6 className=' newfont bitcoinColor'>Graph here</h6>
                </div>


                </div>
                <div className='col-auto bars' style={{ }}>


                <div className='rightBarL'>
                <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#262C44", height: "2vh", marginLeft:"0.4rem" }} />
                <h6 className=' newfont bitcoinColor'>Bitcoin</h6> <h6 className=' newfont cashColor'>$67,205.10</h6> 
                
                <div className='arrowup'>
                <FontAwesomeIcon icon={faArrowUp} style={{color:"#47FFD3"}}/> <h6 className=' newfont' style={{color:"#47FFD3"}}>37.8%</h6> <h6 className=' newfont' style={{color:"#3D4665"}}>this week</h6>
                </div>
                </div>

                <div className='rightBarR'>

                <h6 className=' newfont bitcoinColor' >Graph here</h6>
                </div>

                </div>
                <div className='col-auto barBig'>

                <h6 className=' newfont' style={{fontFamily:"", color:"#fff"}} >Daily Earning</h6> <FontAwesomeIcon icon={faCheckCircle} style={{ color: "#262C44", height: "2vh", marginLeft:"0.4rem" }} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard