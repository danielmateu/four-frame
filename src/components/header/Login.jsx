import Image from 'next/image'
import { Bell } from '../icons/Bell'
import profile from '../../../public/dani.jpg'
import { Favorites } from '.'

export const Login = () => {
    return (
        <ul className='flex items-center gap-2 md:gap-4'>
            <Favorites/>
            <li className='bg-red-600 p-2 rounded-full text-black animate-ping transition-all'>
                <Bell />
            </li>
            <Image src={profile} alt='profile picture' className='rounded-full' width={50} height={50} />
        </ul>
    )
}
