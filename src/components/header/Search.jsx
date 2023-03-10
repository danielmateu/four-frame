import React from 'react'
import { Magnifier } from '../icons/Magnifier'

export const Search = () => {
    return (
        <div className='flex relative items-center'>
            <label htmlFor="search" className='absolute pl-2 z-50 flex items-center gap-2'>
                <Magnifier />
            </label>

            <input type="text" className='rounded-full w-96  py-1 px-10 text-gray-800 border focus:outline-none ' id='search' placeholder='Search...' />
        </div>
    )
}
