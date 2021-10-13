import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { AppContext } from '../../Context'

export default function Buttons() {
    const { updateContent } = useContext(AppContext)
    return (
        <>
            <Button
                variant="outline-info text-dark"
                className="w-100 my-3"
                onClick={() => updateContent('createChain')}
            >
                create new chain
            </Button>
            <Button disabled variant="outline-info text-dark" className="w-100 my-3">access existing chain</Button>
            <Button disabled variant="outline-info text-dark" className="w-100 my-3">load from backup</Button>
        </>
    )
}
