import { Banner } from '@/components/Banner'
import { Header } from '@/components/Header'
import { Row } from '@/components/Row'
import Head from 'next/head'
import React from 'react'

const MoviesPage = () => {
    return (
        <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
            <Head>
                <title>4 Frame - Movies</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* Header */}
            <Header />
            <main className='relative pl-4 pb-24 lg:space-y-24 lg:pl-16'>
                {/* <Banner netflixOriginals={netflixOriginals}/> */}
                {/* Section */}
                {/* <section className='md:space-y-10'>
                    <Row title="Trending Now" movies={trendingNow} />
                    <Row title="Top Rated" movies={topRated} />
                    <Row title="Action Thrillers" movies={actionMovies} />
    

                    <Row title="Comedies" movies={comedyMovies} />
                    <Row title="Scary Movies" movies={horrorMovies} />
                    <Row title="Romance Movies" movies={romanceMovies} />
                    <Row title="Documentaries" movies={documentaries} />
                </section> */}
            </main>
            {/* Modal */}
        </div>
    )
}

export default MoviesPage