import React, { useContext, useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { LandingContext } from '../../Context'

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

    console.log('rendering: CreateChain')

    return (
        <>
            <Row className="justify-content-center">
                <Col xs={10} md={4} >
                    <h1>Create new chain</h1>
                    <ol>
                        <li><p >enter a name</p></li>
                        <li><p >enter a password</p></li>
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
                                variant="outline-dark"
                                className="my-3"
                                onClick={() => updateLandingComponent('defaultButtons')}
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
            <h2 className="text-center">new features coming soon</h2>
            <h6 className="text-center">(checkout the password generator!)</h6>
        </>
    )
}
