import React, { useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { createPassword } from '../../Utilty'

export default function AddItemForm() {

    const [validInputs, setValidInputs] = useState(false)
    const [inputs, setInputs] = useState({
        name: '',
        value: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const handleSuggestPassword = () => {
        setInputs({ ...inputs, value: createPassword() })
    }

    const handleAddKeychainItem = () => {
        console.log(inputs)
    }

    useEffect(() => {
        if (!inputs.name || !inputs.value) return setValidInputs(false)
        if (!validInputs) setValidInputs(true)
    }, [inputs])

    return (
        <Row>
            <Col className="p-0 m-0">
                <Form>
                    <Form.Group className="mb-3" controlId="keychainItemName">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" name='name' value={inputs.name} onChange={handleInputChange} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="keychainItemValue">
                        <Form.Label>value</Form.Label>
                        <Form.Control
                            className="text-center"
                            as="textarea"
                            rows={8}
                            name='value'
                            size="sm"
                            value={inputs.value}
                            style={{ resize: "none" }}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-center mb-3">
                        <Button className="p-0 px-1" variant="outline-warning text-dark" size="sm" onClick={handleSuggestPassword}>
                            suggest password?
                        </Button>
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-end">
                        {validInputs
                            ? <Button
                                className="my-3"
                                variant="outline-warning text-dark"
                                onClick={(inputs) => handleAddKeychainItem(inputs)}
                            >
                                add item
                            </Button>
                            : <Button disabled className="my-3" variant="outline-warning text-dark" >add item</Button>
                        }
                    </Form.Group>
                </Form>

            </Col>
        </Row>
    )
}
