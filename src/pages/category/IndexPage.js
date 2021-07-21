import React from 'react'
import axios from 'axios'
import { Spinner, Table, Button } from 'react-bootstrap'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useHistory } from 'react-router-dom'

const IndexPage = () => {

    const [category, setCategory] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const cancelToken = React.useRef(null)
    const history = useHistory()

    const getData = async () => {
        try {
            setLoading(true)
            const res = await axios.get(
                `https://api.codingthailand.com/api/category`,
                {
                    cancelToken: cancelToken.current.token  
                }
            )
            setCategory(res.data)
        } catch (error){
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {

        cancelToken.current = axios.CancelToken.source()
        getData()

        return () =>  {
            cancelToken.current.cancel()
        }

    },[])

    if(loading === true){
        return(
            <div className="text-center mt-5">
                <Spinner animation="border" />
            </div>
        )
    }

    if (error) {
        return (
            <div className="text-center mt-5">
                <p>Have a problem from server,please try again.</p>
                <p>{error.response.data.message}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">

                    <Button className="mt-3 mb-3" variant="success" onClick={() => history.push('/category/create')}>Add Category</Button>

                    <h2>Category Lists</h2>

                    <Table striped bordered hover className="mt-4">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Category Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               category.map((c, index) => {
                                    return (
                                        <tr key={c.id}>
                                            <td>{c.id}</td>
                                            <td>{c.name}</td>
                                            <td>
                                                <Button 
                                                    className="ml-2" 
                                                    variant="outline-info" 
                                                    size="sm"
                                                    onClick={() => history.push('/category/edit/' + c.id)}
                                                >
                                                    <FiEdit />
                                                </Button>
                                                <Button 
                                                    className="ml-2" 
                                                    variant="outline-danger" 
                                                    size="sm"
                                                    onClick={async () => {

                                                        const isConfirm = window.confirm('Are you sure to delete ' + c.name + ' ?')

                                                        if(isConfirm === true){
                                                            const res = await axios.delete('https://api.codingthailand.com/api/category/' + c.id)
                                                            alert(res.data.message)
                                                            history.go(0)
                                                        }
                                                    }}
                                                >
                                                    <FiTrash2 />
                                                </Button>
                                            </td>
                                        </tr>
                                    )
                               }) 
                            }
                        </tbody>
                    </Table>
                    <br />
                </div>
            </div>
        </div>
    )
}

export default IndexPage
