import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import {motion} from 'framer-motion';
import Reveal from './Reveal';
import { useState } from "react";
import axios from 'axios'


export default function Form(){
    
    const {t } = useTranslation();

    const form = useRef();

   
    // ============================

  
   const [data,setData] = useState({
    nom:"",
    prenom:"",
    email:"",
    phone:"",
    anniversary:"",
    adresse:"",
    franchise:"",
    npa:"",
   })


   function handleChange(e){
        const newData = {...data}
        newData[e.target.name] = e.target.value
        setData(newData)
        console.log(newData)
   }

   function handleSubmit(e){
        e.preventDefault();
        console.log("hit")


        fetch("http://localhost:3000/send", {
            method: "POST",
            mode:'cors',
            headers: { 'Content-type': 'application/json; charset=UTF-8' },
            body:JSON.stringify({
                nom:data.nom,
                prenom:data.prenom,
                email:data.email,
                phone:data.phone,
                anniversary:data.anniversary,
                adresse:data.adresse,
                franchise:data.franchise,
                npa:data.npa,
            }),
        }).then(function (res) {
                return res.text()
        }).then(function(text){
            console.log(text)
            alert('Message was sent successfully')
        }).catch(function(error){
            alert('Oops something went wrong!!!')
            console.log(error)
        })

        resetForm();
   }


   function resetForm(){
        const data = {
            nom:"",
            prenom:"",
            email:"",
            phone:"",
            anniversary:"",
            adresse:"",
            franchise:"",
            npa:"",
        }
        setData(data);
   }
    // ============================

    


    return (
        <div  className="w-full  bg-white h-auto pt-16 pb-20 md:pt-20 text-black shadow-2xl border-4 border-t-gray-300">
            <div className="flex flex-col justify-between items-center max-w-[1240px] h-52 mx-auto px-4">
                <Reveal>
                    <h2 className="text-blue-900 text-3xl font-semibold max-w-[550px] pb-6 md:pb-10 text-center "> {t('form.header')} </h2>
                </Reveal>
                <Reveal>
                    <p className="text-base/6 font-medium text-gray-700 pb-10  max-w-[550px] text-center">
                    {t('form.paragraph')}
                    </p>
                </Reveal> 
            </div>
            <form id="form" method='post' onSubmit={(e) => handleSubmit(e)} 
                  className="grid grid-cols-1 sm:max-w-[550px] md:max-w-[900px] md:grid-cols-2 gap-3 justify-center content-center pt-20 mx-auto px-4 text-blue-700 font-medium mt-20 sm:mt-5"  >
                <Reveal>
                    <div className="flex flex-col justify-between  ">
                        <label htmlFor="nom" className="text-base font-semibold pb-2 text-blue-900">{t('form.name')}</label>
                        <input type="text" name="nom" id="nom" value={data.nom} placeholder="Entré votre nom" className=" h-8 px-3 py-6 rounded bg-[#efefef] shadow-md border-2" onChange={(e) => handleChange(e)} required />
                    </div>
                </Reveal>

                <Reveal>
                    <div className="flex flex-col justify-between  ">
                        <label htmlFor="prenom" className="text-base font-semibold pb-2 text-blue-900">{t('form.fullname')}</label>
                        <input type="text" name="prenom" id="prenom" value={data.prenom} placeholder="Entré votre prenom" className=" h-8 px-3 py-6 rounded bg-[#efefef] shadow-md border-2" onChange={(e) => handleChange(e)} required/>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="flex flex-col justify-between  ">
                        <label htmlFor="email" className="text-base font-semibold pb-2 text-blue-900">{t('form.email')}</label>
                        <input type="email" name="email" id="email" value={data.email} placeholder="Entré votre email" className=" h-8 px-3 py-6 rounded bg-[#efefef] shadow-md border-2" onChange={(e) => handleChange(e)} required/>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="flex flex-col justify-between  ">
                        <label htmlFor="phone" className="text-base font-semibold pb-2 text-blue-900">{t('form.phone')}</label>
                        <input type="tel" name="phone" id="phone" value={data.phone} placeholder="Entré votre téléphone" className=" h-8 px-3 py-6 rounded bg-[#efefef] shadow-md border-2" onChange={(e) => handleChange(e)} required/>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="flex flex-col justify-between  ">
                        <label htmlFor="anniversary" className="text-base font-semibold pb-2 text-blue-900">{t('form.anniversary')} </label>
                        <input type="date" name="anniversary" id="anniversary" value={data.anniversary} placeholder="Entré votre date de naissance"  className=" h-[52px] flex justify-center items-center px-3  rounded bg-[#efefef] shadow-md border-2" onChange={(e) => handleChange(e)} required/>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="flex flex-col justify-between  ">
                        <label htmlFor="adresse" className="text-base font-semibold pb-2 text-blue-900">{t('form.address')}</label>
                        <input type="text" name="adresse" id="adresse" value={data.adresse} placeholder="Entré votre adresse"  className=" h-8 px-3 py-6 rounded bg-[#efefef] shadow-md border-2" onChange={(e) => handleChange(e)} required/>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="flex flex-col justify-between  " >
                        <label htmlFor="franchise" className="text-base font-semibold pb-2 text-blue-900">{t('form.franchise')}</label>
                        <select name="franchise" id="franchise" value={data.franchise} className="px-3 py-3 rounded bg-[#efefef] shadow-md border-2 " onChange={(e) => handleChange(e)}required>
                            <option>Select an option ------ </option>
                            <option value="300">300</option>
                            <option value="500">500</option>
                            <option value="1000">1000</option>
                            <option value="1500">1500</option>
                            <option value="2000">2000</option>
                            <option value="2500">2500</option>
                        </select>
                    </div>
                </Reveal>

                <Reveal>
                    <div className="flex flex-col justify-between  ">
                        <label htmlFor="npa" className="text-base font-semibold pb-2 text-blue-900">{t('form.npa')}</label>
                        <input type="text" name="npa" id="npa" value={data.npa} placeholder="Entré votre NPA" className=" h-8 px-3 py-6 rounded bg-[#efefef] shadow-md border-2 " onChange={(e) => handleChange(e)} required />
                    </div>
                </Reveal>

                <Reveal>
                    <div className='relative  flex justify-start items-center w-24 h-12 rounded-md'>
                        <span className="animate-ping absolute top-[13px] left-[14px] w-14 h-8 rounded-md bg-sky-400"></span>
                        <motion.input whileTap={{scale:[1,.9,.9,.9,1]}} transition={{duration:.3}} type="submit" value={t('form.button')} className="text-white text-lg font-bold rounded-md border-2 px-5 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 mt-3 shadow-lg  z-0"  />
                    </div>
                    
                </Reveal>
            </form>
        </div>
    )
}