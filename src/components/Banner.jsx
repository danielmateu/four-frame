import Image from 'next/image'
import React from 'react'

export const Banner = () => {
    return (
        <div>
            {/* <div>
                <Image

                />
            </div> */}
        </div>
    )
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps = async (ctx) => {

    

    return {
        props: {

        }
    }
}

