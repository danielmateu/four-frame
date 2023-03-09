import React from 'react'
import { Login, Search, Trending } from '.'

export const Header = () => {
    return (
        <nav className='bg-gray-800 flex flex-col md:flex-row items-center px-4 py-2 justify-between text-white text-center gap-4'>
            <Trending/>
            <Search/>
            <Login/>
        </nav>
    )
}
