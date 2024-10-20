import React from 'react'
import {MdMovie} from 'react-icons/md'
import {FaFacebook,FaTwitter,FaInstagram,FaTiktok} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer_container' >
        <div className='footer' >
            <a href="#" className='logo' >
                <MdMovie className='bxs-movie'/>EMovie
            </a>
            <div className='social' >
                <FaFacebook className='bx' />
                <FaInstagram  className='bx'/>
                <FaTwitter className='bx'/>
                <FaTiktok className='bx'/>
            </div>
        </div>
        <div className='copyRight'> <p>&#169; KabesaYebula All Right Reserved.</p> </div>
    </div>
  )
}

export default Footer
