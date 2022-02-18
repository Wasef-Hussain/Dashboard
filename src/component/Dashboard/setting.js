import React, { useState, useRef, useEffect } from "react";
import { facirclecheck, faCheckCircle, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { MdSmartDisplay } from "react-icons/md";
import { BsPlayBtnFill } from "react-icons/bs";
import { BsStopBtnFill } from "react-icons/bs";




function Settings() {


    return (
        <div className='row'>
           <div class="row">
                <div class="col-sm-4">
                    <div class="row">
                        <h3 class="text-white Font-Weight-700">Settings</h3>
                    </div>
                    <div class="row mt-5">
                        <div class="d-flex">
                            <p class="text-white-50 me-4">RARITY</p>
                            <label class="form-check-label me-3" for="flexSwitchCheckChecked">Off</label>

                            <div class="form-check form-switch">

                                <input 
                                
                                class="form-check-input GoldSwitch" type="checkbox" id="flexSwitchCheckChecked"  />
                            </div>
                            <label class="form-check-label ms-1" for="flexSwitchCheckChecked">On</label>

                        </div>

                    </div>
                    <div class="row mt-3">
                        <small class="text-white-50 col-12">LICENSE KEY</small>
                        <input
                       
                        class="form-input ms-2 mt-2 px-0 text-white" type="password" id="myInput" placeholder="Enter Password" />
                    </div>
                    <div class="row mt-4">
                        <button class="btn col DarkerBackground Rounded-15 text-green px-4 py-2" >See</button>
                        <button class="btn col DarkerBackground Rounded-15 ms-3 text-white px-4 py-2">Copy</button>
                        <button 
                      
                        class="btn col btn-danger Rounded-15 ms-3 text-white px-4 py-2">Deactivate</button>

                    </div>
                    <div class="row mt-4">
                        <small class="text-white-50 col-12">DISCORD WEBHOOK</small>
                        <input 
                        
                        class="form-input ms-2 mt-2 px-0 text-white" type="text" placeholder="Enter here" />
                    </div>
                    <div class="d-flex">
                        <div class="me-auto flex-grow-1">

                        </div>
                        <div class=" row mt-4 align-content-end px-3 ">


                            <button 
                            
                            class="p-2 btn Rounded-5  col DarkerBackground Text-Gold">Test</button>
                            <button class="me-auto p-2 ms-3 btn col   LargeButton GradientBackground Rounded-10"
                                data-bs-toggle="modal" data-bs-target="#CreateModal">Save</button>
                        </div>
                    </div>

                </div>

            </div> 
        </div>
    )
}

export default Settings