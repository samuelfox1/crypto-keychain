import React, { useContext, useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { LandingContext } from '../../../Context'

export default function CreateChain() {

    const { updateLandingComponent } = useContext(LandingContext)
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
        console.log('clicked')
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

        if (password.length < 8) {
            console.log(0)
            setErrorMessage({ ...errorMessage, name: '', pwlength: 'must be atleast 8 characters long', pwmatch: '' })
            setValidFormInputs(false)
            return
        }
        if (password !== confirmPassword) {
            // passwords do not match
            console.log(1)
            setErrorMessage({ name: '', pwlength: '', pwmatch: 'passwords must match' })
            setValidFormInputs(false)
            return
        }
        console.log(2)
        setErrorMessage({ name: '', pwlength: '', pwmatch: '' })
        setValidFormInputs(true)

    }, [formInputs])

    console.log('rendering: CreateChain')

    return (
        <>
            <Row className="justify-content-center">
                <Col xs={10} md={4} >
                    <h2>Create new Chain</h2>
                    <ol>
                        <li><p>enter a name</p></li>
                        <li><p className="mb-0">enter a password</p>
                            <p className="mt-0"> <small>(to access your keychain)</small></p>
                        </li>
                        <li><p>confirm password</p></li>
                        <li><p>click create</p></li>
                    </ol>
                </Col>
            </Row>
            <Row className="justify-content-center mb-5" >
                <Col xs={10} md={4} className="border-orange">
                    <Form className="mt-3">

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>keychain name:</Form.Label>
                            <p className="error mb-0">{errorMessage.name}</p>
                            <Form.Control
                                size="sm"
                                type="input"
                                name="name"
                                value={formInputs.name}
                                placeholder="social-media"
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>password:</Form.Label>
                            <p className="error mb-0">{errorMessage.pwlength}</p>
                            <Form.Control
                                size="sm"
                                type="password"
                                name="password"
                                value={formInputs.password}
                                onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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
                                variant="outline-info text-dark"
                                className="my-3"
                                onClick={() => updateLandingComponent('buttons')}
                            >
                                reset
                            </Button>

                            {validFormInputs
                                ? <Button
                                    variant="outline-info text-dark"
                                    className="my-3"
                                    onClick={handleCreateChain}
                                >
                                    create
                                </Button>
                                : <Button
                                    disabled
                                    variant="outline-info text-dark"
                                    className="my-3"
                                >
                                    create
                                </Button>
                            }
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <h2 className="text-center">new features coming soon</h2>
            <h6 className="text-center">(checkout the password generator!)</h6>
        </>
    )
}
