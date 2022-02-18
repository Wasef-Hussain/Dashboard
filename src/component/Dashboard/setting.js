import React, { useState, useRef, useEffect } from "react";
import { facirclecheck, faCheckCircle, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { MdSmartDisplay } from "react-icons/md";
import { BsPlayBtnFill } from "react-icons/bs";
import { IoDiceOutline } from "react-icons/io5";



function Settings() {


    return (
        <div className='row'>
                <div class="col p-5">
                    <div class="row">
                    <div class="col-sm-4">
                        <div class="row">
                            <h3 class="text-white Font-Weight-700"><IoDiceOutline /> Settings</h3>
                        </div>
                        <div class="row mt-5">
    
                        </div>
                        <div class="row mt-3 ">
                            
                            <select class="form-select profileInput" aria-label="Default select example" style={{backgroundColor:'#151A28'}}>
                            <option selected style={{borderRadius:'16px',backgroundColor:'#151A28'}}>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            </select>

                        </div>
                        <div class="row mt-4">
                            <button class="btn col DarkerBackground Rounded-15 text-green px-4 py-2 " style={{borderRadius:'16px'}}>See</button>
                            
                            <button class="btn col btn-danger Rounded-15 ms-3 text-white px-4 py-2" style={{borderRadius:'16px'}}>Deactivate</button>
    
                        </div>
                        <div class="row mt-4">
                        
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                            <label class="form-check-label" for="inlineRadio1">Mode 1</label>
                            </div>
                            <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                            <label class="form-check-label" for="inlineRadio2">Mode 2</label>
                        </div>
                        </div>
                        <div className='mb-3' style={{ border: '1px solid #212738', width: '100%'}}></div>
                        <div class="d-flex">
                            <div class="me-auto flex-grow-1">

                            <label for="basic-url" class="form-label textColor">APIs Key</label>
                            <div class="input-group mb-3">
                            
                            <input type="text" class="form-control inputFieldColor" placeholder="4J1A6DioAqFi7xYkccVaFay486x2brXn9YKXPWTegr8A" aria-label="" aria-describedby="button-addon2"/>
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" style={{ marginLeft: '5px'}}>Button</button>
                            </div>

                            <label for="basic-url" class="form-label textColor">API Secret</label>
                            <div class="input-group mb-3">
                            
                            <input type="text" class="form-control inputFieldColor" placeholder="4J1A6DioAqFi7xYkccVaFay486x2brXn9YKXPWTegr8A" aria-label="" aria-describedby="button-addon2"/>
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2" style={{ marginLeft: '5px'}}>Button</button>
                            </div>

                            <label for="basic-url" class="form-label textColor">Margin</label>
                            <div class="input-group mb-3">
                            
                            <input type="text" class="form-control inputFieldColor" placeholder="$22,784.00" aria-label="" aria-describedby="button-addon2"/>
                          
                            </div>

                            </div>
                            

                              
  
                                
                            
                        </div>

                    </div>
                </div>

                </div>
        </div>
    )
}

export default Settings