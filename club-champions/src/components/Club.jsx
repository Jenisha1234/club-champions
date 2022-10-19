import React from 'react'
import fImage from '../assets/football.jpg' 
import bImage from '../assets/basketball.jpg' 
import cImage from '../assets/cricket.jpg' 
import tImage from '../assets/tennis.jpg' 
import sImage from '../assets/swimming.jpg' 
import aImage from '../assets/archery.jpg' 

const Club = () => {
    return (
        <div name='club' className='w-full my-24'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-4xl font-bold'>CLUB</h2>
                    <p className='text-2xl py-6 text-gray-500'>Join the club now</p>
                </div>


                <div className='grid md:grid-cols-3 gap-8 px-2 text-center'>
                    <div className='border py-10 rounded-xl shadow-xl'>
                        {/* Image for basketball*/}
                        <div>
                        <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img className='w-full h-80' src={bImage}></img>
                        </a>
                        </div>
                        <p className='text-6xl font-bold'>Basketball</p>
                        <p className='text-gray-400 mt-2'>Join Session</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        {/* Image for swimming*/}
                    <div>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img className='w-full my-2 h-80' src={sImage}></img>
                        </a>
                        </div>
                        <p className='text-6xl font-bold'>Swimming</p>
                        <p className='text-gray-400 mt-2'>Join Session</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        {/* Image for Archery*/}

                    <div>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img className='w-full my-2 h-80' src={aImage} ></img>
                        </a>
                        </div>
                        <p className='text-6xl font-bold'>Archery</p>
                        <p className='text-gray-400 mt-2'>Join Session</p>
                    </div>
                </div>
                <div className='grid md:grid-cols-3 gap-8 px-2 text-center my-10'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        {/* Image for Cricket*/}
                    <div>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img className='w-full h-80' src={cImage}></img>
                        </a>
                        </div>
                        <p className='text-6xl font-bold'>Cricket</p>
                        <p className='text-gray-400 mt-2'>Join Session</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        {/* Image for football*/}
                    <div>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img className='w-full h-80' src={fImage}></img>
                        </a>
                        </div>
                        <p className='text-6xl font-bold'>Football</p>
                        <p className='text-gray-400 mt-2'>Join Session</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        {/* Image for tennis*/}
                    <div>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img className='w-full h-80' src={tImage}></img>
                        </a>
                        </div>
                        <p className='text-6xl font-bold'>Tennis</p>
                        <p className='text-gray-400 mt-2'>Membership Sold</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Club