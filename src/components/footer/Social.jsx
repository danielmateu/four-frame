import React from 'react'
import { Facebook, Instagram, Youtube, Twitter } from '../icons'
// import { Twitter } from '../icons/Twitter'

export const Social = () => {
    return (

        <>
            {/* social media here */}
            <div className='flex gap-2'>
                <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
                    {/* <Facebook /> */}
                    Facebook
                </a>
                <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
                    {/* <Instagram /> */}
                    Instagram
                </a>

                <a href='https://www.youtube.com' target='_blank' rel='noreferrer'>
                    {/* <Youtube /> */}
                    Youtube
                </a>

                <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
                    {/* <Twitter /> */}
                    Twitter
                </a>
            </div>
        </>

        
    )
}
