import React, { useContext, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { KeychainItem, KeychainSettings } from '../Components/KeychainPageItems'
import { KeychainContext } from '../Context'

export default function Keychain() {


    const { keychainData, KeychainComponent, updateKeychainComponent, displayForm } = useContext(KeychainContext)
    const [displayChainSettings, setDisplayChainSettings] = useState(false)
    const { name, items } = keychainData

    const toggleDisplayForm = () => {
        if (!displayForm) updateKeychainComponent('addKeychainItemForm')
        else updateKeychainComponent()
    }

    const toggleDisplayChainOptions = () => {
        setDisplayChainSettings(!displayChainSettings)
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={11} md={6} className="shadow border-orange p-3 border-orange">

                    <Row className="mb-1">
                        <Col className="d-flex justify-content-between align-items-center py-2">
                            <h3 className="my-0">{name}</h3>
                            <Button
                                variant="outline-warning text-dark"
                                onClick={toggleDisplayChainOptions}
                            >
                                settings
                                {displayChainSettings
                                    ? <FaAngleUp onClick={toggleDisplayChainOptions} />
                                    : <FaAngleDown />
                                }
                            </Button>
                        </Col>
                    </Row>
                    <hr />
                    {displayChainSettings
                        ? <KeychainSettings />
                        : <>
                            <Row>
                                <Col>
                                    <h6 className="px-0">items</h6>
                                </Col>
                            </Row>
                            <Row className="justify-content-center mb-3" >
                                <Col>
                                    {items.map(({ name, value, id }) => <KeychainItem key={id} id={id} name={name} value={value} />)}
                                    <hr />
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
                                {KeychainComponent}
                            </Row>
                        </>
                    }
                </Col>
            </Row>
        </Container>
    )
}