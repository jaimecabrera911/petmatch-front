import banner_dog from '../assets/images/banner-dog.png'
import './BannerStyle.css'
import CardBanner from './Cards/CardBanner'
import hueso_banner from '../assets/images/hueso-banner.png'

const Banner = () => {
    return (
        <div className="container-fluid position-relative banner">
            <div className='banner-card'>
                <CardBanner />
            </div>
            <img className="banner-image position-absolute bottom-0 end-0" src={banner_dog} alt="Banner Dog" />
            <img className="banner-card-img" src={hueso_banner} alt="Banner Dog" />
        </div>
    )
}

export default Banner