
import quote from '../assets/quote-svgrepo-com.svg'
import Reveal from './Reveal'


export default function Card({profile,name,city,content}){
    return (
        <Reveal>
            <div className=' max-w-[530px] px-6 md:min-w-[365px] md:max-w-[440px] lg:min-w-[365px] lg:max-w[400px] h-auto border-2 shadow-2xl rounded-xl hover:bg-[#efefef] ease-in-out duration-300 mx-4'>
                <div className=' relative top-[-3rem] text-center'>
                    <Reveal>
                        <img  src={profile} alt="" className=' w-24 h-24 rounded-full shadow-xl border-4 mx-auto mb-5' /> 
                    </Reveal>
                    <Reveal>
                        <h3 className='text-base font-semibold'>{name}</h3>
                    </Reveal>
                    <Reveal>
                        <p className='text-gray-500 pb-3'>{city}</p>
                    </Reveal>
                    
                    <img className='w-16 absolute top-[25%]' src={quote} alt="" />
                    
                    <Reveal>
                        <p className=' text-sm text-gray-900 '>{content} </p>
                    </Reveal>
                </div>
            </div>
        </Reveal>
        
    )
}