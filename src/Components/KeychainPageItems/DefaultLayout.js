import React, { useContext, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { KeychainContext } from '../../Context'
import KeychainItem from './KeychainItem'

export default function DefaultLayout() {

    const { keychainData } = useContext(KeychainContext)
    const { name, items } = keychainData

    return (
        <>
            <Row className="justify-content-center">
                <Col xs={10} md={4} >
                    <h1>{name}</h1>

                </Col>
            </Row>
            <Row className="justify-content-center mb-5" >
                <Col xs={10} md={4} className="border-orange">
                    <Container>
                        {items.map(({ name, value }, idx) => <KeychainItem key={idx} id={idx} name={name} value={value} />)}
                    </Container>
                </Col>
            </Row>
        </>
    )
}
