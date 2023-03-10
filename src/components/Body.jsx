import React from 'react'
import { Episodes } from './Episodes'
import { MoreLikeThis } from './MoreLikeThis'
import { Recomended } from './Recomended'

export const Body = ({ serieName, voteAverage, youtubeId, lastEpisodeToAir }) => {
    return (
        <div className='flex flex-col justify-center items-center w-9/12 bg-gray-800'>
            <h1 className='text-center'>{serieName}</h1>
            <h2 className='text-center'>{voteAverage}</h2>

            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeId}?autoplay=0`}>
            </iframe>

            <h3 className='text-center'>{lastEpisodeToAir.name}</h3>
            <p>{lastEpisodeToAir.overview}</p>

            <Episodes/>

            <MoreLikeThis/>

            <Recomended/>
        </div>
    )
}
