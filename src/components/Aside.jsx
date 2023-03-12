import Image from 'next/image'
import React from 'react'
import { Star } from './icons/Star'
// import { MovieReviews } from './MovieReviews'

export const AsideMovie = ({ movieData }) => {
    return (
        <aside className='hidden w-3/12 md:flex flex-col items-center mt-20 p-10 gap-10 text-justify'>

            {/* Imagen */}
            <Image src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={`Cartel de la pelicula ${movieData.name}`} width={150} height={150} />
            {/* Información */}
            <div>

                <p>{movieData.overview}</p>
            </div>
            {/* Muestrar puntuación */}
            <div className='flex flex-col items-center'>
                <h3>IMDB</h3>
                <div className='flex gap-4'>
                    <Star />
                    <p>{movieData.vote_average.toFixed(2)}</p>
                </div>
            </div>
            {/* Reviews de los usuarios */}
            <div className='flex flex-col items-center'>
                <h3>Reviews</h3>
                {/* <MovieReviews
                    movieReviews={movieReviews}
                /> */}
                {/* <div className='flex gap-4'>
                    {reviews.map((review) => (
                        <div key={review.id} className='flex flex-col items-center'>
                            Avatar
                            <Image src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`} alt={review.author} width={50} height={150} className='rounded-full' />
                            <p>{review.author}</p>
                            <p>{review.content}</p>
                            <p>{review.created_at}</p>
                        </div>
                    ))}
                </div> */}
            </div>
            {/* Show more + Write a review */}
            <div className='flex flex-col'>
                <button className='px-4 py-2'>Show more</button>
                <button className='bg-gray-800 text-white rounded-md px-4 py-2'>Write a review</button>
            </div>

        </aside>
    )
}