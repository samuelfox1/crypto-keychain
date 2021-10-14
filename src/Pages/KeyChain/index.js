import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { KeyChainContext } from '../../Context'

export default function KeyChain() {

    const { KeyChainComponent } = useContext(KeyChainContext)

    console.log('rendering: Landing')

    return (
        <Container className="my-5">
            {KeyChainComponent}
        </Container >
    )
}