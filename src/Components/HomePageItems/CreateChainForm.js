import React, { useContext, useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { AppContext, HomeContext, KeychainContext } from '../../Context'
import { getExistingChains, setLocalStorage } from '../../Utilty'

export default function CreateChain() {

    const [existingChains] = useState(getExistingChains())
    const { updateAppComponent } = useContext(AppContext)
    const { setKeychainData } = useContext(KeychainContext)
    const { updateHomeComponent } = useContext(HomeContext)
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        pwlength: '',
        pwmatch: ''
    })

    const [formInputs, setFormInputs] = useState({
        name: '',
        password: '',
        confirmPassword: ''
    })

    const [validFormInputs, setValidFormInputs] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormInputs({ ...formInputs, [name]: value })
    }

    const handleCreateChain = () => {
        const { name, password } = formInputs
        setKeychainData({ name, items: [] })
        setLocalStorage(name, password, [])

        updateAppComponent('keychain')
    }

    useEffect(() => {
        const { name, password, confirmPassword } = formInputs
        if (!password || !confirmPassword) return

        if (!name) {
            // no name entered
            setErrorMessage({ name: 'please enter a name', pwlength: '', pwmatch: '' })
            setValidFormInputs(false)
            return
        }
        if (existingChains.indexOf(name) !== -1) {
            // name is not unique
            setErrorMessage({ name: 'please enter a unique name', pwlength: '', pwmatch: '' })
            setValidFormInputs(false)
            return
        }

        if (password.length < 8) {
            setErrorMessage({ ...errorMessage, name: '', pwlength: 'must be atleast 8 characters long', pwmatch: '' })
            setValidFormInputs(false)
            return
        }
        if (password !== confirmPassword) {
            // passwords do not match
            setErrorMessage({ name: '', pwlength: '', pwmatch: 'passwords must match' })
            setValidFormInputs(false)
            return
        }
        setErrorMessage({ name: '', pwlength: '', pwmatch: '' })
        setValidFormInputs(true)

    }, [formInputs])

    return (
        <Row className="justify-content-center">
            <Col xs={11} md={6} className="border-orange shadow p-4">
                <Row >
                    <Col  >
                        <h1>Add new chain</h1>
                        <ol>
                            <li><p >enter a name</p></li>
                            <li><p >enter a password</p></li>
                            <li><p>click create</p></li>
                        </ol>
                    </Col>
                </Row>
                <Row>
                    <Col className="border px-0 mx-2">
                        <Form className="mt-3 mx-3">

                            <Form.Group className="mb-3" controlId="keychainName">
                                <Form.Label>keychain name: </Form.Label>
                                <p className="error mb-0">{errorMessage.name}</p>
                                <Form.Control
                                    size="sm"
                                    type="input"
                                    name="name"
                                    value={formInputs.name}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="keychainPassword">
                                <Form.Label>password: </Form.Label>
                                <p className="error mb-0">{errorMessage.pwlength}</p>
                                <Form.Control
                                    size="sm"
                                    type="password"
                                    name="password"
                                    value={formInputs.password}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="kychainConfirmPassword">
                                <Form.Label>confirm password: </Form.Label>
                                <p className="error mb-0">{errorMessage.pwmatch}</p>
                                <Form.Control
                                    size="sm"
                                    type="password"
                                    name="confirmPassword"
                                    value={formInputs.confirmPassword}
                                    onChange={(handleInputChange)}
                                />
                            </Form.Group>

                            <Form.Group className="d-flex justify-content-between">
                                <Button
                                    variant="outline-dark"
                                    className="my-3"
                                    onClick={() => updateHomeComponent('DefaultLayout')}
                                >
                                    back
                                </Button>

                                {validFormInputs
                                    ? <Button
                                        variant="outline-warning text-dark"
                                        className="my-3"
                                        onClick={handleCreateChain}
                                    >
                                        create
                                    </Button>
                                    : <Button
                                        disabled
                                        variant="outline-warning text-dark"
                                        className="my-3"
                                    >
                                        create
                                    </Button>
                                }
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}
