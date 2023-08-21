
import Card from './Card';
import profile1 from '../assets/womenprofile1.jpg'
import profile2 from '../assets/womenprofile2.jpg'
import profile3 from '../assets/Menprofile.jpg'
import Reveal from './Reveal';
import { useTranslation } from 'react-i18next';

export default function Testimonial(){
    const {t} = useTranslation();

    return(
        <div className="relative  w-full pt-20 pb-16 bg-white border-t-4">
            <div className="  grid grid-cols-1 lg:grid-cols-4  w-full px-4 mx-auto  max-w-[1240px] ">
            
                <Reveal>
                    <h1 className=' text-xl/8  sm:text-3xl/10 sm:max-w-[570px] text-center pb-16 font-bold text-blue-900 lg:pb-0 lg:text-left'>{t('testimonial.header')}</h1>
                </Reveal>
                
                <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 col-span-3  gap-y-14">
                    <Card profile={profile1} name="Maria Smantha" city="" content={t('testimonial.quote1')}/>
                    <Card profile={profile2} name="Lisa Cudrow" city="" content={t('testimonial.quote2')}/>
                    <Card profile={profile3} name="John Smith" city="" content={t('testimonial.quote3')}/>
                </div>
            </div>
      </div>
    )
}