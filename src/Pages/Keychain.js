import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { KeychainItem } from '../Components/KeychainPageItems'
import { KeychainContext } from '../Context'

export default function Keychain() {

    const { keychainData, KeychainComponent, updateKeychainComponent, } = useContext(KeychainContext)
    const { name, items } = keychainData

    console.log('rendering: KeyChainMain')

    return (
        <Container className="my-5 border">
            <Row className="justify-content-center">
                <Col xs={10} md={4} >
                    <h1>{name}</h1>

                </Col>
            </Row>
            <Row className="justify-content-center mb-5" >
                <Col xs={10} md={4} className="border-orange">
                    <Container>
                        {items.map(({ name, value }, idx) => <KeychainItem key={idx} id={idx} name={name} value={value} />)}
                        {KeychainComponent}
                    </Container>
                </Col>
            </Row>
            <Row>
                <Col xs={12} className="d-flex justify-content-end">
                    <Button
                        className="my-3"
                        variant="outline-warning text-dark"
                        onClick={() => updateKeychainComponent('addKeychainItemForm')}
                    >
                        add item
                    </Button>
                </Col>
            </Row>

        </Container >
    )
}