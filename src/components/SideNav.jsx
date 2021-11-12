import React from 'react';
import './styles/sidenav.css'
import { ImHome3 } from "react-icons/im";
import { RiMailUnreadFill } from "react-icons/ri";
import { RiBarChart2Fill } from "react-icons/ri";
import { GiMountainRoad } from "react-icons/gi";
import { GiPartyPopper } from "react-icons/gi";
import { FiLink } from "react-icons/fi";
import { GiPikeman } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";

function SideNav() {
    return (
        <div className='side-nav--container'>
            <div className="inner-container">
                <div className="logo">
                    bluecube
                </div>

                <div >
                    <div className="list-container">
                        <div className='nav-item selected'> <span className='side-nav--icon'><ImHome3 /></span>Home</div>
                        <div className='nav-item'> <span className='side-nav--icon'><RiMailUnreadFill /></span>Message</div>
                        <div className='nav-item share'> SHARE</div>
                        <div className='nav-item'> <span className='side-nav--icon'><RiBarChart2Fill /></span>Ranking</div>
                        <div className='nav-item'> <span className='side-nav--icon'><GiMountainRoad /></span>Challenge</div>
                        <div className='nav-item'> <span className='side-nav--icon'><GiPartyPopper /></span>Party</div>
                        <div className='nav-item'> <span className='side-nav--icon'><FiLink /></span>Connect</div>
                        <div className='nav-item'> <span className='side-nav--icon'><GiPikeman /></span>Parade</div>
                        <div className='nav-item'> <span className='side-nav--icon'><HiUserGroup /></span>Group</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNav
