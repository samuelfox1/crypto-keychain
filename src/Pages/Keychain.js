import React, { useContext, useState } from 'react'
import { FaConnectdevelop } from 'react-icons/fa'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { KeychainItem } from '../Components/KeychainPageItems'
import { KeychainContext } from '../Context'

export default function Keychain() {


    const { keychainData, KeychainComponent, updateKeychainComponent, displayForm } = useContext(KeychainContext)
    const [displayChainOptions, setDisplayChainOptions] = useState(false)
    const { name, items } = keychainData

    const toggleDisplayForm = () => {
        if (!displayForm) updateKeychainComponent('addKeychainItemForm')
        else updateKeychainComponent()
    }

    const toggleDisplayChainOptions = () => {
        setDisplayChainOptions(!displayChainOptions)
    }

    console.log('rendering: Keychain')

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={11} md={6} className="shadow border-orange p-3">

                    <Row>
                        <Col className="d-flex justify-content-between align-items-center py-2 border">
                            <h3 className="my-0">{name}</h3>
                            <FaConnectdevelop
                                className="react-icons"
                                onClick={toggleDisplayChainOptions}
                            />
                        </Col>
                    </Row>
                    {displayChainOptions && <Row className="py-3 border">
                        <Col className=" col-6 d-flex">

                            <h6>settings</h6>
                        </Col>
                        <Col className=" col-6 text-end">
                            <Button
                                className="mb-3"
                                variant="outline-warning text-dark"
                            >
                                rename
                            </Button>
                            <Button
                                className=""
                                variant="outline-danger text-dark"
                            >
                                destroy
                            </Button>
                        </Col>
                    </Row>}

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