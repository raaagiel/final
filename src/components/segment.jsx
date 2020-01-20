import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'
// import Logos from '../image/download.png'


class segment extends Component {
    render() {
        return (
            <div className='segment-first'>
                <div className='segment-image'>
                    {/* <Image src={Logos} /> */}
                    <Image src='https://img.theculturetrip.com/universal-app/images/wishlist-banner-medium.png' />
                </div>
            </div>
        )
    }
}

export default segment
