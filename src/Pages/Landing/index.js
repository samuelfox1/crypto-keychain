import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { LandingContext } from '../../Context'

export default function Landing() {

    const { LandingComponent } = useContext(LandingContext)

    console.log('rendering: Landing')

    return (
        <Container className="my-5">
            {LandingComponent}
        </Container >
    )
}
