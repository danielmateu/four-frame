import Link from 'next/link';
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Thumbnail } from './Thumbnail'

export const Row = ({ title, movies }) => {
    const moviesList = movies.results;
    const rowRef = React.useRef(null);
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction) => {
        setIsMoved(true)
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current

            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <div className='h-40 space-y-0.5'>
            <h2 className='w-56 cursor-pointer text-sm font-semibold text-slate-200 transition duration-200 hover:text-white md:text-xl'>{title}</h2>

            <div className='group relative md:-ml-2'>

                <FaChevronLeft
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100}`}
                    onClick={() => {
                        handleClick('left');
                    }}
                />

                <div ref={rowRef} className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide'>
                    {
                        moviesList.map(movie => (
                            <Link
                                key={movie.id}
                                href={`/movie/${movie.id}`}
                            >
                                <Thumbnail movie={movie} />
                            </Link>
                        ))
                    }
                </div>

                <FaChevronRight className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 `}
                    onClick={() => {
                        // rowRef.current.scrollLeft += 200;
                        // setIsMoved(true);
                        handleClick('right');
                    }}
                />

            </div>
        </div>
    )
}
export const RowSimilarMovies = ({ title, similarMovies }) => {
    console.log(similarMovies);
    const similarMoviesList = similarMovies.results;
    const rowRef = React.useRef(null);
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction) => {
        setIsMoved(true)
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current

            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <div className='h-40 space-y-0.5'>
            <h2 className='w-56 cursor-pointer text-sm font-semibold text-slate-200 transition duration-200 hover:text-white md:text-xl'>{title}</h2>

            <div className='group relative md:-ml-2'>

                <FaChevronLeft
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100}`}
                    onClick={() => {
                        handleClick('left');
                    }}
                />

                <div ref={rowRef} className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide'>
                    {
                        similarMoviesList.map(movie => (
                            <Link
                                key={movie.id}
                                href={`/movie/${movie.id}`}
                            >
                                <Thumbnail movie={movie} />
                            </Link>
                        ))
                    }
                </div>

                <FaChevronRight className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 `}
                    onClick={() => {
                        // rowRef.current.scrollLeft += 200;
                        // setIsMoved(true);
                        handleClick('right');
                    }}
                />

            </div>
        </div>
    )
}
export const RowRecommendedMovies = ({ title, movieRecomendations }) => {
    console.log(movieRecomendations);
    const movieRecomendationList = movieRecomendations.results;
    const rowRef = React.useRef(null);
    const [isMoved, setIsMoved] = useState(false)

    const handleClick = (direction) => {
        setIsMoved(true)
        if (rowRef.current) {
            const { scrollLeft, clientWidth } = rowRef.current

            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth
            rowRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' })
        }
    }

    return (
        <div className='h-40 space-y-0.5'>
            <h2 className='w-56 cursor-pointer text-sm font-semibold text-slate-200 transition duration-200 hover:text-white md:text-xl'>{title}</h2>

            <div className='group relative md:-ml-2'>

                <FaChevronLeft
                    className={`absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100}`}
                    onClick={() => {
                        handleClick('left');
                    }}
                />

                <div ref={rowRef} className='flex items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2 scrollbar-hide'>
                    {
                        movieRecomendationList.map(movie => (
                            <Link
                                key={movie.id}
                                href={`/movie/${movie.id}`}
                            >
                                <Thumbnail movie={movie} />
                            </Link>
                        ))
                    }
                </div>

                <FaChevronRight className={`absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 `}
                    onClick={() => {
                        // rowRef.current.scrollLeft += 200;
                        // setIsMoved(true);
                        handleClick('right');
                    }}
                />

            </div>
        </div>
    )
}
