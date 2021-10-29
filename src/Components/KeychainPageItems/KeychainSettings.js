import React, { useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { AppContext, KeychainContext } from '../../Context'
import { deleteKeychain, getLocalStorageDecrypted, getLocalStorageEncrypted, getNewChainName, getUserPassword, setLocalStorage } from '../../Utilty'
import { keyBase } from '../../Utilty/config'

export default function KeychainSettings({ }) {

    const { keychainData, setKeychainData, resetKeychainData } = useContext(KeychainContext)
    const { updateAppComponent } = useContext(AppContext)

    const handleRenameChain = () => {
        // authorize user
        const pw = getUserPassword()
        if (pw === null) return
        if (!pw) return handleRenameChain()

        if (!getLocalStorageDecrypted(keychainData.name, pw)) return handleRenameChain()

        const newName = getNewChainName()
        // if no name is available / user clicked cancel during prompt
        if (!newName) return

        const { name, items } = keychainData
        // save chain with new name
        setLocalStorage(newName, pw, items)
        // destroy old chain
        handleDestroyChain(name, pw, true)
        // update context state
        setKeychainData({ ...keychainData, name: newName })
    }

    const handleBackupChain = () => {
        const pw = getUserPassword()
        if (pw === null) return
        if (!pw) handleBackupChain()

        if (!getLocalStorageDecrypted(keychainData.name, pw)) return handleBackupChain()

        const email = prompt('enter email to send backup')
        // const email = 'samueljasonfox@gmail.com'
        if (email === null) return
        if (!email) return handleBackupChain()
        const { name: keychainName } = keychainData
        const d = new Date()
        const dateString = `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`

        const hash = getLocalStorageEncrypted(keychainName).split('+').join('%2b')

        const body = `backup code:
            %0A%0A%0A
            ${hash}
            %0A%0A%0A
            backup link:
            %0A
            1. copy the url below
            %0A
            2. paste in your browser to recover the keychain
            %0A%0A%0A
            https://samuelfox1.github.io/crypto-keychain?recovery=${keychainName.split(' ').join('_')}cryptoKeychain${hash}
            `
        // window.open(`mailto:${email}?subject=cryptoKeychain_Backup_${keychainName}_${dateString}&body=${getLocalStorageEncrypted(keychainName)}`)
        window.open(`mailto:${email}?subject=cryptoKeychain_Backup_${keychainName}_${dateString}&body=${body}`)
    }

    const handleDestroyChain = (keychainName, pw, force = false) => {
        // authorize user
        const password = pw ? pw : getUserPassword()
        if (password === null) return
        if (!password) handleDestroyChain(keychainName)

        if (!getLocalStorageDecrypted(keychainData.name, password)) return handleDestroyChain(keychainName)

        // confirm delete
        const confirmDelete = force ? true : window.confirm(`Deleting ${keychainName}, are you sure?`)
        if (!confirmDelete) return

        // delete chain
        deleteKeychain(keychainName)
        // reset context state
        resetKeychainData()
        // redirect to landing
        updateAppComponent('Home')
    }

    return (
        <Row className="px-3">
            <Col>
                <Row className="mb-3">
                    <h6 className="px-0">settings</h6>
                </Row>
                <Row>
                    <Button
                        className="mb-3"
                        variant="outline-warning text-dark"
                        onClick={handleRenameChain}
                    >
                        rename
                    </Button>
                    <Button
                        className="mb-3"
                        variant="outline-info text-dark"
                        onClick={handleBackupChain}
                    >
                        backup
                    </Button>
                    <Button
                        className="my-3"
                        size="sm"
                        variant="outline-danger text-dark"
                        onClick={() => handleDestroyChain(keychainData.name)}
                    >
                        destroy
                    </Button>
                </Row>
            </Col>
        </Row>
    )
}
