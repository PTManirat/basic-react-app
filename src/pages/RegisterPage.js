import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications';

const schema = yup.object().shape({
    name: yup.string().required('Name is required!'),
    email: yup.string().required('Email is required!').email('Email format was wrong!'),
    password: yup.string().required('Password is required!').min(3, 'Password character is a minimum of 3')
});

const RegisterPage = () => {

    const history = useHistory()
    const { addToast } = useToasts()

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try{
            const apiUrl = 'https://api.codingthailand.com/api/register'

            const res = await axios.post(apiUrl,{
                name : data.name,
                email: data.email,
                password: data.password
            })

            addToast(res.data.message, { appearance: 'success' });
            history.replace('/login')

        }catch(error){
            addToast(error.response.data.errors.email[0], { appearance: 'error' });
        }
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Register</h1>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                {...register("name")} 
                                isInvalid={errors.name}
                            />
                            {
                                errors.name && (
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name.message}
                                    </Form.Control.Feedback>
                                )
                            }
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control 
                                type="email" 
                                {...register("email")} 
                                isInvalid={errors.email}
                            />
                            {
                                errors.email && (
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email.message}
                                    </Form.Control.Feedback>
                                )
                            }
                        </Form.Group>

                        <Form.Group controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                type="password" 
                                {...register("password")} 
                                isInvalid={errors.password}
                            />
                            {
                                errors.password && (
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password.message}
                                    </Form.Control.Feedback>
                                )
                            }
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>

                    </Form>
                </Col>
            </Row>
            <hr />
        </Container>
    )
}

export default RegisterPage
