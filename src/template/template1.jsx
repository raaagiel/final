import React, { Component } from 'react'
import {
    Navbar,
    Container,
    Nav,
    Image
} from 'react-bootstrap';
import {
    Grid,
    Header,
    Icon,
    Segment,
    Button
} from 'semantic-ui-react'

import Template2 from '../image/template2.jpeg'
import Galeri from '../components/galeri'

class template1 extends Component {
    render() {
        return (
            <div>
                {/* =========================NAV BAR========================== */}
                <Navbar bg="info" variant="dark" sticky="top" style={{ height: '100px', width: '100%', display: 'flex' }}>
                    <div style={{ display: 'flex', margin: '0 auto' }}>
                        <Navbar.Brand href="#home">Nama Pengundang</Navbar.Brand>
                        <Nav style={{ display: 'flex' }}>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                    </div>
                </Navbar>
                {/* =========================NAV BAR END========================== */}

                {/* ========================= BACKGROUND ========================== */}
                <div style={{ height: '680px' }}>
                    <Image
                        src={Template2}
                        style={{ height: '100%', width: '100%' }}
                    />
                </div>
                {/* ========================= BACKGROUND END ========================== */}
                <h1 style={{ marginTop: '-270px', textAlign: 'center' }}>Nama Pengundang</h1>
                <p className='Template-font' style={{ padding: '1em', textAlign: 'center' }}>
                    Are Getting ...
                </p>

                <h1 style={{ marginTop: '250px', textAlign: 'center' }}>ABOUT US</h1>
                <p className='Template-font' style={{ padding: '2em', textAlign: 'center' }}>
                    Nama pengundang
                </p>

                {/* ========================= FOTO PASANGAN ========================== */}
                <Container style={{ display: 'flex', width: '100%' }}>
                    <div style={{ display: 'flex', height: '300px', margin: '0 auto', width: '80%' }}>
                        <Image src={Template2} style={{ height: '100%', width: '50%', margin: '0 20px 0 0' }} />
                        <Image src={Template2} style={{ height: '100%', width: '50%', margin: '0 0 0 20px' }} />
                    </div>
                </Container>
                {/* ========================= FOTO PASANGAN END========================== */}

                {/* ========================= JADWAL========================== */}
                <Header style={{ padding: '2em 0em' }} as='h2' content='We look forward to welcoming you at our wedding' textAlign='center' />
                <Grid container columns={3}>
                    <Grid.Column textAlign='center'>
                        <Segment>
                            <Icon size='huge' name='home' color='teal' />
                            <Header as='h2'>Venue</Header>
                            <p>
                                Lorem ipsum dolor
                            </p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Segment>
                            <Icon size='huge' name='clock outline' color='teal' />
                            <Header as='h2'>Date</Header>
                            <p>
                                Lorem ipsum dolor
                            </p>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column textAlign='center'>
                        <Segment>
                            <Icon size='huge' name='calendar alternate outline' color='teal' />
                            <Header as='h2'>Time</Header>
                            <p>
                                Ceremony : 0:00 - 0:00 WIB
                            </p>
                        </Segment>
                    </Grid.Column>
                </Grid>
                {/* ========================= JADWAL END========================== */}

                {/* ========================= STORY========================== */}
                <Container text>
                    <Header style={{ padding: '2em 0em' }} textAlign='center' as='h2'>STORY</Header>
                    <Segment>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                    </p>
                        <p style={{ textAlign: 'justify' }}>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                            ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                            magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                            ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                            quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                            arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                            Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                            dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                            Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                            viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                    </p>
                    </Segment>
                </Container>
                {/* ========================= STORY END========================== */}

                {/* ========================= GALERI ========================== */}
                <Container>
                    <Header style={{ padding: '2em 0' }} textAlign='center' as='h2'>GALERI</Header>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <iframe
                            style={{ margin: '0 auto' }}
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/AIwBjl5QWDw"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        />
                    </div>
                    <Container style={{ padding: '4em 0' }}>
                        <Galeri />
                    </Container>
                </Container>
                {/* ========================= GALERI END ========================== */}

                <Grid columns={2} centered>
                    <Grid.Row stretched >
                        <Grid.Column textAlign='center'>
                            <Segment>
                                <Header as='h2'>GUEST ATTENDANCE</Header>
                                <p>
                                    Sudirman Grand Ballroom
                                </p>
                                <p>
                                    Sunday, 29th December 2019
                                </p>
                                <p>
                                    Ceremony : 0:00 - 0:00 WIB
                                </p>
                                <p>
                                    Reception : 0:00 - 0:00 WIB
                                </p>

                            </Segment>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Navbar bg="info" variant="dark" style={{ height: '200px', width: '100%', display: 'flex', marginTop: '70px' }}>
                    <Container>
                        <div className='Footer-content'>
                            <p> WEDDING INVITATION by</p>
                            <p>UNDANGIN</p>
                            <Button circular color='facebook' icon='facebook' />
                            <Button circular color='twitter' icon='twitter' />
                            <Button circular color='linkedin' icon='linkedin' />
                            <Button circular color='google plus' icon='google plus' />
                        </div>
                    </Container>
                </Navbar>
            </div >
        )
    }
}

export default template1
