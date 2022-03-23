import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const Login = ({ showAlert }) => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIyODM3Y2ExMTRkNjIxMTBkMzkwZGFjIn0sImlhdCI6MTY0NjgyNjc4NX0.7NlhT5cy1laTw3PfHH0mWeGo5zfk14oEDYiYIZ0NX5Y'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            navigate('/');
            showAlert('Logged in Successfully', 'success');

        } else { showAlert('Invalid Credentials', 'danger') }
    }

    const onchange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <Container style={{ maxWidth: '1140px' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={onchange} value={credentials.email} name='email' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter password" onChange={onchange} value={credentials.password} name='password' />
                </Form.Group>
                <Button type="submit">Login</Button>
            </Form>
        </Container>
    );
}


export default Login;