import React, { useContext, useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { HomeContext } from '../Context'
// import { getUserPassword } from '../Utilty'

export default function Home() {

    const { HomeComponent } = useContext(HomeContext)

    const [pw, setPw] = useState();

    // useEffect(() => {
    //     setPw(getUserPassword())
    //     console.log(pw)
    // }, [])

    console.log('rendering: Home')

    return (
        <Container className="my-5">
            {HomeComponent}
        </Container >
    )
}
