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
                <img
                    src="https://rb.gy/ulxxee"
                    width={100}
                    height={100}
                    className="cursor-pointer object-contain"
                    alt="Logo"
                />
                <ul className="hidden space-x-4 md:flex">
                    <li className="headerLink">Home</li>
                    <li className="headerLink">TV Shows</li>
                    <li className="headerLink">Movies</li>
                    <li className="headerLink">New & Popular</li>
                    <li className="headerLink">My List</li>
                </ul>
            </div>
            <div className="flex items-center space-x-4 text-sm font-light">
                <SearchIcon />
                <p className="hidden lg:inline">kids</p>
                <BellIcon/>
                <Link href='/account'>
                    <img
                        src='https://media.licdn.com/dms/image/C4D03AQGRZXth0rFoxw/profile-displayphoto-shrink_200_200/0/1616685560578?e=1683763200&v=beta&t=0tRGc2qMIEW1AP5t1B9yM1dFJyCLKAp6MqjLItspC98'
                        width={50}
                        height={50}
                        className="cursor-pointer object-contain rounded-xl"
                        alt="Logo"
                    />
                </Link>
            </div>
        </header>
    )
}
