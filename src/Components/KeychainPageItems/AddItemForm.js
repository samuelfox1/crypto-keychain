import React from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'

export default function AddItemForm() {
    return (
        <Row>
            <Col>
                <Form>
                    <Form.Group className="mb-3" controlId="keychainItemName">
                        <Form.Label>name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="keychainItemValue">
                        <Form.Label>value</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="d-flex justify-content-end">
                        <Button
                            className="my-3"
                            variant="outline-warning text-dark"
                            onClick={() => console.log('submit')}
                        >
                            add item
                        </Button>
                    </Form.Group>
                </Form>

            </Col>
        </Row>
    )
}
