import Image from 'next/image'
import { Bell } from '../icons/Bell'
import profile from '../../../public/dani.jpg'

export const Login = () => {
    return (
        <ul className='flex flex-col md:flex-row items-center gap-2 md:gap-4'>
            <li>FAVORITES</li>
            <li>MYLIST</li>
            <li className='bg-red-600 p-3 rounded-full text-black animate-bounce transition-all'>
                <Bell />
            </li>
            <Image src={profile} alt='profile picture' className='rounded-full' width={50} height={50} />
        </ul>
    )
}
