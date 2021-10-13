import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { PageContext } from '../../Context/PageContext'

export default function Home() {

    const { updatePage } = useContext(PageContext)
    console.log('rendering: Home')
    return (
        <Container className="my-5">
            <Row className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active text-center" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <h1>Welcome!</h1>
                    {/* <p>to your personal lock-box</p> */}
                    <br />
                    <p>securely create and store</p>
                    <p>passwords and private text</p>
                </div>
            </Row>
            <Row className="justify-content-center" >
                <Col xs={8} md={4} className="border-orange mt-5">
                    <Button variant="outline-info text-dark" className="w-100 my-3">create new chain</Button>
                    <Button variant="outline-info text-dark" className="w-100 my-3">access existing chain</Button>
                    <Button variant="outline-info text-dark" className="w-100 my-3">load from backup</Button>
                </Col>
            </Row>

        </Container >
    )
}
