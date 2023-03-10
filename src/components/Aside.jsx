import Image from 'next/image';
import React from 'react'

export const Aside = ({tvShowData}) => {
    console.log(tvShowData);
    return (
        <aside className='w-3/12 bg-slate-400'>
            {/* Poster */}
            <Image src={`https://image.tmdb.org/t/p/w500${tvShowData.poster_path}`} alt={tvShowData.name} width={150} height={200}/>
            {/* Overview */}
            <p>{tvShowData.overview}</p>
        </aside>
    )
}
