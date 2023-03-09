import { Layout } from '@/components/Layout'
import Image from 'next/image';
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const SeriesPage = ({ tvShowData, tvShowVideos }) => {

    console.log(tvShowData);
    console.log(tvShowVideos);

    // Serie name
    const [serieName, setSerieName] = useState(tvShowData.name)
    // Vote average
    const [voteAverage, setVoteAverage] = useState(tvShowData.vote_average)
    // get preview videos
    const [youtubeId, setYoutubeId] = useState(tvShowVideos.results[0].key)
    // Last episode to air
    const [lastEpisodeToAir, setLastEpisodeToAir] = useState(tvShowData.last_episode_to_air)
    console.log(lastEpisodeToAir);

    return (
        <Layout>
            <main className='flex flex-col justify-center items-center'>
                <h1 className='text-center'>{serieName}</h1>
                <h2 className='text-center'>{voteAverage}</h2>
                
                <iframe className='video'
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${youtubeId}?autoplay=0`}>
                </iframe>

                <h3 className='text-center'>{lastEpisodeToAir.name}</h3>
                <p>{lastEpisodeToAir.overview}</p>
            </main>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query;

    const [tvShowDataResponse, tvShowVideosResponse] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`),
        fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`)
    ]);

    const tvShowData = await tvShowDataResponse.json();
    const tvShowVideos = await tvShowVideosResponse.json();

    return {
        props: {
            tvShowData,
            tvShowVideos
        }
    };
}

export default SeriesPage