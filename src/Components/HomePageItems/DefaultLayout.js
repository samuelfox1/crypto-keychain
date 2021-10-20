import React, { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { HomeContext } from '../../Context'

export default function DefaultLayout() {
    const { updateHomeComponent } = useContext(HomeContext)
    return (
        <Row className="justify-content-center">
            <Col xs={11} md={6} className="shadow border-orange p-3">
                <Row >
                    <Col >
                        <h1>Welcome!</h1>
                        <ul>
                            <li><p>improve your digital security</p></li>
                            <li><p>create new passwords or access keys</p></li>
                            <li><p>add existing passwords or keys</p></li>
                            <li><p>keep them safe in an encrypted keychain</p></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="mx-2">
                        <Button
                            variant="outline-warning text-dark"
                            className="w-100 my-3"
                            onClick={() => updateHomeComponent('createChain')}
                        >
                            create new chain
                        </Button>
                        <Button disabled variant="outline-warning text-dark" className="w-100 my-3">access existing chain</Button>
                        <Button disabled variant="outline-warning text-dark" className="w-100 my-3">load from backup</Button>
                    </Col>
                </Row>
            </Col >
        </Row >
    )
}
