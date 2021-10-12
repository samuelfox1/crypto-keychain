import React, { useContext, useEffect, useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import { PageContext } from '../../Context/PageContext';

export default function NavTabs() {

    const [key, setKey] = useState('home');
    const [dynamicTabs, setDynamicTabs] = useState([])
    const { updatePage } = useContext(PageContext)
    const keyBase = 'cryptoKC';

    useEffect(() => {
        updatePage(key)
    }, [key])

    const loopThroughChains = (cb) => {
        for (const [key] of Object.entries(localStorage)) {
            // format each name by removing the 'keyBase-' text
            const k = key.split('-');
            if (k[0] === keyBase) {
                k.shift();
                cb(k, key,);
            };
        };
    };

    const displaySavedChains = () => {
        const cb = (k, key) => {
            setDynamicTabs((tabs) => [
                ...tabs,
                <Tab eventKey={k[0]} title={k[0]} key={k[0]} >
                    {/* <h1 className="d-block">{k[0]}</h1> */}
                </Tab>
            ])
        };
        loopThroughChains(cb);
    };

    useEffect(() => {
        const testKeys = ['one', 'two']
        testKeys.map(key => localStorage.setItem(`${keyBase}-${key}`, `data-${key}`))
        displaySavedChains();
    }, [])

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="col-xs-12 col-sm-9 justify-content-end"
        >
            <Tab eventKey="home" title="Home" />
            <Tab eventKey="passwordGenerator" title="password gen" />
            {/* {dynamicTabs} */}
        </Tabs>
    );
}