import React from 'react'
import BannerNew from '../../components/Home/BannerNew'
import CategorySwiper from '../../components/Home/CategorySwiper/CategorySwiper'
import BistroBoss from '../../components/Home/Bistro_Boss/BistroBoss'
import Menu from '../../components/Home/Menu/Menu'
import Contact from '../../components/Home/Contact/Contact'

const Home = () => {
  return (
    <div  className='min-h-screen'>
       <BannerNew></BannerNew>
       <div className='h-[200px]'> 
       </div>

       <CategorySwiper></CategorySwiper>
       <BistroBoss></BistroBoss>
       <Menu></Menu>
       <Contact></Contact>
    </div>
  )
}

export default Home