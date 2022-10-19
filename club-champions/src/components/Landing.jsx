import React from 'react'
import bgImage from '../assets/spot.png'
import bB from '../assets/sport.jpg'
import bImg from '../assets/club.png'
import {
    StarIcon,
    CalendarIcon,
    NewspaperIcon,
    CurrencyPoundIcon
} from '@heroicons/react/solid'

const Landing = () => {
    return(
        <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>Welcome to the Club</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>Club Champions</h1>
                    <p className='text-2xl'>Login to get access</p>
                    <button className='py-3 px-6 sm:w-[60%] my-4'>Get Started</button>
                </div>
                <div>
                    <img className='w-full' src={bB}></img>
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%] 
                mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 
                border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p className='font-bold'>Resources</p>

                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'><StarIcon className='h-6 text-indigo-600'/>Blog</p>
                        <p className='flex px-4 py-2 text-slate-500'><NewspaperIcon className='h-6 text-indigo-600'/>Press & News</p>
                        <p className='flex px-4 py-2 text-slate-500'><CalendarIcon className='h-6 text-indigo-600'/>Events & Webinars</p>
                        <p className='flex px-4 py-2 text-slate-500'><CurrencyPoundIcon className='h-6 text-indigo-600'/>Benefits</p>
                    </div>
                </div>
            </div>

        </div>
  );
}

export default Landing