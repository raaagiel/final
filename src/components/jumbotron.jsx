import React, { Component } from 'react'
import { Grid, Image } from 'semantic-ui-react'

class jumbotron extends Component {
    render() {
        return (
            <div className='segment-jumbo'>
                <Grid>
                    <Grid.Column className='Text-image' width={7}>
                        <Image src='https://images.pexels.com/photos/1587292/pexels-photo-1587292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' />
                    </Grid.Column>
                    <Grid.Column>
                        <p className='Text-judul'>
                            Tentang Kami
                        </p>
                        <p className='Text-jumbo'>
                            Berdiri sejak tidak kebagian tempat duduk, Undangin adalah sebuah platform undangan yang bergerak dalam bidang pelayanan pembuatan undangan digital berbasis website. Undangin memudahkan calon pengundang untuk mengirimkan undangan atau informasi undangan kepada calon tamu undangan dengan efektif dan efisien karena didistribusikan dalam bentuk link yang dapat disebar ke berbagai messaging app.
                        </p>
                        <p className='Text-jumbo'>
                            Dengan proses pembuatan yang tidak memakan waktu lama dan harga yang tetap bersahabat tanpa mengurangi eksklusifitas dan kelengkapan dari website undangan digital Anda, kami yakin Undangin dapat mejadi pilihan tepat untuk membantu Anda mempersiapkan undangan. Karena kami percaya bahwa membahagiakan kebahagiaan adalah cara menyempurnakan momen Anda yang paling berharga.
                        </p>
                    </Grid.Column>
                </Grid>
            </div>

        )
    }
}

export default jumbotron
