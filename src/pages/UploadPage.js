import React from 'react'
import { Form, Container, Row, Col} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications';

const SUPPORTED_IMAGE_FORMATS = ['image/jpeg', 'image/jpg']

const UploadPage = () => {

    const history = useHistory()
    const { addToast } = useToasts();

    const { handleSubmit, formState:{ errors }, register } = useForm()

    const onSubmit = (data) => {
        try {
            let imgUpload = data.picture[0]

            const reader = new FileReader()
            reader.readAsDataURL(imgUpload)
            reader.onload = async (e) => {
    
                let base64Img = e.target.result
                const urlAPI = 'https://api.codingthailand.com/api/upload'
                const res = await axios.post(urlAPI,{
                    picture: base64Img
                })

                addToast(res.data.data.message, { appearance: 'success' });
                history.replace("/")
            }
        } catch (error) {
            addToast(JSON.stringify(error), { appearance: 'error' });
        }
    }

    return (
        <Container className="mt-4">
            <Row>
                <Col md={6}>
                    <h1>Upload Image</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3 mt-4">
                            <Form.File>
                                <Form.File.Label>Choose file picture.</Form.File.Label>
                                <Form.File.Input
                                    type="file"
                                    {...register("picture",{
                                        required: '** Please input file picture.',
                                        validate: {
                                            checkFileType: (value) => {
                                                return value && SUPPORTED_IMAGE_FORMATS.includes(value[0].type)
                                            }
                                        }
                                    })}
                                    isInvalid={errors.picture}
                                />
                                {
                                    errors.picture && errors.picture.type === "required" && (
                                        <Form.Control.Feedback type="invalid">
                                            {errors.picture.message}
                                        </Form.Control.Feedback>
                                    )
                                }
                                {
                                    errors.picture && errors.picture.type === "checkFileType" && (
                                        <Form.Control.Feedback type="invalid">
                                            Picture was supported only file type .jpg or jpeg.
                                        </Form.Control.Feedback>
                                    )
                                }
                            </Form.File>
                        </div>
                        <button className="btn btn-primary" type="submit">Upload...</button>
                    </Form>
                </Col>
            </Row><hr/>
        </Container>
    )
}

export default UploadPage
