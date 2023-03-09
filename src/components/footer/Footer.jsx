import React from 'react'
import { Social } from '.'
import { Favorites, Logo, Trending } from '../header'

export const Footer = () => {
    return (
        <nav className='bg-gray-800 flex flex-col md:flex-row items-center px-4 py-2 justify-between text-white text-center gap-4'>
            <Logo />
            <div className='flex'>
                <Trending />
                <Favorites />
            </div>
            <Social/>
        </nav>
    )
}
