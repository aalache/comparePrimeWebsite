

import { useTranslation } from 'react-i18next';
import video from '../assets/VID FCB COMPAREPRIME 1.mp4'
import Navbar from './Navbar';
import { motion } from 'framer-motion'

export default function Hero() {
    const { t } = useTranslation();
    return (
        <div className='hero ' id='hero'>
            <div className="bg-gradient-to-tl from-blue-700/40 via-blue-700/90 to-blue-700 lg:h-[100vh] h-auto w-full mx-auto pt-16 pb-5 text-white border-t-4 ">
            <Navbar />
                <div className='grid justify-between justify-items-center content-end lg:grid-cols-2 lg:h-[77vh] max-w-[1240px]  mx-auto px-4  gap-5 mt-6'>
                    <div className=' w-full  md:mx-auto pb-3  text-center lg:text-left'>
                        <motion.h1 variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 }, }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: .5, delay: 1.6 }}
                            className=' text-xl/8  sm:text-3xl/10 sm:max-w-[570px] lg:text-3xl/10  mx-auto font-bold pb-5 lg:mx-0  lg:max-w-[570px]'>
                            {t('hero.header')}
                        </motion.h1>
                        <motion.p variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 }, }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: .5, delay: 1.8 }}
                            className='text-[14px] sm:text-base/6 font-medium text-gray-200 pb-10'>
                            {t('hero.paragraph')}
                        </motion.p>

                        <motion.div variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: .5, delay: 2 }}
                            className='relative mx-auto lg:mx-0 flex justify-center items-center w-36 h-12 rounded-md'>
                            <span className="animate-ping absolute inline-flex w-[75px] h-8 rounded-md bg-sky-300"></span>
                            <a href="#form" className="z-0 w-full m-2 border-2 border-gray-300 text-sm font-bold shadow-2xl rounded-md px-5 py-3 bg-gradient-to-r from-sky-500 to-indigo-500" >{t('hero.button')}</a>
                        </motion.div>

                    </div>
                    <motion.div drag whileHover={{ scale: 1.1 }}
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: .5, delay: 2.2 }}
                        className=' mt-16  md:px-16 lg:p-3 lg:mt-0'>
                        <video className="border-4 border-gray-400 w-full rounded-lg shadow-2xl" autoPlay muted loop controls>
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

{/* <div className="bg-video h-full">
                    <video className="w-full rounded shadow-2xl" autoPlay muted loop controls>
                        <source src={video} type="video/mp4"/>
                        Your browser does not support the video tag.
                    </video>
                </div> */}
