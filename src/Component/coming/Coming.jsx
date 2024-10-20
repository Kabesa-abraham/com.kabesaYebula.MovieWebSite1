import React from 'react'
import './coming.css'
import '../movie/movie.css' //pour utiliser les style de ce composant
import filme_data from '../../assets/filmData'

import {Swiper,SwiperSlide} from 'swiper/react'

const Coming = () => {
  return (
    <div>
      <h2 className='heading' >Coming Bientôt</h2>
      <Swiper
         breakpoints={{  /* pour gerer l'affichage des movies selon la dimension d'écran*/
           300:{slidesPerView:2},
           640:{slidesPerView:3},
           768:{slidesPerView:3},
           1024:{slidesPerView:4},
           1280:{slidesPerView:5}
         }}
         spaceBetween={10}
        className='coming_container ' >
        {
            filme_data.map((item,i) =>{
                return <SwiperSlide className='swiper-slide box' key={i}>
                        <div className='box-imgs' >
                            <img src={item.image} alt="" />
                            <div className='infoMovie' >
                                <h3>{item.name}</h3>
                                <span>{item.delay}</span>
                            </div>
                        </div>
                </SwiperSlide>
            })
        } 
      </Swiper>    
    </div>
  )
}

export default Coming
