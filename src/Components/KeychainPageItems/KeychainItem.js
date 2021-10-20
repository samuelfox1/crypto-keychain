import React, { useContext, useState } from 'react'
import { Col, Row, Form } from 'react-bootstrap';
import { FaEye, FaEyeSlash, FaTrashAlt, FaCopy } from "react-icons/fa";
import { KeychainContext } from '../../Context';
import { copyToClipboard } from '../../Utilty';


export default function KeychainItem({ name, value, id }) {

    const [viewKeychainItem, setViewKeychainItem] = useState(false)
    const [displayCopiedMessage, setDisplayCopiedMessage] = useState(false)

    const { deleteKeychainItem } = useContext(KeychainContext)

    const handleViewKeychainItemValue = () => {
        viewKeychainItem && setDisplayCopiedMessage(false)
        setViewKeychainItem(!viewKeychainItem)
    }

    const handleCopyToClipboard = () => {
        if (displayCopiedMessage) return

        copyToClipboard(value)
        setDisplayCopiedMessage(true)
    }


    return (
        <Row className="border shadow-sm flex-column m-0 mb-3">
            <Col className="d-flex justify-content-between align-items-center py-1">
                <FaTrashAlt onClick={() => deleteKeychainItem(id)} />
                <p>{name}</p>
                {viewKeychainItem
                    ? <FaEyeSlash onClick={handleViewKeychainItemValue} />
                    : <FaEye onClick={handleViewKeychainItemValue} />
                }
            </Col>
            <Col className="text-center p-0">

                {viewKeychainItem &&
                    <Form>
                        <Form.Group className="mx-2 mb-3" controlId="keychainItemValue">
                            <Form.Control
                                className="text-center"
                                as="textarea"
                                rows={6}
                                name='value'
                                size="sm"
                                value={value}
                                disabled
                                style={{ resize: "none" }}
                            />
                        </Form.Group>
                        <Form.Group className="d-flex justify-content-end m-0">
                            <FaCopy
                                className="m-2"
                                onClick={handleCopyToClipboard}
                            />
                        </Form.Group>
                    </Form>
                }
            </Col>
        </Row>
    )
}
