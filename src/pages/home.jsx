import React, { Component } from 'react'

import Navbar from '../components/navbar'
import Carousel from '../components/carousel'
import Segment from '../components/segment'
import Segmentnd from '../components/segmentnd'
import Footer from '../components/footer'
import Jumbotron from '../components/jumbotron'
import Fitur from '../components/fitur'


class home extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <Carousel />
                <Fitur />
                <Segment />
                <Segmentnd />
                <Footer />

            </div>
        )
    }
}

export default home
