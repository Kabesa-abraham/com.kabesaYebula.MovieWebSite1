import React from 'react'
import './movie.css'
import filme_data from '../../assets/filmData'

const Movie = () => {
  return (
    <div className='containers' >
      <h2 className='heading' >Opening cette Semaine</h2>
      <div className='movies_container' >
      {
        filme_data.map((item,i) =>{
            return <div className='box' >
                <div className='box-img' >
                    <img src={item.image} alt="" />
                    <div className='infoMovie' >
                        <h3>{item.name}</h3>
                        <span>{item.delay}</span>
                    </div>
                </div>
            </div>
        })
      }     
      </div>
    </div>
  )
}

export default Movie
