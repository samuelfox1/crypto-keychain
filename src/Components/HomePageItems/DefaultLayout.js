import React, { useContext, useEffect } from 'react'
import { AES, enc } from 'crypto-js';
import { Row, Col, Button } from 'react-bootstrap'
import { HomeContext, KeychainContext } from '../../Context'
import { getExistingChains, getUserPassword, setLocalStorage } from '../../Utilty';

export default function DefaultLayout() {
    const { updateHomeComponent } = useContext(HomeContext)
    const { keychainData, setKeychainData } = useContext(KeychainContext)

    const loadRecoveryIfNeeded = () => {
        const recovery = new URLSearchParams(window.location.search).get('recovery')?.split('cryptoKeychain')
        if (!recovery?.length) return
        const recoveryName = recovery[0]

        // + characters show up as spaces
        const recoveryHash = recovery[1].split(' ').join('+')

        const confirmRecovery = window.confirm(`recover keychain ${recoveryName}?`)
        if (!confirmRecovery) return window.location.href = '/'

        let pw
        let decryptedData
        const getPw = () => {
            pw = getUserPassword();
            if (pw === null) return null;
            if (!pw) return getPw();

            try {
                // check if data is recovered, meaning password is valid
                const bytes = AES.decrypt(recoveryHash, pw);
                decryptedData = JSON.parse(bytes.toString(enc.Utf8));

            } catch (error) {
                alert('unauthorized');
                return getPw();
            }
        };

        getPw();

        // eliminate overwriting an existing keychain
        let name = recoveryName
        if (getExistingChains().indexOf(recoveryName) !== -1) name += '-copy'

        setLocalStorage(name, pw, decryptedData)
        window.location.href = '/'

    };

    useEffect(() => {
        loadRecoveryIfNeeded()
    }, [])

    return (
        <Row className="justify-content-center">
            <Col xs={11} md={6} className="shadow border-orange p-3">
                <Row >
                    <Col >
                        <h1>Welcome!</h1>
                        <ul>
                            <li><p>improve your digital security</p></li>
                            <li><p>create new passwords or access keys</p></li>
                            <li><p>add existing passwords or keys</p></li>
                            <li><p>keep them safe in an encrypted keychain</p></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="mx-2">
                        <Button
                            variant="outline-warning text-dark"
                            className="w-100 my-3"
                            onClick={() => updateHomeComponent('createChain')}
                        >
                            create new chain
                        </Button>
                        <Button
                            variant="outline-warning text-dark"
                            className="w-100 my-3"
                            onClick={() => updateHomeComponent('accessExistingChain')}
                        >
                            access existing chain
                        </Button>
                        <Button disabled variant="outline-warning text-dark" className="w-100 my-3">load from backup</Button>
                    </Col>
                </Row>
            </Col >
        </Row >
    )
}
