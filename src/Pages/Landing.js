import React, { useContext, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { LandingContext } from '../Context'
// import { getUserPassword } from '../Utilty'

export default function Landing() {

    const { LandingComponent } = useContext(LandingContext)

    const [pw, setPw] = useState();

    // useEffect(() => {
    //     setPw(getUserPassword())
    //     console.log(pw)
    // }, [])

    console.log('rendering: Landing')

    return (
        <Container className="my-5">
            {LandingComponent}
        </Container >
    )
}
