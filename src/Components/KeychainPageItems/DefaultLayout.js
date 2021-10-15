import React, { useContext, useState } from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import { KeychainContext } from '../../Context'
import KeychainItem from './KeychainItem'

export default function KeychainMain() {

    const [displayForm, setDisplayForm] = useState(false)
    const { keychainData, updateKeychainComponent, } = useContext(KeychainContext)
    const { name, items } = keychainData

    const toggleDisplayForm = () => {
        if (!displayForm) updateKeychainComponent('addKeychainItemForm')
        else updateKeychainComponent('')

        setDisplayForm(!displayForm)
    }

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
            <Row>
                <Col xs={12} className="d-flex justify-content-end">
                    <Button
                        className="my-3"
                        variant="outline-warning text-dark"
                        onClick={toggleDisplayForm}
                    >
                        {displayForm ? 'add item' : 'cancel'}
                    </Button>
                </Col>
            </Row>
        </>
    )
}
