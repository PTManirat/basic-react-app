import React from 'react'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const schema = yup.object().shape({
    newsCatename: yup.string().required('Name news category is required!')
});

const CreatePage = () => {

    const history = useHistory()

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async (data) => {
        // console.log(data)
        const apiUrl = 'https://api.codingthailand.com/api/category'

        const res = await axios.post(apiUrl,{
            name : data.newsCatename
        })

        alert(res.data.message)
        history.replace('/category')
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Group controlId="newsCatename">
                            <Form.Label>News Category</Form.Label>
                            <Form.Control 
                                type="text" 
                                {...register("newsCatename")} 
                                placeholder="Enter news category name." 
                                isInvalid={errors.newsCatename}
                            />
                            {
                                errors.newsCatename && (
                                    <Form.Control.Feedback type="invalid">
                                        {errors.newsCatename.message}
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

export default CreatePage
