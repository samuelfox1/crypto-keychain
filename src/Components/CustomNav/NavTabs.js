import React, { useContext, useEffect, useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { AppContext, KeychainContext } from '../../Context';

export default function NavTabs() {

    const [key, setKey] = useState('Home');
    const [keychainTab, setKeychainTab] = useState()
    const { updateAppComponent } = useContext(AppContext)
    const { keychainData } = useContext(KeychainContext)
    // const keyBase = 'cryptoKC';

    const handleUpdateKey = (key) => {
        setKey(key)
        console.log(key)
        updateAppComponent(key)
    }

    useEffect(() => {
        const { name } = keychainData
        if (!name) return setKeychainTab()
        setKeychainTab(<Tab eventKey="Keychain" title={name} />)
        handleUpdateKey('Keychain')

    }, [keychainData])

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(key) => handleUpdateKey(key)}
            className=" justify-content-end"
        >
            <Tab eventKey="Home" title="Home" />
            <Tab eventKey="PasswordGenerator" title="password gen" />
            {keychainTab}
        </Tabs>
    );
}