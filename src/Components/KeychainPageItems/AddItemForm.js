import React, { useContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { KeychainContext } from '../../Context'
import { createPassword, getUserPassword } from '../../Utilty'
import { getLocalStorage, setLocalStorage } from '../../Utilty'

export default function AddItemForm() {

    const [validInputs, setValidInputs] = useState(false)
    const { keychainData, setKeychainData, updateKeychainComponent } = useContext(KeychainContext)
    const [inputs, setInputs] = useState({
        name: '',
        value: '',
        id: uuid()
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    const handleSuggestPassword = () => {
        setInputs({ ...inputs, value: createPassword() })
    }

    const handleAddKeychainItem = (e) => {
        if (!e) return
        e.preventDefault()
        console.log(inputs)
        const { name } = keychainData
        console.log('here', name)

        const pw = getUserPassword()
        if (pw === null) return
        if (!pw) return handleAddKeychainItem()

        const arr = getLocalStorage(name, pw)
        console.log('here', arr)
        if (!arr) return handleAddKeychainItem()
        const updatedArr = [inputs, ...arr]
        setLocalStorage(keychainData.name, pw, updatedArr)
        setKeychainData({ ...keychainData, items: updatedArr })
        setInputs({ name: '', value: '' })
        updateKeychainComponent()
    }

    useEffect(() => {
        if (!inputs.name || !inputs.value) return setValidInputs(false)
        if (!validInputs) setValidInputs(true)
    }, [inputs])

    console.log('rendering addItemForm')

    return (
        <Row className="border shadow flex-column m-0 mb-3">
            <Col className="p-3">
                <h3 className="mb-1">Add item</h3>
                <Form onSubmit={handleAddKeychainItem}>

                    <Form.Group className="mb-1" controlId="keychainItemName">
                        <Form.Label className="mb-0">name</Form.Label>
                        <Form.Control type="text" name='name' value={inputs.name} onChange={handleInputChange} />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="keychainItemValue">
                        <Form.Label className="mb-0">value</Form.Label>
                        <Form.Control
                            className="text-center"
                            as="textarea"
                            rows={6}
                            name='value'
                            size="sm"
                            value={inputs.value}
                            style={{ resize: "none" }}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="d-flex justify-content-end">
                        <Button className="p-0 px-1" variant="outline-warning text-dark" size="sm" onClick={handleSuggestPassword}>
                            suggest password?
                        </Button>
                    </Form.Group>

                    <hr />
                    <Form.Group className="d-flex justify-content-end pb-3">
                        {validInputs
                            ? <Button
                                type="submit"
                                variant="outline-warning text-dark"
                            >
                                add item
                            </Button>
                            : <Button disabled variant="outline-warning text-dark" >add item</Button>
                        }
                    </Form.Group>

                </Form>
            </Col>
        </Row>
    )
}
