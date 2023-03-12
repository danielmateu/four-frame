/* eslint-disable @next/next/no-img-element */


import Link from "next/link"
import { useEffect, useState } from "react"
import { BellIcon } from "./icons/BellIcon"
import { SearchIcon } from "./icons/SearchIcon"

export const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={`flex ${isScrolled && 'bg-[#141414]'} `}>
            <div className="flex items-center space-x-2 md:space-x-10">
                <Link href='/'>
                    <h1 className="flex font-semibold cursor-pointer text-gray-200 hover:text-gray-400 transition">4Frame</h1>
                </Link>
                <ul className="gap-2 flex">
                    <Link href='/series'>
                        <li className="headerLink">Tv Shows</li>
                    </Link>
                    <Link href='/movies'>
                        <li className="headerLink">Movies</li>
                    </Link>
                    <Link href='/new&popular'>
                        <li className="headerLink">New & Popular</li>
                    </Link>
                    <Link href='/my-list'>
                        <li className="headerLink">My List</li>
                    </Link>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon />

                <BellIcon />
                <Link href='/account'>
                    <img
                        src='https://media.licdn.com/dms/image/C4D03AQGRZXth0rFoxw/profile-displayphoto-shrink_200_200/0/1616685560578?e=1683763200&v=beta&t=0tRGc2qMIEW1AP5t1B9yM1dFJyCLKAp6MqjLItspC98'
                        width={40}
                        height={40}
                        className="hidden sm:flex cursor-pointer object-contain rounded-xl hover:scale-95 transition"
                        alt="Logo"
                    />
                </Link>
            </div>
        </header>
    )
}
