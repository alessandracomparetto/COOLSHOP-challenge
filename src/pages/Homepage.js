import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Col from 'react-bootstrap/esm/Col';
import { FcWorkflow } from "react-icons/fc";
import { FaRegSmileBeam } from "react-icons/fa";
import Calculator from '../components/Calculator/Calculator';
import '../assets/css/homepage.css'

export default function Homepage() {

    return (
        <Col xl={{ span: 6, offset: 3 }} xs={{ span: 10, offset: 1 }}>
            <Card border="dark" className='mx-auto mt-5 card-shadow'>
                <Card.Body className='px-4 pb-5'>
                    <Card.Title className='mt-4'>
                        <h1 className='text-center'>
                            <FcWorkflow className='mb-1' />
                            COOLSHOP React challenge
                        </h1>
                    </Card.Title>
                    <Container className='p-4 text-muted'>
                        <p>
                            Welcome to our <strong>sleek</strong> and <strong>user-friendly calculator!</strong> <br />
                            You can easily <strong>add</strong> and <strong>remove</strong> rows as needed. Each number can be
                            either <strong>added</strong> or <strong>subtracted</strong> and you have the flexibility
                            to enable or <strong>disable</strong> each row individually. <br />
                            The <strong>result updates in real-time</strong> as you enter your values, providing immediate feedback. <br />
                        </p>
                        <p>What are you waiting for? <strong>Give it a try!</strong></p>
                    </Container>
                    <Calculator />
                </Card.Body>
                <Card.Footer className='text-end small text-muted'>
                    Created by: Alessandra Comparetto
                    <FaRegSmileBeam className='ms-2 mb-1' />
                </Card.Footer>
            </Card>
            <br />
        </Col>
    )
}