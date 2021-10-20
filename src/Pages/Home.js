import React, { useContext, useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import { HomeContext } from '../Context'
// import { getUserPassword } from '../Utilty'

export default function Home() {

    const { HomeComponent } = useContext(HomeContext)

    console.log('rendering: Home')

    return (
        <Container className="my-5">
            {HomeComponent}
            <Row className="mt-5">
                <h2 className="text-center">new features coming soon</h2>
                <h6 className="text-center">(checkout the password generator!)</h6>
            </Row>
        </Container >
    )
}
