/* eslint-disable @next/next/no-img-element */

import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

export const Footer = () => {

    return (
        <footer className='flex w-full items-center justify-between px-10 py-8 bottom-0'>
            <div className="flex ">
                <Link href='/'>
                    <h1 className="font-semibold cursor-pointer text-gray-200 hover:text-gray-400 transition">4 Frame</h1>
                </Link>
            </div>
            <ul className="hidden space-x-4 md:flex">
                <Link href='/series'>
                    <li className="headerLink">TV Shows</li>
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
            <div className="flex items-center space-x-4 text-sm font-light">
                <FaFacebook className="hover:scale-125 transition" />
                <FaTwitter className="hover:scale-125 transition" />
                <FaInstagram className="hover:scale-125 transition" />
                <FaYoutube className="hover:scale-125 transition" />
            </div>
        </footer>
    )
}
