import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { generatePassword } from '../../Utilty/GeneratePassword'

export default function PasswordGenerator() {

    const rangeDefault = 8
    const [pwLength, setPwLength] = useState({
        min: 8,
        max: 128,
        value: rangeDefault
    })
    const [textAreaRows, setTextAreaRows] = useState(1)
    const [pwText, setPwText] = useState('')
    const [selectedValues, setSelectedValues] = useState([])
    const [checkBox, setCheckBox] = useState({
        number: {
            id: 'number',
            type: 'checkbox',
            label: 'numbers',
            checked: true
        },
        special: {
            id: 'special',
            type: 'checkbox',
            label: 'special characters',
            checked: true
        },
        lowercase: {
            id: 'lowercase',
            type: 'checkbox',
            label: 'letters - lowercase',
            checked: true
        },
        uppercase: {
            id: 'uppercase',
            type: 'checkbox',
            label: 'letters - uppercase',
            checked: true
        }
    })

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target
        setCheckBox({
            ...checkBox,
            [id]: {
                ...checkBox[id],
                checked
            }
        })
    }

    const handleRangeChange = (e) => {
        const { value } = e.target
        setPwLength({ ...pwLength, value })
        /* on a mobile device, the textarea needs to be:
            - minimum 1 row tall
            - 6 rows tall if 128 is selected
            128/6 ≈ 21
        */
        const calculatedRows = Math.floor(value / 21)
        setTextAreaRows(calculatedRows || 1)

    }

    const handleGeneratePassword = () => {
        const config = {
            values: selectedValues,
            length: pwLength.value
        };
        setPwText(generatePassword(config))
    }

    useEffect(() => {
        const checkedBoxes = []
        for (const [_, box] of Object.entries(checkBox)) {
            box.checked && checkedBoxes.push(box.id);
        };
        setSelectedValues(checkedBoxes)
    }, [checkBox])


    console.log('rendering: passwordGenerator')

    return (
        <Container className="my-5">
            <Row className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active text-center" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <h1>Welcome!</h1>
                    {/* <p>to your personal lock-box</p> */}
                    <br />
                    <p>securely create and store</p>
                    <p>passwords and private text</p>
                </div>
            </Row>
            <Row className="justify-content-center" >
                <Col xs={11} md={6} className="border-orange mt-5">
                    <Form className='mb-3'>
                        <Form.Group className="my-3" controlId="exampleForm.ControlInput1">
                            {Array.from(Object.entries(checkBox)).map((key) => {
                                const { id, type, label, checked } = key[1]
                                return < Form.Check
                                    className="mb-1"
                                    key={id}
                                    type={type}
                                    id={id}
                                    label={label}
                                    checked={checked}
                                    onChange={handleCheckboxChange}
                                />
                            })}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>length: {pwLength.value}</Form.Label>
                            <Form.Range
                                min={pwLength.min}
                                max={pwLength.max}
                                value={pwLength.value}
                                onChange={handleRangeChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control
                                className="text-center"
                                as="textarea"
                                rows={textAreaRows}
                                size="sm"
                                placeholder={pwText}
                                disabled
                                style={{ resize: "none" }}
                            />
                        </Form.Group>
                        <Button
                            variant="outline-info text-dark"
                            className="w-100 my-3"
                            onClick={handleGeneratePassword}
                        >
                            generate password
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}