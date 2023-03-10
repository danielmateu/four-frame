import { Aside } from '@/components/Aside';
import { Body } from '@/components/Body';
import { Layout } from '@/components/Layout'

import React, { useState } from 'react'

const SeriesPage = ({ tvShowData, tvShowVideos, tvShowEpisodeGroups }) => {

    console.log(tvShowData);
    console.log(tvShowVideos);
    // console.log(tvShowEpisodeGroups);

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
            <div className='flex'>
                <Aside tvShowData={tvShowData} />
                <Body serieName={serieName} voteAverage={voteAverage} youtubeId={youtubeId} lastEpisodeToAir={lastEpisodeToAir} />
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query;

    const [tvShowDataResponse, tvShowVideosResponse] = await Promise.all([
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=es-ES&page=1`),
        fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US&page=1`),
        // fetch(`https://api.themoviedb.org/3/tv/${id}/episode_groups?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=en-US`)
        
    ]);

    const tvShowData = await tvShowDataResponse.json();
    const tvShowVideos = await tvShowVideosResponse.json();
    // episode groups
    // const tvShowEpisodeGroups = await tvShowEpisodeGroupsResponse.json();

    return {
        props: {
            tvShowData,
            tvShowVideos,
            // tvShowEpisodeGroups
        }
    };
}

export default SeriesPage