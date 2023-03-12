import { AsideMovie } from '@/components/Aside';
import { Footer } from '@/components/Footer';

import { Header } from '@/components/Header'
// import { InformationCircleIcon } from '@/components/icons/InformationCircleIcon';
import { Star } from '@/components/icons/Star';
import { Row, RowRecommendedMovies, RowSimilarMovies } from '@/components/Row';
import Head from 'next/head'
import Image from 'next/image';
import React, { useState } from 'react'
// import { FaPlay } from 'react-icons/fa';
import { baseUrl } from '../../../constants/movie';

const MoviePage = ({ movieData, movieReviews, movieVideos, similarMovies, movieRecomendations }) => {
  // console.log(movieRecomendations);
  const [movie, setMovie] = useState(null)
  const youtubeKey = movieVideos.results[0]?.key
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>4 Frame - {movieData.original_title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />

      <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16 mb-14'>
        <div className='flex'>
          <AsideMovie
            movieData={movieData}
            movieReviews={movieReviews}
          />
          <div className='flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12'>

            <div className='absolute -z-10 top-0 left-0 h-[95vh] w-screen'>
              <Image src={`${baseUrl}${movieData?.backdrop_path || movieData?.poster_path}`}
                alt="Banner"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <h1 className='text-2xl lg:text-4xl md:text-7xl font-semibold'>
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p
              className='max-w-xs text-xs text-shadow-xl md:max-w-lg md:text-sm lg:max-w-2xl lg:text-base'
            >{movie?.overview}
            </p>

            <div className='absolute top-40 right-16 md:right-8 w-4/6'>
              <div className='flex items-center justify-between'>
                <h3 className='text-3xl mb-4'>{movieData.title}</h3>
                <div className='flex gap-4 items-center'>
                  <Star />
                  <p>{movieData.vote_average.toFixed(2)}/10</p>
                </div>
              </div>

              <iframe className='video w-full h-96'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeKey}?autoplay=0`}>
              </iframe>
              <div className='flex flex-col mt-5 md:mt-10 gap-0'>
                <RowSimilarMovies title="Peliculas similares" similarMovies={similarMovies} />
                {/* <p className=''></p> */}
                <RowRecommendedMovies title="Nuestras recomendaciones" movieRecomendations={movieRecomendations} />
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
  const { id } = context.query;

  const [movieDataResponse, movieDataReviews, movieVideosResponse, similarMoviesResponse, movieRecomendationsResponse] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/${id}?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=es-ES&page=1`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/reviews?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=es-ES&page=1`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/videos?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=es-ES&page=1`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/similar?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=es-ES&page=1`),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/movie/${id}/recommendations?api_key=${process.env.NEXT_PUBLIC_MOVIE_DB_API_KEY}&language=es-ES&page=1`),
  ]);

  const movieData = await movieDataResponse.json();
  // console.log(movieData);
  const movieReviews = await movieDataReviews.json();
  // console.log(movieReviews);
  const movieVideos = await movieVideosResponse.json();
  const similarMovies = await similarMoviesResponse.json();
  const movieRecomendations = await movieRecomendationsResponse.json();

  return {
    props: {
      movieData,
      movieReviews,
      movieVideos,
      similarMovies,
      movieRecomendations
    }
  };
}

export default MoviePage