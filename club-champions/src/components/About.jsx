import React from 'react'

const About = () => {
    return (
        <div className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>
                        Annual Club Management Sees:
                    </h2>
                    <p className='text-3xl py-6 text-gray-500'>Throughout the year, club managemnet has received well dissertation. The overrall report for the year is shown below:
                    </p>
                </div>


                <div name='about' className='grid md:grid-cols-3 gap-1 px-2 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-indigo-600'>4,500</p>
                        <p className='text-gray-400 mt-2'>Session Scheduled</p>
                    </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>$10</p>
                    <p className='text-gray-400 mt-2'>Million Processed</p>
                </div>
                <div className='border py-8 rounded-xl shadow-xl'>
                    <p className='text-6xl font-bold text-indigo-600'>10,500</p>
                    <p className='text-gray-400 mt-2'>Membership Sold</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About