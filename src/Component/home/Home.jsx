import React, { useEffect, useState } from 'react'
import './home.css'
import {FaPlay, FaPlayCircle} from 'react-icons/fa'
import data from '../../assets/data';

const Home = () => {

  return (
    <div className='container' >
      <div className='slider_wrapper' >
        {
           data.map((item,i) =>{
            return <div className='image_list' key={i}>
                <img src={item.image} alt="" className='img_item' />

                <div className='home_text'>
                    <span className='typeText' >{item.type}</span>
                    <h1 className='nametext' >{item.name}</h1>
                    <button className='bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bookButton' >Book Now</button>
                    <button className='playbutton' ><FaPlay className='faplay'/></button>
                </div>   
            </div>
           }) 
        }
      </div>
    </div>
  )
}

export default Home
