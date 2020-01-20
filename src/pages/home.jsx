import React, { Component } from 'react'

import Navbar from '../components/navbar'
import Carousel from '../components/carousel'
import Segment from '../components/segment'
import Segmentnd from '../components/segmentnd'
import Footer from '../components/footer'


class home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Carousel />
                <Segment />
                <Segmentnd />
                <Footer />
            </div>
        )
    }
}

export default home
