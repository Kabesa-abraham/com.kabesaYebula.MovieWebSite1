import './home.css'
import {FaPlay} from 'react-icons/fa'
import 'swiper/css/autoplay'
import {Swiper,SwiperSlide,} from 'swiper/react' //POUR FAIRE DU CARROUSSEL
import {Autoplay} from 'swiper/modules'
import data from '../../assets/data';

const Home = () => {

  return (
    <div className='container' >
      <Swiper spaceBetween={2} slidesPerView={1}
              autoplay={{delay:6000,
                        disableOnInteraction:false }}
              speed={1200}
              modules={[Autoplay]}
              className='slider_wrapper'>
          {
            data.map((item,i) =>{
              return <SwiperSlide key={i} className='image_list'>
                <img src={item.image} alt="" className='img_item'/>
                <div className='home_text'>
                  <span className='typeText' >{item.type}</span>
                  <h1 className='nametext' >{item.name}</h1>
                  <button className='bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-600 bookButton' >Book Now</button>
                  <button className='playbutton' ><FaPlay className='faplay'/></button>
               </div>   
              </SwiperSlide>
            })
          }
      </Swiper>
    </div>
  )
}

export default Home
