import HeroPriceFilterBar from '../../Utils/HeroPriceFilterBar/HeroPriceFilterBar'

const Hero = () => {
  return (
    <div className='hero' style={{backgroundImage: 'url(./Assets/hero.jpg)'}}>
        <div className="body">
            
        </div>
        <div className="foot">
            <HeroPriceFilterBar />
        </div>
    </div>
  )
}

export default Hero