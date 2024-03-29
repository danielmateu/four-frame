import { AsideSerie } from '@/components/Aside'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Star, StarAside } from '@/components/icons/Star'
import { RowEpisodes, RowEpisodes2, RowSeries, RowSimilar } from '@/components/RowSeries'
import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import { baseUrl } from '../../../constants/movie'

const SeriePage = ({ tvShowData, tvVideos, tvEpisodes, similarTvShows, tvRecommendations }) => {

  const episodes = tvEpisodes.episodes;
  // console.log(similarTvShows.results);
  const similarShows = similarTvShows.results
  const [serie, setSerie] = useState(null)
  const youtubeKey = tvVideos.results[0]?.key

  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>4 Frame - {tvShowData.original_name}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16 mb-14'>
        <div className='flex'>
          <AsideSerie tvShowData={tvShowData} />
          <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>

            <div className='absolute -z-10 top-0 left-0 h-[95vh] w-screen'>
              <Image src={`${baseUrl}${tvShowData?.backdrop_path || tvShowData?.poster_path}`}
                alt="Banner"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className='absolute top-40 right-16 md:right-8 w-4/6'>
              <div className='flex items-center justify-between'>
                <h3 className='text-3xl mb-4'>
                  {tvShowData?.title || tvShowData?.name || tvShowData?.original_name}
                </h3>
                <div className='flex gap-4 items-center'>
                  <Star />
                  <p>{tvShowData.vote_average.toFixed(2)}/10
                  </p>
                </div>
              </div>

              <iframe className='video w-full h-96'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeKey}?autoplay=0`}>
              </iframe>

              <p className='py-6'>
                {tvShowData.tagline}
              </p>

              <div className='flex flex-col mt-5 md:mt-10 gap-0'>
                <RowEpisodes title='Episodios temporada 1' episodes={episodes} />
                <p className='pt-6'></p>
                <RowSimilar title='Series similares' similarShows={similarShows} />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  // console.log(id);
  const [tvShowDataResponse, tvVideosResponse, tvEpisodesResponse, tvEpisodes2Response, similarTvShowsResponse, tvRecommendationsResponse] = await Promise.all([
    // tvShowDataResponse
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tv/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=es-ES&page=1`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/tv/${id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=es-ES&page=1`),
    // Episodes
    fetch(`https://api.themoviedb.org/3/tv/${id}/season/1?api_key=c6aeee577586ba38e487b74dfede5deb&language=es-ES`),
    // Season 2
    fetch(`https://api.themoviedb.org/3/tv/${id}/season/2?api_key=c6aeee577586ba38e487b74dfede5deb&language=es-ES`),
    // Similar shows
    fetch(`https://api.themoviedb.org/3/tv/${id}/similar?api_key=c6aeee577586ba38e487b74dfede5deb&language=es-ES`),
    //Recomendations
    fetch(`https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=c6aeee577586ba38e487b74dfede5deb&language=es-ES`)
  ])

  const tvShowData = await tvShowDataResponse.json();
  const tvVideos = await tvVideosResponse.json();
  const tvEpisodes = await tvEpisodesResponse.json();
  const tvEpisodes2 = await tvEpisodes2Response.json();
  const similarTvShows = await similarTvShowsResponse.json();
  const tvRecommendations = await tvRecommendationsResponse.json();

  return {
    props: {
      tvShowData,
      tvVideos,
      tvEpisodes,
      tvEpisodes2,
      similarTvShows,
      tvRecommendations
    }
  }
}


export default SeriePage