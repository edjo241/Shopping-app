import React from 'react'
import './Home.css';
import Product from './Product'


function Home() {
    return (
        <div className='home'>
            <img  className='home__img'src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg' alt=''/>
            <div className='home__row'>
            <Product 
            id="12321341"
            title="The Lean Startup:How Constant Innovation Creates"
            price={11.96}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRcbu5bUcmFXF24Adppb_crpJRWR7QHCq-fpg&usqp=CAU"
            rating={5}/>
            <Product 
            id="12321342"
            title="GoPro HERO8 Black - Waterproof Action Camera with Touch Screen 4K Ultra HD "
            price={11}
            image="https://m.media-amazon.com/images/I/61aldlBUqYL._AC_UL320_.jpg"
            rating={3}/>
            </div>
            <div className='home__row'>
            <Product 
            id="12321343"
            title="ZUGU CASE (New Model) Alpha Case for 2020 iPad Pro 12.9 inch "
            price={13.96}
            image="https://m.media-amazon.com/images/I/71Gjfy4M9uL._AC_UL320_.jpg"
            rating={5}/><Product 
            id="12321344"
            title="TIMMKOO MP3 Player with Bluetooth, 4.0 Full Touchscreen"
            price={10}
            image="https://m.media-amazon.com/images/I/61D+SW7dMoL._AC_UL320_.jpg   "
            rating={5}/><Product 
            id="12321345"
            title="
            ASUS VivoBook 15 Thin and Light Laptop, 15.6” FHD Display, Intel i3-1005G1 CPU"
            price={11.96}
            image="https://m.media-amazon.com/images/I/81fstJkUlaL._AC_UY218_.jpg"
            rating={5}/>
            </div>
            <div className='home__row'>
            <Product 
            id="12321346"
            title="Samsung FHD TV delivers breathtakingly real and immersive viewing experiences like you’ve never seen before. You’ll see all your favorite TV programs and movies in a whole new light"
            price={20.96}
            image="https://images.samsung.com/is/image/samsung/latin_en-full-hd-k6500-un55k6500ahxpa-001-front-black?$PD_GALLERY_L_JPG$"
            rating={5}/>
            </div>
        </div>
    )
}

export default Home
