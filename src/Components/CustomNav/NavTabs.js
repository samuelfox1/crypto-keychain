import React, { useContext, useEffect, useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { AppContext, KeychainContext } from '../../Context';

export default function NavTabs() {

    const [key, setKey] = useState('landing');
    const [keychainTab, setKeychainTab] = useState()
    const { updateAppComponent } = useContext(AppContext)
    const { keychainData } = useContext(KeychainContext)
    // const keyBase = 'cryptoKC';

    const handleUpdateKey = (key) => {
        setKey(key)
        updateAppComponent(key)
    }

    useEffect(() => {
        const { name } = keychainData
        if (!name) return setKeychainTab()
        setKeychainTab(<Tab eventKey="keychain" title={name} />)
        handleUpdateKey('keychain')

    }, [keychainData])

    // const loopThroughChains = (cb) => {
    //     for (const [key] of Object.entries(localStorage)) {
    //         // format each name by removing the 'keyBase-' text
    //         const k = key.split('-');
    //         if (k[0] !== keyBase) continue
    //         k.shift();
    //         const name = k.join(' ')
    //         cb(name);

    //     };
    // };

    // const displaySavedChains = () => {
    //     const cb = (name) => {
    //         setKeychainTab((tabs) => [
    //             ...tabs,
    //             <Tab eventKey={name} title={name} key={name} >
    //                 {/* <h1 className="d-block">{name}</h1> */}
    //             </Tab>
    //         ])
    //     };

    //     loopThroughChains(cb);
    // };

    // useEffect(() => {
    //     const testKeys = ['one', 'two']
    //     testKeys.map(key => localStorage.setItem(`${keyBase}-${key}`, `data-${key}`))
    //     // displaySavedChains();
    // }, [])

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(key) => handleUpdateKey(key)}
            className=" justify-content-end"
        >
            <Tab eventKey="landing" title="Home" />
            <Tab eventKey="DefaultLayout" title="password gen" />
            {keychainTab}
        </Tabs>
    );
}