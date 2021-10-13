import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

export default function Home() {

    console.log('rendering: Home')
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
                    <Button disabled variant="outline-info text-dark" className="w-100 my-3">create new chain</Button>
                    <Button disabled variant="outline-info text-dark" className="w-100 my-3">access existing chain</Button>
                    <Button disabled variant="outline-info text-dark" className="w-100 my-3">load from backup</Button>
                </Col>
            </Row>
            <h2 className="text-center">new features coming soon</h2>
            <h6 className="text-center">(checkout the password generator!)</h6>

        </Container >
    )
}
