import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faChevronDown, faLevelDownAlt, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
// import uplevel from '../../assets/upline.svg'
// import downlevel from '../../assets/down.svg';
import { useChromeStorageLocal } from "use-chrome-storage";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
// import avatar from "../../images/avatar.png"
import Chart from "react-apexcharts";
import TweetEmbed from 'react-tweet-embed'

function Dashboard() {
    const [ethereumPrice, setEthereumPrice] = useState("00000");
    const [btcPrice, setBtcPrice] = useState("00000");
    const [solPrice, setSolPrice] = useState("00000");
    const [ownedBtc, setOwnedBtc] = useState('0')
    const [ownedSol, setOwnedSol] = useState('0')
    const [ownedEth, setOwnedEth] = useState('0')

    const options = {

        series: [{
            name: 'Sales',
            data: [0, 10, 20, 30, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
        }],
        options: {
            chart: {
                height: 250,
                type: 'line',
                display: 'none',
                toolbar: {
                    show: false
                },
                sparkline: {
                    enabled: false
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#23FFAC"],
            legend: {
                show: false
            },

            stroke: {
                color: '#602DD3',
                curve: 'smooth',
                width: 3
            },

            xaxis: {
                type: 'datetime',
                categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                tickAmount: 10,
                labels: {
                    formatter: function (value, timestamp, opts) {
                        return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                    }
                }
            },
            title: {
                text: '',
                align: 'left',
                style: {
                    fontSize: "16px",
                    color: '#666'
                }
            },

            yaxis: {
                // min: 0,
                // max: 20
            }
        },


    };
    return (
        <div >
            <div className=" d-flex align-content-end whitecol" >
                <div className="me-auto flex-grow-1 p-2">
                    <h3 style={{ fontSize: "24px" }} className=" Font-Weight-500">👋Good morning, <span className="Text-Gold">@Username</span></h3>
                    <h6 style={{ fontSize: "16px", fontWeight: "500px" }}>Today, your holdings increased by <span className="" style={{ color: "#5AE8B5" }}>$23 <FontAwesomeIcon style={{ color: "#5AE8B5" }} icon={faArrowUp} /></span></h6>
                </div>
                <div className="me-2 p-2  ">
                    {/* <img src={avatar} className="img-fluid" /> */}


                </div>

            </div>
            <div className="row whitecol">
                <div className="col-sm-8">
                    <div className="row" style={{ marginBottom: '2rem', lineHeight: '29.26px' }}>
                        <div className="d-flex pt-2">
                            <h2 style={{ fontWeight: "bold", fontSize: "24px" }} className="me-auto pt-2 flex-grow-1 whitecol"><strong>Assets</strong></h2>
                            <div className="form">
                                <FontAwesomeIcon icon={faSearch} style={{ position: 'absolute', top: '34%' }} />
                                <input type="text" style={{ fontSize: '13px' }} className="form-control form-input" placeholder="Search" ></input>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-3">

                        <div className="col-md-4">
                            <div className="card mb-3 Rounded-10 DarkSidebar">
                                <div className="row g-0 p-1" >
                                    <div className="col-lg-4 col-sm-5 col-md-3 p-3 ">
                                        <div className=" YellowBackground pe-1 Rounded-10 text-center">
                                            <h1>
                                                <span className="badge rounded-pill p-2 ">
                                                    {/* <FontAwesomeIcon icon={faBug} /> */}
                                                    <FaBitcoin style={{ fontSize: '38px', position: 'absolute', top: '30%', left: '9.5%' }} />
                                                </span>
                                            </h1>

                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-sm-7 col-md-9">
                                        <div className="card-body px-0">
                                            <div className="row">
                                                <div className="d-flex pe-4">
                                                    <strong className="me-auto flex-grow-1">Bitcoin</strong>
                                                    <strong className="">{ownedBtc}</strong>

                                                </div>
                                                <div className="d-flex pe-4">
                                                    <small className="me-auto flex-grow-1">BTC</small>
                                                    <small className="">${btcPrice}</small>

                                                </div>
                                            </div>
                                            <div className="row"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="card mb-3 Rounded-10 DarkSidebar">
                                <div className="row g-0 p-1">
                                    <div className="col-lg-4 col-sm-5 col-md-3 p-3 ">
                                        <div className=" YellowBackground pe-1 Rounded-10 text-center">
                                            <h1>
                                                <span className="badge rounded-pill p-2 ">
                                                    {/* <FontAwesomeIcon icon={faBug} /> */}
                                                    <FaEthereum style={{ fontSize: '38px', position: 'absolute', top: '30%', left: '9.5%' }} />
                                                </span>
                                            </h1>

                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-sm-7 col-md-9">
                                        <div className="card-body px-0">
                                            <div className="row">
                                                <div className="d-flex pe-4">
                                                    <strong className="me-auto flex-grow-1">Etherium</strong>
                                                    <strong className="">{ownedEth}</strong>

                                                </div>
                                                <div className="d-flex pe-4">
                                                    <small className="me-auto flex-grow-1">ETH</small>
                                                    <small className="">${ethereumPrice}</small>

                                                </div>
                                            </div>
                                            <div className="row"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-md-4">
                            <div className="card mb-3 Rounded-10 DarkSidebar">
                                <div className="row g-0 p-1" >
                                    <div className="col-lg-4 col-sm-5 col-md-3 p-3 ">
                                        <div className=" YellowBackground pe-1 Rounded-10 text-center">
                                            <h1>
                                                <span className="badge rounded-pill p-2 ">
                                                    {/* <FontAwesomeIcon icon={faBug} /> */}
                                                    <FaBitcoin style={{ fontSize: '38px', position: 'absolute', top: '30%', left: '9.5%' }} />
                                                </span>
                                            </h1>

                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-sm-7 col-md-9">
                                        <div className="card-body px-0">
                                            <div className="row">
                                                <div className="d-flex pe-4">
                                                    <strong className="me-auto flex-grow-1">Solana</strong>
                                                    <strong className="">{ownedSol}</strong>

                                                </div>
                                                <div className="d-flex pe-4">
                                                    <small className="me-auto flex-grow-1">SOL</small>
                                                    <small className="">${solPrice}</small>

                                                </div>
                                            </div>
                                            <div className="row"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="row  mx-1">

                        <div className="col-12 col-sm-12 Rounded-15 ChartDiv">


                            <div className="row px-4 pt-4">
                                <div className="d-flex">
                                    <div className="me-auto">
                                        <h6>
                                            <span className="badge rounded-pill"><FontAwesomeIcon icon={faBug} />
                                            </span>
                                            ETH/USD
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </h6>

                                    </div>

                                </div>

                            </div>
                            <div >
                                <Chart
                                    options={options.options}
                                    series={options.series}
                                    type="line"
                                    height={220}

                                />
                            </div>
                        </div>
                    </div>
                    <div className="row my-3 mt-5 mx-1">
                        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}><strong>NFT Portfolio</strong></h2>
                    </div>
                    <div className="row mx-2">
                        <div className="card mb-3 Rounded-10 DarkSidebar">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="row g-0">
                                        <div className="col-lg-4  col-sm-5 col-md-3  p-3 px-4 ">
                                            <div style={{ background: "#272727" }} className="  pe-1 Rounded-10 text-center">
                                                <h1>
                                                    <span className="badge rounded-pill p-2 ">
                                                        {/* <img src={uplevel} /> */}
                                                    </span>
                                                </h1>

                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-7 col-md-9">
                                            <div className="card-body px-0">
                                                <div className="row">
                                                    <div className="d-flex pe-4">
                                                        <strong className="me-auto flex-grow-1">Bitcoin</strong>
                                                        <strong className="">0.14</strong>

                                                    </div>
                                                    <div className="d-flex pe-4">
                                                        <small className="me-auto flex-grow-1">BTC</small>
                                                        <small className="">$41,84.6</small>

                                                    </div>
                                                </div>
                                                <div className="row"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 ">
                                    <div className="row g-0">
                                        <div className="col-lg-4 col-sm-5 col-md-3 px-4  p-3 LeftBorder ">
                                            <div style={{ background: "#272727" }} className="  pe-1 Rounded-10 text-center">
                                                <h1>
                                                    <span className="badge rounded-pill p-2 ">
                                                        {/* <img src={downlevel} /> */}
                                                    </span>
                                                </h1>

                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-sm-7 col-md-9">
                                            <div className="card-body px-0">
                                                <div className="row">
                                                    <div className="d-flex pe-4">
                                                        <strong className="me-auto flex-grow-1">Bitcoin</strong>
                                                        <strong className="">0.14</strong>

                                                    </div>
                                                    <div className="d-flex pe-4">
                                                        <small className="me-auto flex-grow-1">BTC</small>
                                                        <small className="">$41,84.6</small>

                                                    </div>
                                                </div>
                                                <div className="row"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-sm-4 GrayBackground p-4 Rounded-15" style={{ height: '51rem' }}>
                    <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>Community</h2>
                    <h6 style={{ fontSize: "14px", fontWeight: "500", color: "#828282" }}>Powered by Twitter</h6>
                    <br />
                    <div style={{ overflowY: 'scroll', height: '43rem' }}>
                        <TweetEmbed id='771763270273294336' options={{ theme: 'dark' }} />
                        <TweetEmbed id='771763270273294336' options={{ theme: 'dark' }} />
                        <TweetEmbed id='771763270273294336' options={{ theme: 'dark' }} />
                        <TweetEmbed id='771763270273294336' options={{ theme: 'dark' }} />
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Dashboard