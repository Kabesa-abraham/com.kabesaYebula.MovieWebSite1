import React, { useEffect, useRef, useState } from 'react'
import './header.css'
import { AiOutlineMenu } from "react-icons/ai";
import { MdMovie,MdClose} from "react-icons/md";
import {} from "react-icons/fa";


const Header = () => {

  const [scrolled,setScrolled] = useState(false); //pour changer de couleur lorsque on scroll
  useEffect(()=>{
    const myScroll = () =>{
      if(window.scrollY > 100){
        setScrolled(true)
      }else{
        setScrolled(false)
      }}
      window.addEventListener("scroll", myScroll)

      return () =>{
        window.removeEventListener("scroll" , myScroll)
      }
    },[])

    const [showOption,setShowOption] = useState(false)
    const HandleShopOption = () =>{
    if(showOption === false){
      setShowOption(true);
    }else{
      setShowOption(false)
  }}


  useEffect( () =>{ // pour que lorsque si on scroll la barre des options disparaissent
    const scrolls = () =>{
      if(window.scrollY>30){
        setShowOption(false)
      }
    }
    window.addEventListener('scroll',scrolls);
    return () =>{
      window.removeEventListener('scroll',scrolls)
    }
  }
  ,[])
  
  return (
    <header className={scrolled ? "header shadows" : "header"}>
      <a href='#' className='logo' >
        <MdMovie className='bxs-movie' /> EMovie
      </a>

      {
        showOption? <MdClose className='bx-menu' id='menu_icon' onClick={HandleShopOption}  /> :
        <AiOutlineMenu className='bx-menu' id='menu_icon' onClick={HandleShopOption} />
      }

      <ul className={showOption===false ? "option_container":'option_container active'} >
        <li className='home_actives' ><a href="#">Home</a></li>
        <li><a href="#movies">Filmes</a></li>
        <li><a href="#coming">Coming</a></li>
        <li><a href="#newsletter">Newsletter</a></li>
      </ul>

      <button className='bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 btn' >Se Connecter</button>
    </header>
  )
}

export default Header
