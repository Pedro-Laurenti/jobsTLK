import React, { useState } from 'react'

import { FiSearch } from "react-icons/fi";

const Banner = () => {

    const [query, setQuery] = useState("");
    const handleInputChange = (event) => {
        setQuery(event.target.value)
    }
    console.log(query)
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-40 py-40'>
            <h1 className='text-5xl font-bold text-primary mb-4'>Encontre a <span className=' text-appBlue-500'>sua vaga</span> aqui.</h1>
            <p className='text-lg text-black/70 mb-8'>Texto motivacional aqui</p>

            <form>
                <div>
                    <div className='flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-appWhite-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-appBlue-500 md:w-1/2 w-full'>
                        <input type='text' name='title' placeholder='Qual posição está procurando?' id='title' className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-appWhite-800 placeholder:text-appWhite-600 focus:right-0 sm:text-sm sm:leading-6'
                        onChange={handleInputChange}
                        value={query}
                        />
                        <FiSearch className='absolute mt-2.5 ml-2 text-appWhite-600'/>
                    </div>
                </div>
            </form>
        </div>


    )
}

export default Banner