import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faChevronDown, faLevelDownAlt, faLevelUpAlt } from '@fortawesome/free-solid-svg-icons'
import { faBug } from '@fortawesome/free-solid-svg-icons'
// import uplevel from '../../assets/upline.svg'
// import downlevel from '../../assets/down.svg';
import { AiOutlineGift } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { useChromeStorageLocal } from "use-chrome-storage";
import { FaBitcoin } from "react-icons/fa";
import { FaSlidersH } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { VscBell } from "react-icons/vsc";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { MdOutlineMessage } from "react-icons/md";
// import avatar from "../../images/avatar.png"
import Chart from "react-apexcharts";
import TweetEmbed from 'react-tweet-embed'
import { Button } from 'bootstrap';

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
        <></>
    )
}

export default Dashboard