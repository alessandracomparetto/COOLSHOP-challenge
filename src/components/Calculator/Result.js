import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form';
import { FaEquals } from "react-icons/fa";
import '../../assets/css/result.css'

export default function Result({ result }) {

    return (
        <Row >
            <Col xs={{ span: 2, offset: 1 }} className='d-flex justify-content-end'>
                <Button
                    className="rounded-circle m-1 result-button"
                    size="sm"
                    aria-label="Result"
                    disabled
                >
                    <FaEquals className='mb-1' />

                </Button>
            </Col>
            <Col xs={5}>
                <Form.Control
                    type="number"
                    value={result}
                    className='text-end'
                    placeholder='Result will be shown here'
                    readOnly
                />
            </Col>
            <Col xs={2}>
            </Col>
        </Row>
    )
}