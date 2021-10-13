import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { LandingContext } from '../../Context'

export default function Landing() {

    const { component } = useContext(LandingContext)

    console.log('rendering: Landing')

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col xs={10} md={4} >
                    <h1>Welcome!</h1>
                    <ul>
                        <li><p>improve your digital security</p></li>
                        <li><p>create new passwords or access keys</p></li>
                        <li><p>add existing passwords or keys</p></li>
                        <li><p>keep them safe in an encrypted keychain</p></li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-center mb-5" >
                <Col xs={10} md={4} className="border-orange">
                    {component}
                </Col>
            </Row>
            <h2 className="text-center">new features coming soon</h2>
            <h6 className="text-center">(checkout the password generator!)</h6>

        </Container >
    )
}
