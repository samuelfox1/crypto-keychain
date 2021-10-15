import React, { useContext, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaTrashAlt } from "react-icons/fa";
import { KeychainContext } from '../../Context';


export default function KeychainItem({ name, value, id }) {

    const [view, setView] = useState(false)

    const { deleteKeychainItem } = useContext(KeychainContext)

    const toggleView = () => {
        setView(!view)
    }

    return (
        <>
            <Row className="m-2 border p-1">
                <Col className="d-flex justify-content-between align-items-center" xs={12}>
                    <FaTrashAlt onClick={() => deleteKeychainItem(id)} />
                    <p>{name}</p>
                    {view
                        ? <FaEyeSlash onClick={toggleView} />
                        : <FaEye onClick={toggleView} />
                    }
                </Col>
                <Col xs={12} className="text-center">

                    {view &&
                        <>
                            <hr className="m-1" />
                            {value}
                        </>
                    }
                </Col>
            </Row>
        </>
    )
}
