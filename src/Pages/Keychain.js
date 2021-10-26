import React, { useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { KeychainItem } from '../Components/KeychainPageItems'
import { KeychainContext } from '../Context'

export default function Keychain() {


    const { keychainData, KeychainComponent, updateKeychainComponent, displayForm } = useContext(KeychainContext)
    const { name, items } = keychainData

    const toggleDisplayForm = () => {
        if (!displayForm) updateKeychainComponent('addKeychainItemForm')
        else updateKeychainComponent()
    }

    console.log('rendering: Keychain')

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={11} md={6} className="shadow border-orange p-3">

                    <Row>
                        <Col>
                            <h2>Keychain: {name}</h2>
                        </Col>
                    </Row>

                    <Row className="justify-content-center my-3" >
                        <Col>
                            {items.map(({ name, value, id }) => <KeychainItem key={id} id={id} name={name} value={value} />)}
                            <hr />

                            {KeychainComponent}

                        </Col>
                    </Row>

                    <Row className="px-0">
                        <Col className="d-flex justify-content-end px-0">
                            <Button
                                className="mb-3 mx-3"
                                variant="outline-warning text-dark"
                                onClick={toggleDisplayForm}
                            >
                                {displayForm ? 'cancel' : 'add item'}
                            </Button>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}