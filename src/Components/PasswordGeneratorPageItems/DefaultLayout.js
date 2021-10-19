import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap'
import { createPassword } from '../../Utilty'

export default function DefaultLayout() {

    const [textAreaRows, setTextAreaRows] = useState(3)
    const [pwLength, setPwLength] = useState({
        min: 8,
        max: 128,
        value: 68
    })
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
    const btnOptions = {

        defaultBtn: () => (
            < Button
                variant="outline-info text-dark"
                className="w-100 my-3"
                disabled
            >
                generate
            </Button >
        )
        ,
        activeBtn: () => (
            < Button
                variant="outline-info text-dark"
                className="w-100 my-3"
                onClick={handleGeneratePassword}
            >
                generate
            </Button >
        )
        ,
        loadingBtn: () => (
            <Button
                variant="outline-info text-dark"
                className="w-100 my-3"
                disabled
            >
                <Spinner className="mx-1" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                <Spinner className="mx-1" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
                <Spinner className="mx-1" as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
            </Button>
        )

    }

    const [displayedButton, setDisplayedButton] = useState(btnOptions.defaultBtn())
    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target
        setPwText('')
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
        setPwText('')
        setPwLength({ ...pwLength, value })
        /* on a mobile device, the textarea needs to be:
            - minimum 1 row tall
            - 7 rows tall if 128 is selected
            128/7 ≈ 18
        */
        const calculatedRows = Math.floor(value / 18)
        setTextAreaRows(calculatedRows || 1)
    }

    const handleGeneratePassword = () => {

        const config = {
            values: selectedValues,
            length: pwLength.value
        };

        setDisplayedButton(btnOptions.loadingBtn())

        let interval = setInterval(() => setPwText(createPassword(config)), 100)

        setTimeout(() => {
            clearInterval(interval)
            setDisplayedButton(btnOptions.activeBtn())
        }, 2000)
    }

    useEffect(() => {
        const checkedBoxes = []
        for (const [_, box] of Object.entries(checkBox)) {
            box.checked && checkedBoxes.push(box.id);
        };
        setSelectedValues(checkedBoxes)
    }, [checkBox])

    useEffect(() => {
        if (selectedValues.length) setDisplayedButton(btnOptions.activeBtn())
        else setDisplayedButton(btnOptions.defaultBtn())

    }, [selectedValues])

    console.log('rendering: DefaultLayout')

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col xs={11} md={4} >
                    <h2>Password Generator</h2>
                    <ol>
                        <li><p>select characters</p></li>
                        <li><p>select length</p></li>
                        <li><p>click generate</p></li>
                    </ol>

                </Col>
            </Row>
            <Row className="justify-content-center" >
                <Col xs={10} md={4} className="border-orange">
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
                                value={pwText}
                                // disabled
                                style={{ resize: "none" }}
                            />
                        </Form.Group>

                        {displayedButton}

                    </Form>
                </Col>
            </Row>
        </Container >
    )
}
