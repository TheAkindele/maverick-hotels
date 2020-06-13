import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import { MdLocationOn } from 'react-icons/md'

const FlipCards = () => {
    return (
        <div className='flips'>
            <div className="cards-box">
                <div className="call card">
                    <div className="phone icon"><FaPhoneAlt /></div>
                    <h3 className="call-us">CALL US</h3>
                    <h6 className="numbers">+123 456 7890, +987 654 0321</h6>
                </div>
                <div className="mail card">
                    <div className="email icon"><GrMail /></div>
                    <h3 className="mail-us">EMAIL US</h3>
                    <h6 className="email-add">maverickhotels@testing.com</h6>
                </div>
                <div className="visit card">
                    <div className="location icon"><MdLocationOn /></div>
                    <h3 className="visit-us">VISIT US</h3>
                    <h6 className="address">1, Aso Rock Drive, Aso Villa, Abuja, Nigeria</h6>
                </div>
            </div>
        </div>
    )
}

export default FlipCards
