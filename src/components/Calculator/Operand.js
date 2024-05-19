import React, { useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { PiPlusMinusBold } from "react-icons/pi";
import { FaRegCircle, FaRegDotCircle, FaRegTrashAlt } from "react-icons/fa";

export default function Operand({ operand, index, updateOperand, removeOperand, shouldTakeFocus }) {

    const lastOperand = useRef(null);

    useEffect(() => {
        if (lastOperand.current && shouldTakeFocus)
            lastOperand.current.focus()
    }, [shouldTakeFocus])

    function handleValueChage(event) {
        updateOperand(index, { value: parseFloat(event.target.value) || "" })
    }

    function changeSign() {
        updateOperand(index, { value: operand.value * -1 })
    }

    function toggleDisabled() {
        updateOperand(index, { disabled: !operand.disabled })
    }

    function deleteOperand() {
        removeOperand(index)
    }

    return (
        <Row>
            <Col xs={{ span: 2, offset: 1 }} className='d-flex justify-content-end'>
                <Button
                    variant="dark"
                    className="rounded-circle m-1"
                    size="sm"
                    onClick={changeSign}
                    disabled={operand.disabled}
                    aria-label="Change sign"
                >
                    <PiPlusMinusBold />
                </Button>
            </Col>
            <Col xs={5}>
                <Form.Control
                    type="number"
                    value={operand.value}
                    onChange={handleValueChage}
                    className='text-end'
                    disabled={operand.disabled}
                    placeholder='Please, enter a number'
                    ref={lastOperand}
                />
            </Col>
            <Col xs={2}>
                <ButtonGroup>
                    <Button
                        aria-label="Disable"
                        variant="secondary"
                        onClick={toggleDisabled}>
                        {operand.disabled ?
                            <FaRegCircle /> :
                            <FaRegDotCircle />
                        }
                    </Button>
                    <Button
                        aria-label="Delete"
                        variant="danger"
                        onClick={deleteOperand}>
                        <FaRegTrashAlt />
                    </Button>
                </ButtonGroup>
            </Col>
        </Row>
    )
}