import React from 'react'
import './styles/profile.css'
import { IoMdNotifications } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";

function Profile() {
    return (
        <div className='profile'>

            <div className="bell-box">
                <IoMdNotifications style={{ color: "#3533A3", fontSize: "2rem" }} />
                <div className="circle">
                    3
                </div>
            </div>
            <div className="profile-details">
                <div className="profile-image">
                </div>

                <div className="name">
                    Abigail
                    <BiChevronDown />

                </div>
            </div>
        </div>
    )
}

export default Profile
