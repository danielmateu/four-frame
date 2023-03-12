import Image from 'next/image';
import React from 'react'

export const ThumbnailSeries = ({ serie }) => {
    // console.log(serie);
    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
            <Image
                src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path || serie.poster_path}`}
                className="rounded-sm object-cover md:rounded"
                layout="fill"
                alt='thumbnail image'
            />

        </div>
    )
}

export const ThumbnailEpisodes = ({ episode }) => {
    // console.log(episode);
    return (
        <div className='relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105'>
            <Image
                src={`https://image.tmdb.org/t/p/w500${episode.still_path || episode.poster_path}`}
                className="rounded-sm object-cover md:rounded"
                layout="fill"
                alt='thumbnail image'
            />

        </div>
    )
}
