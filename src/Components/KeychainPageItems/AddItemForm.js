import React, { useContext, useEffect, useState } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { KeychainContext } from '../../Context'
import { createPassword, getUserPassword } from '../../Utilty'
import { getLocalStorage, setLocalStorage } from '../../Utilty/createKeychain'

export default function AddItemForm() {

    const [validInputs, setValidInputs] = useState(false)
    const { keychainData, setKeychainData, updateKeychainComponent } = useContext(KeychainContext)
    const [inputs, setInputs] = useState({
        name: '',
        value: ''
    })

    const clearInputs = () => setInputs({
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

    const handleAddKeychainItem = (e) => {
        e.preventDefault()
        console.log(inputs)
        const { name, items } = keychainData

        const pw = getUserPassword()
        if (pw === null) return
        if (!pw) return handleAddKeychainItem()

        const arr = getLocalStorage(name, pw)
        if (!arr) return handleAddKeychainItem()
        const updatedArr = [inputs, ...arr]
        setLocalStorage(keychainData.name, pw, updatedArr)
        setKeychainData({ ...keychainData, items: updatedArr })
        clearInputs()
        updateKeychainComponent()
    }

    useEffect(() => {
        if (!inputs.name || !inputs.value) return setValidInputs(false)
        if (!validInputs) setValidInputs(true)
    }, [inputs])

    console.log('rendering addItemForm')

    return (
        <Row>
            <Col className="p-0 m-0">
                <hr />
                <h6 className="mb-3">Add item</h6>
                <Form onSubmit={handleAddKeychainItem}>

                    <Form.Group className="mb-3" controlId="keychainItemName">
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

                    <Form.Group className="d-flex justify-content-end mb-3">
                        <Button className="p-0 px-1" variant="outline-warning text-dark" size="sm" onClick={handleSuggestPassword}>
                            suggest password?
                        </Button>
                    </Form.Group>

                    <Form.Group className="d-flex justify-content-end">
                        {validInputs
                            ? <Button
                                type="submit"
                                className="my-3"
                                variant="outline-warning text-dark"
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
