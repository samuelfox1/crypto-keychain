import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NavTabs from '../NavTabs'


export default function CustomNav() {
    return (
        <nav className="w-100 mb-5">
            <Container fluid>
                <Row className="d-flex justify-content-between align-items-end ">
                    <Col sx={12} sm={4}>
                        <h1 id="title" className="my-2 fs-6">crypto <span className="fs-1">
                            <span className="text-decoration-underline">key</span>chain</span>
                        </h1>
                    </Col>
                    <Col sx={12} sm={8}>
                        <NavTabs />
                    </Col>
                </Row>
            </Container>
        </nav>
    )
}
