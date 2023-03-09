import Link from 'next/link'
import React from 'react'

export const Trending = () => {
    return (
        <div className='flex flex-col md:flex-row md:gap-4 items-center'>
            <ul className='flex flex-col md:flex-row gap-2 md:gap-4'>
                <li>FOR YOU</li>
                <li>MOVIES</li>
                <li>TV SHOWS</li>
            </ul>
        </div>
    )
}
