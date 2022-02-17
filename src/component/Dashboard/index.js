import React, { useState } from 'react';
import { facirclecheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'


function Dashboard() {


    return (
        <div className='row'>
            <div className='leftarea p-3'>
                <div className='chartareaa col-12' >
                    <div className='upper-div'>
                        <div className='workSummaryL' >
                            <p>Your work Summary</p> <FontAwesomeIcon icon="fas fa-check-circle" />
                        </div>

                        <div className='playButtonR' >
                            <FontAwesomeIcon icon={faPlay} />
                        </div>
                    </div>
                </div>
                <div className='tableareaa col-12' >

                </div>
            </div>
            <div className='rightarea' style={{ paddingLeft: '1vh' }}>
                <div className='col-auto' style={{ width: '52vh', height: '25vh', borderRadius: '10px', background: '#fff', marginTop: '2vh', backgroundColor: '#10131E', border: '1px solid #1B2031' }}>

                </div>
                <div className='col-auto' style={{ width: '52vh', height: '25vh', borderRadius: '10px', background: '#fff', marginTop: '2vh', backgroundColor: '#10131E', border: '1px solid #1B2031' }}>

                </div>
                <div className='col-auto' style={{ width: '52vh', height: '38vh', borderRadius: '10px', background: '#fff', marginTop: '2vh', backgroundColor: '#10131E', border: '1px solid #1B2031' }}>

                </div>
            </div>
        </div>
    )
}

export default Dashboard