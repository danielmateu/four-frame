import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { baseUrl } from '../../constants/movie'
import { FaPlay } from 'react-icons/fa'
import { InformationCircleIcon } from './icons/InformationCircleIcon'

export const Banner = ({ netflixOriginals }) => {

    // console.log(netflixOriginals.results)
    const netFlixOriginalsList = netflixOriginals.results
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        setMovie(netFlixOriginalsList[Math.floor(Math.random() * netFlixOriginalsList.length)])
    }, [netFlixOriginalsList])

    // console.log(movie);

    return (
        <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>
            <div className='absolute -z-10 top-0 left-0 h-[95vh] w-screen'>
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
                    alt="Banner"
                    layout="fill"
                    objectFit="cover"
                />
            </div>

            <h1 className='text-2xl lg:text-4xl md:text-7xl font-semibold text-slate-200'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p
                className='max-w-xs text-xs text-shadow-xl md:max-w-lg md:text-sm lg:max-w-2xl lg:text-base text-slate-300'
            >{movie?.overview}
            </p>

            {/* <div className='flex space-x-4'>
                <button className='bannerButton bg-white text-black'>
                    <FaPlay className='h-4 w-4 text-green-400   transition' />
                    Play
                </button>
                <button className='bannerButton bg-gray-600 opacity-90'>
                    <InformationCircleIcon />
                    More Info
                </button>
            </div> */}
        </div>
    )
}

