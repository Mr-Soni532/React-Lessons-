import React, { useState } from 'react'
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Signup = ({showAlert}) => {
    console.log('signup ' + showAlert)
    const navigate = useNavigate();
    const [validated, setValidated] = useState(false);
    const [credentials, setCredentials] = useState({
        name: '',
        email: '',
        password: '',
        cPassword: ''

    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
           
            e.stopPropagation(); // For preventing form to submit if not valid
        }
        setValidated(true);

        // Api call
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyODM3Y2ExMTRkNjIxMTBkMzkwZGFjIn0sImlhdCI6MTY0NjgyNjc4NX0.7NlhT5cy1laTw3PfHH0mWeGo5zfk14oEDYiYIZ0NX5Y'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        // Save the auth token and redirect
        if (json.success) {
            localStorage.setItem('token', json.authToken)
            navigate('/')
            showAlert('Account Created Successfully', 'success')
        } else {  showAlert('Input valid details', 'warning') }
    };


    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <Container style={{ maxWidth: '1140px' }}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            onChange={onchange}
                            placeholder="Enter Name"
                            name='name'
                            defaultValue=""
                        />
                        <Form.Control.Feedback type="invalid">
                            Enter a valid Name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='12' controlId="exampleForm.ControlInput1" className="mt-3">
                        <Form.Label>Email address</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="email"
                                onChange={onchange}
                                placeholder="Enter email address"
                                aria-describedby="inputGroupPrepend"
                                name='email'
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Enter a valid Email address.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId="exampleForm.ControlInput1" className="mt-3">
                        <Form.Label>Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="password"
                                onChange={onchange}
                                placeholder="Choose 8 digit password"
                                aria-describedby="inputGroupPrepend"
                                name='password'
                                minLength={8}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Enter a valid password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId="exampleForm.ControlInput1" className="mt-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                                type="password"
                                onChange={onchange}
                                placeholder="Choose 8 digit password"
                                aria-describedby="inputGroupPrepend"
                                name='cPassword'
                                minLength={8}
                                required
                            />
                            <Form.Control.Feedback type="invalid">
                                Enter a valid password.
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Button type="submit">Sign up</Button>
            </Form>
        </Container>
    );
}


export default Signup;