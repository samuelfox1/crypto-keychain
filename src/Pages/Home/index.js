import React, { useContext } from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import { PageContext } from '../../Context/PageContext'

export default function Home() {

    const { setPage } = useContext(PageContext)
    console.log('rendering: Home')
    return (
        <Container className="my-5 border">
            <Row className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active text-center" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <p>Welcome</p>
                    <p>to your personal lock-box</p>
                    <p>securely create and store</p>
                    <p>passwords and private text</p>
                </div>
            </Row>
            <Row>
                <Container className="d-flex justify-content-center border">
                    <Button>Testing</Button>
                </Container>
            </Row>
        </Container>
    )
}
