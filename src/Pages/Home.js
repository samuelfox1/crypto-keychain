import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { HomeContext } from '../Context'
// import { getUserPassword } from '../Utilty'

export default function Home() {

    const { HomeComponent } = useContext(HomeContext)

    console.log('rendering: Home')

    return (
        <Container className="my-5">
            {HomeComponent}
            {/* <Row className="mt-2 text-center">
                <h4> new features coming soon</h4>
                <h6><small>~ checkout the password generator!</small></h6>
            </Row> */}
        </Container >
    )
}
