import Image from 'next/image'
import React from 'react'

export const SeriesList = ({series}) => {

    const {results} = series

    console.log(results);


    return (
        <ul className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 bg-gray-900 text-white p-10'>
            {results.map((serie) => (
                <li key={serie.id} className='flex flex-col items-center margin-auto '>
                    <a href={`/series/${serie.id}`}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
                            alt={serie.name}
                            className="hover:opacity-75 transition ease-in-out duration-150"
                            width={250}
                            height={250}
                        />
                    </a>
                    <div className="mt-2">
                        <a
                            href={`/series/${serie.id}`}
                            className="text-lg mt-2 hover:text-gray:300"
                        >
                            {serie.name}
                        </a>
                        {/* <div className="flex items-center text-gray-400 text-sm mt-1">
                            <svg
                                className="fill-current text-orange-500 w-4"
                                viewBox="0 0 24 24"
                            >
                                <g data-name="Layer 2">
                                    <path
                                        d="M12 21a1 1 0 01-.64-.23 1 1 0 01-.13-1.41l.13-.15 4.3-4.29H3a1 1 0 01-.12-2h15.59l-4.3-4.3a1 1 0 01-.08-1.32 1 1 0 011.5-.08l.1.08 6 6a1 1 0 01.08 1.32l-.08.1-6 6A1 1 0 0112 21z"
                                        data-name="arrow-ios-forward"
                                    ></path>
                                </g>
                            </svg>
                            <span className="ml-1">{serie.vote_average}</span>
                            <span className="mx-2">|</span>
                            <span>{serie.first_air_date}</span>
                        </div> */}
                        {/* <div className="text-gray-400 text-sm">{serie.overview}</div> */}
                    </div>
                </li>
            ))}
        </ul>




        // <div className="container mx-auto px-4 py-16">
        //     <div className="popular-movies">
        //         <h2 className="uppercase tracking-wider text-orange-500 text-lg font-semibold">
        //             Popular Series
        //         </h2>
        //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        //             {series.results.map((serie) => (
        //                 <div key={serie.id} className="mt-8">
        //                     <a href={`/series/${serie.id}`}>
        //                         <Image
        //                             src={`https://image.tmdb.org/t/p/w500${serie.poster_path}`}
        //                             alt={serie.name}
        //                             className="hover:opacity-75 transition ease-in-out duration-150"
        //                         />
        //                     </a>
        //                     <div className="mt-2">
        //                         <a
        //                             href={`/series/${serie.id}`}
        //                             className="text-lg mt-2 hover:text-gray:300"
        //                         >
        //                             {serie.name}
        //                         </a>
        //                         <div className="flex items-center text-gray-400 text-sm mt-1">
        //                             <svg
        //                                 className="fill-current text-orange-500 w-4"
        //                                 viewBox="0 0 24 24"
        //                             >
        //                                 <g data-name="Layer 2">
        //                                     <path
        //                                         d="M12 21a1 1 0 01-.64-.23 1 1 0 01-.13-1.41l.13-.15 4.3-4.29H3a1 1 0 01-.12-2h15.59l-4.3-4.3a1 1 0 01-.08-1.32 1 1 0 011.5-.08l.1.08 6 6a1 1 0 01.08 1.32l-.08.1-6 6A1 1 0 0112 21z"
        //                                         data-name="arrow-ios-forward"
        //                                     ></path>
        //                                 </g>
        //                             </svg>
        //                             <span className="ml-1">{serie.vote_average}</span>
        //                             <span className="mx-2">|</span>
        //                             <span>{serie.first_air_date}</span>
        //                         </div>
        //                         <div className="text-gray-400 text-sm">{serie.overview}</div>
        //                     </div>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </div>
    )
}
