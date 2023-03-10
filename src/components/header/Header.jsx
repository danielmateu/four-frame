import React from 'react'
import { Login, Logo, Search, Trending } from '.'

export const Header = () => {



    return (
        <nav className='bg-gray-600 flex items-center px-4 py-2 justify-between text-white text-center gap-4'>
            <Logo />
            <Trending />
            <Search />
            <Login />

        </nav>
    )
}
