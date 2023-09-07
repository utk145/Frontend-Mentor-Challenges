import React, { useState } from 'react'

const Search = ({ apiRes, apiData }) => {
    const [ipVal, setipVal] = useState("");
    const { ipAdd } = apiRes;

    const handleClick = () => {
        // console.log(ipVal);
        setipVal(ipAdd);
        apiData(ipVal);
    };

    return (
        <div className='h-2/5  min-w-full bg-cover flex flex-col gap-5 items-center justify-center search_container'>
            <h2 className='font-bold text-white items-center text-[20px]'>IP Address Tracker</h2>

            {/* Input*/}
            <div className="flex justify-center items-center h-10 md:w-1/2 sm:w-1/2 lg:w-1/3">
                <input type="text" className='rounded-l-lg text-[18px] h-full w-4/5 px-3 py-2 cursor-pointer ring-offset-background focus-visible:outline-none placeholder:text-muted-foreground bg-background border-input' placeholder='Search for any IP address or domain' onChange={(e) => setipVal(e.target.value)} />
                {/* <div className="bg-black w-14 h-full ml-0 flex rounded-r-lg items-center justify-center"><span className='text-white font-bold cursor-pointer'>&gt;</span></div>             */}
                <div className="bg-black w-14 h-full ml-0 flex rounded-r-lg items-center justify-center cursor-pointer" onClick={handleClick}>
                    <img src="/icon-arrow.svg" alt="arrow_icon" className='px-3 py-2' />
                </div>
            </div>
        </div>
    )
}

export default Search