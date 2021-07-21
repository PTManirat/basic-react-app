import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Form, Button, Row, Col } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useHistory } from 'react-router-dom';

const schema = yup.object().shape({
    newsCatename: yup.string().required('Name news category is required!')
});

const EditPage = () => {

    const { id } = useParams()
    const history = useHistory()

    const { register, handleSubmit, formState:{ errors }, setValue } = useForm({
        resolver: yupResolver(schema)
    });

    // const getData = async (id) => {
    //     try{
    //         const res = await axios.get('https://api.codingthailand.com/api/category/' + id)
    //         setValue('newsCatename', res.data.name)
    //         setValue('newsCateId', res.data.id)
    //     }catch(error) {
    //         console.log(error)
    //     }
    // }

    // React.useEffect(() => { 
    //     getData(id)
    // },[id])

    //useCallback
    const getData = React.useCallback(async () => {
        try{
            const res = await axios.get('https://api.codingthailand.com/api/category/' + id)
            setValue('newsCatename', res.data.name)
        }catch(error){
            console.log(error)
        }
    },[id, setValue]) 

    React.useEffect(() => { 
        getData()
    },[getData])

    const onSubmit = async (data) => {
        const apiUrl = 'https://api.codingthailand.com/api/category'

        const res = await axios.put(apiUrl,{
            id: id,
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

export default EditPage
