import { useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { HiMiniLanguage } from 'react-icons/hi2'
import { MdOutlineClose } from 'react-icons/md'
import { motion } from 'framer-motion'
import Reveal from './Reveal'
import { useTranslation } from 'react-i18next'

export default function Navbar() {

    const { t, i18n } = useTranslation();

    const [nav, setNav] = useState(true)
    const [lang, setLang] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    const handleLang = () => {
        setLang(!lang)
    }

    const locales = {
        en: { title: 'English', flag: "🇺🇸  " },
        fr: { title: 'French', flag: "🇫🇷  " },
        de: { title: 'Deutsch', flag: "🇩🇪  " },
        ita: { title: 'Italian', flag: "🇮🇹  " },
    }

    return (
        <div className=' fixed top-0 z-50 mx-auto w-full  '>

        <nav className=' w-full  bg-white rounded-b-md border-2 border-t-4 z-50 shadow-xl flex justify-between items-center h-16 max-w-[1240px] mx-auto px-2 md:px-4 text-gray-800 ' >
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.4, duration: 0.4 }} className=''>
                <h1 className='w-full text-base/4 md:text-xl/5 font-bold text-blue-700 uppercase '>Compare prime</h1>
                <p className='text-[10px] md:text-xs text-blue-700 uppercase'>comparateur d'assurance</p>
            </motion.div>

            <div className='flex justify-between items-center  lg:basis-[600px] capitalize'>
                <ul className='hidden lg:flex justify-between items-center lg:basis-[530px]'>
                    <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, duration: 0.4 }} className=' font-semibold text-xs p-3 md:text-base hover:text-blue-700'><a href="#hero">{t('nav.home')}</a></motion.li>
                    <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.8, duration: 0.4 }} className=' font-semibold  text-xs p-3 md:text-base hover:text-blue-700'><a href="#form">{t('nav.form')}</a></motion.li>
                    <motion.li initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, duration: 0.4 }} className=' font-semibold  text-xs p-3 md:text-base hover:text-blue-700'><a href="#contact">{t('nav.contact')}</a></motion.li>
                </ul>

                <div className='flex justify-between items-center  '>


                    <motion.select initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2, duration: 0.4 }} className='mx-2  w-12 md:w-32 p-1 text-gray-600 rounded-md text-center shadow-xl border-2 border-gray-200 bg-[#efefef]'>
                        {Object.keys(locales).map((key) => {
                            return (
                                <option onClick={() => { i18n.changeLanguage(key) }} className='py-2 flex justify-center items-center hover:bg-[#efefef] rounded-md hover:shadow  hover:text-black' key={key}>
                                    <div className='  flex items-center justify-center' >
                                        {locales[key].flag}
                                        {locales[key].title}
                                    </div>
                                </option>
                            );
                        })}
                    </motion.select>


                    <motion.button initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4, duration: 0.4 }} onClick={handleNav} className='block lg:hidden '>
                        {!nav ? <MdOutlineClose size={30}  /> : <BiMenuAltRight size={30} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation Bar */}

            <div className={!nav ? 'z-10 fixed left-0 top-0 border-r-4 w-[65%] md:w-[40%] h-full bg-white backdrop-blur-md ease-in-out duration-500 shadow-2xl' : 'fixed left-[-100%]'}>
                <div className='pt-4 px-4 pb-5'>
                    <Reveal>
                        <a href="#hero">
                            <h1 className='w-full text-base/4 md:text-xl/5 font-bold text-blue-700 uppercase '>Compare prime</h1>
                             <p className='text-[10px] md:text-xs text-blue-700 uppercase'>comparateur d'assurance</p>
                        </a>
                    </Reveal>
                </div>
                <ul className='text-[#0f172a]/80'>
                    <Reveal>
                        <li onClick={handleNav} className='hover:scale-95 font-semibold text-base px-6 py-3 hover:text-blue-700 ease-in-out duration-200'><a href="#hero">{t('nav.home')}</a></li>
                    </Reveal>
                    <Reveal>
                        <li onClick={handleNav} className='hover:scale-95 font-semibold  text-base px-6 p-3 hover:text-blue-700 ease-in-out duration-200'><a href="#form">{t('nav.form')}</a></li>
                    </Reveal>
                    <Reveal>
                        <li onClick={handleNav} className='hover:scale-95 font-semibold  text-base px-6 p-3 hover:text-blue-700 ease-in-out duration-200'><a href="#contact">{t('nav.contact')}</a></li>
                    </Reveal>
                </ul>
            </div>
        </nav>
        </div>
    )
}


{/* <li className='py-2 hover:bg-[#efefef] rounded-md'><button type="submit" onClick={()=> i18n.changeLanguage('en')}>English</button></li>
                            <li className='py-2 hover:bg-[#efefef] rounded-md'><button type="submit">French</button></li>
                            <li className='py-2 hover:bg-[#efefef] rounded-md'><button type="submit">Deutsch</button></li>
                            <li className='py-2 hover:bg-[#efefef] rounded-md'><button type="submit">Italian</button></li> */}