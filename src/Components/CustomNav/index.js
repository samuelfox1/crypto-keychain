import React from 'react'
import NavTabs from '../NavTabs'


export default function CustomNav() {
    return (
        <nav className="w-100 d-flex justify-content-between align-items-end mb-5">
            <h1 id="title" className="col-xs-12 col-sm-3 my-2 fs-6">crypto <span className="fs-1">
                <span className="text-decoration-underline">key</span>chain</span>
            </h1>
            <NavTabs />
        </nav>
    )
}
