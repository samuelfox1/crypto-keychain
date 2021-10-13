import React, { useContext, useEffect, useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { PageContext } from '../../Context/PageContext';

export default function NavTabs() {

    const [key, setKey] = useState('home');
    const [dynamicTabs, setDynamicTabs] = useState([])
    const { updatePage } = useContext(PageContext)
    const keyBase = 'cryptoKC';

    const handleUpdateKey = (key) => {
        setKey(key)
        updatePage(key)
    }

    const loopThroughChains = (cb) => {
        for (const [key] of Object.entries(localStorage)) {
            // format each name by removing the 'keyBase-' text
            const k = key.split('-');
            if (k[0] !== keyBase) continue
            k.shift();
            const name = k.join(' ')
            cb(name);

        };
    };

    const displaySavedChains = () => {
        const cb = (name) => {
            setDynamicTabs((tabs) => [
                ...tabs,
                <Tab eventKey={name} title={name} key={name} >
                    {/* <h1 className="d-block">{name}</h1> */}
                </Tab>
            ])
        };

        loopThroughChains(cb);
    };

    useEffect(() => {
        const testKeys = ['one', 'two']
        testKeys.map(key => localStorage.setItem(`${keyBase}-${key}`, `data-${key}`))
        // displaySavedChains();
    }, [])

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(key) => handleUpdateKey(key)}
            className=" justify-content-end"
        >
            <Tab eventKey="home" title="Home" />
            <Tab eventKey="passwordGenerator" title="password gen" />
            {dynamicTabs}
        </Tabs>
    );
}