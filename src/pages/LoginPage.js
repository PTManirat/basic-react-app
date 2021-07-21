import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from "yup"
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
// import { UserStoreContext } from '../context/UserContext'
import { useDispatch } from 'react-redux'
import { updateProfile } from '../redux/actions/authAction'

const schema = yup.object().shape({
    email: yup
        .string()
        .required('Email is required!')
        .email('Email format was wrong!'),
    password: yup
        .string()
        .required('Password is required!')
        .min(3, 'Password character is a minimum of 3')
});

const LoginPage = () => {

    const history = useHistory()
    const { addToast } = useToasts()
    // const userStore = React.useContext(UserStoreContext)
    
    //call redux action
    const dispatch = useDispatch()

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        try{
            const urlLogin = 'https://api.codingthailand.com/api/login'

            const res = await axios.post(urlLogin,{
                email: data.email,
                password: data.password
            })

            //keep token in localstorage convert json to string
            localStorage.setItem('token', JSON.stringify(res.data))

            //get profie
            const urlProfile = 'https://api.codingthailand.com/api/profile'
            const res_profile = await axios.get(urlProfile,{
                headers: {
                    Authorization: 'Bearer ' + res.data.access_token
                }
            })

            localStorage.setItem('profile', JSON.stringify(res_profile.data.data.user))

            addToast("Log In success!!!", { appearance: 'success' });
            // history.replace('/')
            // history.go(0)

            //update profile by Context
            // const profileVal = JSON.parse(localStorage.getItem('profile'))
            // userStore.updateProfile(profileVal)
            // history.replace('/')

            //update profile by Redux action
            const profileVal = JSON.parse(localStorage.getItem('profile'))
            dispatch(updateProfile(profileVal))
            history.replace('/')

        }catch(error){
            addToast(error.response.data.message, { appearance: 'error' });
        }
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Log In</h1>
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
                            Submit
                        </Button>

                    </Form>
                </Col>
            </Row>
            <hr />
        </Container>
    )
}

export default LoginPage
