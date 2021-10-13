import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { LandingContext } from '../../Context'

export default function Buttons() {
    const { updateComponent } = useContext(LandingContext)
    return (
        <>
            <Button
                variant="outline-info text-dark"
                className="w-100 my-3"
                onClick={() => updateComponent('createChain')}
            >
                create new chain
            </Button>
            <Button disabled variant="outline-info text-dark" className="w-100 my-3">access existing chain</Button>
            <Button disabled variant="outline-info text-dark" className="w-100 my-3">load from backup</Button>
        </>
    )
}
