import React, { useContext, useState } from 'react'
import { Col, Row, Button } from 'react-bootstrap'
import { AppContext, KeychainContext } from '../../Context'
import { getExistingChains, getLocalStorage, getUserPassword } from '../../Utilty'

export default function AccessExistingChain() {

    const [existingChains] = useState(getExistingChains())
    const { updateAppComponent } = useContext(AppContext)
    const { setKeychainData } = useContext(KeychainContext)

    const handleAccessChain = (keychainName) => {

        const pw = getUserPassword()
        if (pw === null) return
        if (!pw) handleAccessChain(keychainName)

        const data = getLocalStorage(keychainName, pw)
        // if data is undefined, password was wrong
        if (!data) return

        setKeychainData({ name: keychainName, items: data })
        updateAppComponent('Keychain')
    }


    return (
        <Row className="justify-content-center">
            <Col xs={11} md={6} className="border-orange shadow p-4">
                <Row >
                    <Col  >
                        <h1>Access a chain</h1>
                        <ol>
                            <li><p >select a chain</p></li>
                            <li><p >enter password</p></li>
                        </ol>
                    </Col>
                </Row>
                <Row>
                    <Col className="mx-2">

                        {existingChains.length
                            ? existingChains.map((chain, idx) => <Button
                                variant="outline-warning text-dark"
                                className="w-100 my-3"
                                name={chain}
                                key={idx}
                                onClick={(e) => handleAccessChain(e.target.name)}
                            >
                                {chain}
                            </Button>
                            )
                            : <p>no chains created</p>
                        }

                    </Col>
                </Row>
                <Row>
                    <Col className="mx-2">
                        <Button
                            variant="outline-dark"
                            className="my-3"
                            onClick={() => updateAppComponent('Home')}
                        >
                            back
                        </Button>
                    </Col>
                </Row>

            </Col>
        </Row>

    )
}
