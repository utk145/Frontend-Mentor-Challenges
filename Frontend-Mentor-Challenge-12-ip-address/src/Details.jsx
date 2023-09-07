import React from 'react'

const Details = ({ apiRes, coordinates }) => {
    const { ipAdd, loc, timeZone, isp } = apiRes;
    return (
        <div className='w-4/5 absolute rounded-xl bg-white top-52 md:top-56 left-10 md:left-40 flex flex-col md:flex-row container gap-4 md:gap-10 p-4 md:p-8 border-2 border-gray-300 z-10'>
            <div className='w-full border-slate-300 md:border-r-2 flex flex-col gap-2 items-center'>
                <p className="text-sm  font-semibold opacity-60 text-slate-400">IP Address</p>
                <p className="md:text-2xl text-black font-bold">{ipAdd}</p>
            </div>
            <div className='w-full border-slate-300 md:border-r-2 flex flex-col gap-2 items-center'>
                <p className="text-sm font-semibold opacity-60 text-slate-400">Location</p>
                <p className="md:text-2xl text-black font-bold text-left">{loc}</p>
            </div>
            <div className='w-full border-slate-300 md:border-r-2 flex flex-col gap-2 items-center'>
                <p className="text-sm font-semibold opacity-60 text-slate-400">Timezone</p>
                <p className="md:text-2xl text-black font-bold">{timeZone}</p>
            </div>
            <div className='w-full flex flex-col gap-2 items-center'>
                <p className="text-sm font-semibold opacity-60 text-slate-400">ISP</p>
                <p className="md:text-2xl text-black font-bold text-center">{isp}</p>
            </div>
        </div>
    )
}

export default Details