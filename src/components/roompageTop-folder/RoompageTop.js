import React from 'react'
import { Link } from 'react-router-dom'
import { TopDivStyle, CentralDiv } from './RoompageTopstyle'

const RoompageTop = () => {
    return (
        <div>
            <TopDivStyle>
                < CentralDiv>
                    <p>Our Rooms</p>
                    <Link to='/' className='home'>
                        <div >Return Home</div>
                    </Link>
                </CentralDiv>
            </TopDivStyle>
        </div>
    )
}

export default RoompageTop
