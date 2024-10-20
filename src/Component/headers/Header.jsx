import React, { useRef } from 'react'
import './header.css'
import { AiOutlineMenu } from "react-icons/ai";
import { MdMovie } from "react-icons/md";

const Header = () => {

  return (
    <header>
      <a href='#' className='logo' >
        <MdMovie className='bxs-movie' /> EMovie
      </a>

      <AiOutlineMenu className='bx-menu' id='menu_icon' />

      <ul className='option_container' >
        <li className='home_actives' ><a href="#">Home</a></li>
        <li><a href="#">Filmes</a></li>
        <li><a href="#">Coming</a></li>
        <li><a href="#">Newsletter</a></li>
      </ul>

      <button className='bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 btn' >Se Connecter</button>
    </header>
  )
}

export default Header
