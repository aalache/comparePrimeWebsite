import {IoIosMailUnread} from 'react-icons/io'
import Reveal from './Reveal'
import { useTranslation } from 'react-i18next'

//SOCIAL MEDIA ICONS

import {FaTwitter} from 'react-icons/fa'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

export default function Footer(){
    const date = new Date()

    const {t} = useTranslation();

    return(
        <div className=" border-t-4 bg-blue-700" id='contact'>
            <div className=" grid grid-cols-1 md:grid-cols-4 j h-auto pt-10 pb-6 px-4 gap-6 max-w-[1240px]  text-white mx-auto ">
                <div className='col-span-1'>
                    <Reveal>
                        <a href="#hero">
                            <h1 className='w-full text-xl/5 font-bold text-white uppercase '>Compare prime</h1>
                            <p className='text-xs text-[#efefef] uppercase'>comparateur d'assurance</p>
                        </a>

                       <div className=' flex justify-between items-center mt-6 mb-8 w-28 '>
                            <a href="#">
                                <FaTwitter className='hover:scale-150 transition-all hover:text-[#efefef] shadow-2xl' size={18} />
                            </a>
                            <a href="#">
                                <FaFacebookF className='hover:scale-150 transition-all hover:text-[#efefef] shadow-2xl' size={18} />
                            </a>
                            <a href="#">
                                <FaInstagram className='hover:scale-150 transition-all hover:text-[#efefef] shadow-2xl' size={18} />
                            </a>
                        </div> 
                    </Reveal>
                </div>
                <div className="col-span-3 grid grid-cols-1 md:grid-cols-4 gap-5 md:justify-items-center   ">
                    <div className="">
                        <Reveal>
                            <h3 className="text-sm  uppercase font-semibold pb-3">{t('footer.sitemap.title')}</h3>
                        </Reveal>
                        <ul className=" font-meduim text-gray-200 text-sm/9">
                            <Reveal>
                                <li><a href="#hero">{t('footer.sitemap.item1')}</a></li>
                            </Reveal>
                            <Reveal>
                                <li><a href="#form">{t('footer.sitemap.item2')}</a></li>
                            </Reveal>
                            <Reveal>
                                <li><a href="#contact">{t('footer.sitemap.item3')}</a></li>
                            </Reveal>
                        </ul>
                    </div>
                    <div className="col-span-2">
                        <Reveal>
                            <h3 className="text-sm uppercase font-semibold pb-3">{t('footer.contact.title')}</h3>
                        </Reveal>
                        <ul className="font-meduim text-gray-200 text-sm/8">
                            <Reveal>
                                <li className='flex justify-start items-center'><IoIosMailUnread size={23} className='mr-3'/>contact@compareprime.com </li>
                            </Reveal>
                            <Reveal>
                                <li className='flex justify-start items-center'><IoIosMailUnread size={23} className='mr-3'/>info@compareprime.com </li>
                            </Reveal>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-4 max-w-[1240px] mx-auto text-center border-t border-gray-400 text-white py-5">
                <Reveal>
                    <p className=" text-xs sm:text-base">Copyright © {date.getFullYear()}-{date.getFullYear()+1} - compareprime.com {t('footer.copyright')} </p>
                </Reveal>
            </div>

        </div>
    )
}