import React, { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { AppContext, KeychainContext } from '../../Context'
import { deleteKeychain, getNewChainName, getUserPassword, setLocalStorage } from '../../Utilty'

export default function KeychainSettings({ }) {

    const { keychainData, setKeychainData, resetKeychainData } = useContext(KeychainContext)
    const { updateAppComponent } = useContext(AppContext)

    const handleRenameChain = () => {
        // authorize user
        const pw = getUserPassword()
        if (pw === null) return
        if (!pw) handleRenameChain()

        const { name, items } = keychainData

        const newName = getNewChainName()
        // if no name is available / user clicked cancel during prompt
        if (!newName) return
        console.log(newName)

        // save chain with new name
        setLocalStorage(newName, pw, items)
        // destroy old chain
        handleDestroyChain(name, pw)
        // update context state
        setKeychainData({ ...keychainData, name: newName })
    }

    const handleDestroyChain = (keychainName, pw) => {
        // authorize user
        const password = pw ? pw : getUserPassword()
        if (password === null) return
        if (!password) handleDestroyChain(keychainName)

        // confirm delete
        const confirmDelete = window.confirm(`Deleting ${keychainName}, are you sure?`)
        if (confirmDelete) deleteKeychain(keychainName)

        // reset context state
        resetKeychainData()
        // redirect to landing
        updateAppComponent('Home')
    }

    return (
        <Row className="py-3 border">
            <Col
                className=" col-6 d-flex">

                <h6>settings</h6>
            </Col>
            <Col className=" col-6 text-end">
                <Button
                    className="mb-3"
                    variant="outline-warning text-dark"
                    onClick={handleRenameChain}
                >
                    rename
                </Button>
                <Button
                    className=""
                    variant="outline-danger text-dark"
                    onClick={() => handleDestroyChain(keychainData.name)}
                >
                    destroy
                </Button>
            </Col>
        </Row>
    )
}
