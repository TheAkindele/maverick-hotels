import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FooterStyle } from './footerStyle'

const Footer = () => {
    return (
        <FooterStyle>
            <div className="container">
                <a href="https://twitter.com/MaverickHats"><h2 className='text-primary'><FaTwitter /></h2></a>
                <a href="https://github.com/TheAkindele"><h2 className='git'><FaGithub /></h2></a>
                <a href="https://www.linkedin.com/in/muhyideen-akindele-325722150/"><h2 className='text-primary'><FaLinkedin /></h2></a>
            </div>
        </FooterStyle>
    )
}

export default Footer

