import Image from 'next/image'
import React from 'react'
import { Star } from './icons/Star'
// import { MovieReviews } from './MovieReviews'

export const AsideMovie = ({ movieData, movieReviews }) => {
    const reviews = movieReviews.results
    // console.log(movieReviews);
    return (
        <aside className='hidden w-3/12 lg:flex flex-col items-center mt-40 p-10 gap-6 text-justify bg-slate-200 bg-opacity-50 text-black rounded-2xl'>

            {/* Imagen */}
            <Image src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`} alt={`Cartel de la pelicula ${movieData.name}`} width={150} height={150} className='hover:scale-110 transition' />
            {/* Información */}
            <p>{movieData.overview}</p>
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
                <h3 className='text-xl py-4'>Reviews</h3>
                <div className='flex gap-4'>
                    {/* Si reviews.length > 0 > */}
                    {
                        reviews.length > 0 ? (
                            reviews.map(review => (
                                <div key={review.id} className='flex flex-col items-center px-10 py-6 gap-2 bg-slate-100 rounded-xl'>
                                    <Image src={`https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`} alt={`Avatar de ${review.author}`} width={50} height={50}  className='rounded-full' />
                                    <p className='font-semibold text-slate-600'>{review.author_details.username}</p>
                                    <p className='text-slate-500'>{review.content.slice(0, 200)}...</p>
                                    <a href={review.url} target='_blank' className='hover:text-slate-400 transition-colors'>Read more</a>
                                </div>
                            ))
                        ) : (
                            <p>Actuamente no hay reviews</p>
                        )
                    }
                </div>
            </div>
            {/* Show more + Write a review */}
            <div className='flex flex-col'>
                {/* <button className='px-4 py-2'>Muestra más...</button> */}
                <button className='bg-gray-800 hover:bg-gray-600 transition text-white rounded-md px-4 py-2'>Escribe una review</button>
            </div>

        </aside>
    )
}

export const AsideSerie = ({ tvShowData }) => {
    return (
        <aside className='hidden w-3/12 lg:flex flex-col items-center mt-40 p-10 gap-6 text-justify bg-slate-200 bg-opacity-50 text-black rounded-2xl'>

            {/* Imagen */}
            <Image src={`https://image.tmdb.org/t/p/w500${tvShowData.poster_path}`} alt={`Cartel de la pelicula ${tvShowData.name}`} width={150} height={150} className='hover:scale-110 transition' />
            {/* Información */}
            <div>

                <p>{tvShowData.overview}</p>
            </div>
            {/* Muestrar puntuación */}
            <div className='flex flex-col items-center'>
                <h3>IMDB</h3>
                <div className='flex gap-4'>
                    <Star />
                    <p>{tvShowData.vote_average.toFixed(2)}</p>
                </div>
            </div>
            {/* Reviews de los usuarios */}
            {/* <div className='flex flex-col items-center'> */}
                {/* <h3>Reviews</h3> */}
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
            {/* </div> */}
            {/* Show more + Write a review */}
            <div className='flex flex-col'>
                <button className='px-4 py-2'>Show more</button>
                <button className='bg-gray-800 hover:bg-gray-600 transition text-white rounded-md px-4 py-2'>Write a review</button>
            </div>

        </aside>
    )
}