import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { KeychainContext } from '../../Context'

export default function Keychain() {

    const { KeychainComponent } = useContext(KeychainContext)

    console.log('rendering: Landing')

    return (
        <Container className="my-5">
            {KeychainComponent}
        </Container >
    )
}