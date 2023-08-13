import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import './Slides.css'

// slide images

import image1 from '../assets/anders-jilden-uwbajDCODj4-unsplash.jpg'
import image2 from '../assets/dan-freeman-wAn4RfmXtxU-unsplash.jpg'
import image3 from '../assets/jake-weirick-EsvpmQ4zp5Y-unsplash.jpg'
import image4 from '../assets/max-Yd1z7287HIw-unsplash.jpg'

// section bg image

import bgImage from '../assets/omar-lopez-hiqLAaOJqW8-unsplash.jpg'
import Reveal from './Reveal'

export default function Slides() {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className=' relative  carousel'>
            <div className='flex justify-center items-center bg-gradient-to-br from-blue-700/60 via-blue-700/90 to-blue-700 h-auto p-4  md:pt-5 w-full mx-auto  text-white'>

                <Reveal>
                    <div className="embla mx-auto w-full h-[40vh] max-w-[1240px]  md:h-[65vh] rounded-md shadow-2xl border-gray-200 border-2" ref={emblaRef}>
                        <div className="embla__container">

                            <div className="embla__slide">
                                <img src={image1} alt="" />
                            </div>

                            <div className="embla__slide">
                                <img src={image2} alt="" />
                            </div>

                            <div className="embla__slide">
                                <img src={image3} alt="" />
                            </div>

                            <div className="embla__slide">
                                <img src={image4} alt="" />
                            </div>

                        </div>
                    </div>
                </Reveal>

            </div>
        </div>
    )
}
