import React from 'react'
import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { clearAllCart } from '../redux/actions/cartAction'
import { useHistory } from 'react-router'

const CartPage = () => {

    const cartlist = useSelector((state) => state.cartReducer.cartlist)
    const total = useSelector((state) => state.cartReducer.total)
    const dispatch = useDispatch()
    const history = useHistory()

    return (
        <div className="container mt-4">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Shopping Cart
                        {
                            total > 0 && <span><h4> ( You chose a products for {total} )</h4></span>
                        }
                    </h2>
                    <div className="row col-md-12">
                        <button 
                            className="btn btn-danger btn-sm mb-3 mr-auto" 
                            onClick={ () => { 
                                    dispatch(clearAllCart()) 
                                }
                            }
                        >Cencel all</button>

                        <button 
                            className="btn btn-info btn-sm mb-3" 
                            onClick={() => {
                                history.push('/pdf')
                            }}
                        >Export PDF</button>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Code</th>
                                <th>Course name</th>
                                <th>Total</th>
                                <th>Course price</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartlist.map((c,index) => {
                                    return (
                                        <tr key={c.id}>
                                            <td>{index + 1}</td>
                                            <td>{c.id}</td>
                                            <td>{c.name}</td>
                                            <td>{c.qty}</td>
                                            <td>{c.price}</td>
                                            <td>{c.price*c.qty}</td>
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

export default CartPage
