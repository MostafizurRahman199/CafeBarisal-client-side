import React from 'react'
import BannerNew from '../../components/Home/BannerNew'
import CategorySwiper from '../../components/Home/CategorySwiper/CategorySwiper'

const Home = () => {
  return (
    <div  className='min-h-screen'>
       <BannerNew></BannerNew>
       <div className='h-[200px]'> 
       </div>

       <CategorySwiper></CategorySwiper>
    </div>
  )
}

export default Home