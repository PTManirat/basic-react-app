import React from 'react'
import { Table, Image, Badge, Spinner } from 'react-bootstrap'
import axios from 'axios'
import { format } from 'date-fns'
import { th } from 'date-fns/locale'
import { BsEyeFill } from 'react-icons/bs'
import { Link } from "react-router-dom";
import { addToCart } from '../redux/actions/cartAction'
import { useSelector, useDispatch } from 'react-redux'

const ProductPage = () => {

    const [product, setProduct] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const cancelToken = React.useRef(null)

    const dispatch = useDispatch()
    const cartlist = useSelector((state) => state.cartReducer.cartlist)
    const total = useSelector((state) => state.cartReducer.total)

    const getData = async () => {
        try {
            setLoading(true)
            const res = await axios.get('https://api.codingthailand.com/api/course',{
                cancelToken: cancelToken.current.token  
            })
            setProduct(res.data.data)
        } catch (error){
            console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {

        cancelToken.current = axios.CancelToken.source()
        getData()

        return () =>  {
            // console.log('exit')
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

    const addCart = (p) => {

        const product = {
            id: p.id,
            name: p.title,
            price: p.view,
            qty: 1
        }

        dispatch(addToCart(product,cartlist))
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Products</h2>
                    {
                        total > 0 && <h4>You chose a products for {total}</h4>
                    }
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Course name</th>
                                <th>Course detail</th>
                                <th>Date create</th>
                                <th>Views</th>
                                <th>Picture</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((p,index) => {
                                    return (
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td>{p.title}</td>
                                            <td>{p.detail}</td>
                                            <td>
                                                {
                                                    format(new Date(p.date), 'dd/MMM/yyyy', {locale: th})
                                                }
                                            </td>
                                            <td>
                                                <Badge variant="secondary">{p.view}</Badge>
                                            </td>
                                            <td>
                                                <Image src={p.picture} rounded alt={p.title} width={100} />
                                            </td>
                                            <td>
                                                <Link to={`/detail/${p.id}/title/${p.title}`}>
                                                    <BsEyeFill/>
                                                </Link>
                                                <button className="btn btn-outline-success ml-2" onClick={() => addCart(p)}>
                                                    Pick product
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
