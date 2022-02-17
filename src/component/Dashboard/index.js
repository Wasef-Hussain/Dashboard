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
                <div className='rightarea'>

                </div>
        </div>
    )
}

export default Dashboard