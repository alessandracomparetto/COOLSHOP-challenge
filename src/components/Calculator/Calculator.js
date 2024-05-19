import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container'
import { FaPlus } from "react-icons/fa";
import Operand from './Operand';
import Result from "./Result"
import "../../assets/css/calculator.css"


export default function Calculator() {

    const [operands, setOperands] = useState([{ disabled: false, value: "" }])
    const [result, setResult] = useState("") //its value will be number 

    function addOperand() {
        var newOperand = {
            disabled: false,
            value: ""
        }
        setOperands(operands => [...operands, newOperand])
    }

    function updateOperand(index, updatatedOperand) {
        var newOperands = operands.map((operand, i) => {
            if (i === index) return { ...operand, ...updatatedOperand }
            else return operand
        })
        setOperands(newOperands)
    }

    function removeOperand(index) {
        const newOperands = operands.filter((_, i) => i !== index)
        if (newOperands.length === 0) setResult("")
        setOperands(newOperands)
    }

    //used to compute the result
    useEffect(() => {
        var r = 0
        var isEmpty = true
        operands.forEach(operand => {
            if (!operand.disabled && operand.value) {
                r += operand.value
                isEmpty = false
            }
        })
        setResult(isEmpty ? "" : r)
    }, [operands])


    return (
        <>
            <Button variant="dark" onClick={addOperand}>
                Add row
                <FaPlus className='mb-1 ms-2' />
            </Button>
            <ListGroup className='mt-4 border-0'>
                {operands && operands.map((operand, index) => (
                    <ListGroup.Item
                        key={index}
                        variant={operand.disabled ? "light" : ""}
                        className="border-0">
                        <Operand
                            operand={operand}
                            index={index}
                            updateOperand={updateOperand}
                            removeOperand={removeOperand}
                            shouldTakeFocus={index === operands.length - 1}
                        />
                    </ListGroup.Item>
                ))}
            </ListGroup>
            {operands && operands.length > 0 &&
                <>
                    <hr className="divisor" />
                    <Container>
                        <Result
                            result={result}
                        />
                    </Container>
                </>
            }
        </>
    )
}