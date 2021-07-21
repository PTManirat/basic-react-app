import React from 'react'
import Pagination from 'react-js-pagination'
import axios from 'axios'
import { Spinner, Table } from 'react-bootstrap'

const pageSize = 10

const HospitalPage = () => {

    const [hospital, setHospital] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const cancelToken = React.useRef(null)

    //Pagination
    const [page, setPage] = React.useState(1)
    const [total, setTotal] = React.useState(0)

    const getData = async (page) => {
        try {
            setLoading(true)
            const res = await axios.get(
                `https://api.codingthailand.com/api/hospital2?page=${page}&page_size=${pageSize}`,{
                    cancelToken: cancelToken.current.token  
                }
            )
            setHospital(res.data.data)
            setTotal(res.data.meta.pagination.total)
        } catch (error){
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {

        cancelToken.current = axios.CancelToken.source()
        getData(page)

        return () =>  {
            cancelToken.current.cancel()
        }

    },[page])

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

    const handlePageChange = (pageNumber) => {
        setPage(pageNumber)
    }

    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h2>Hospital Lists</h2>
                    <Table striped bordered hover size="sm" className="mt-4">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Code</th>
                                <th>Hospital Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               hospital.map((h, index) => {
                                    return (
                                        <tr key={h.id}>
                                            <td>{h.id}</td>
                                            <td>{h.code}</td>
                                            <td>{h.h_name}</td>
                                        </tr>
                                    )
                               }) 
                            }
                        </tbody>
                    </Table>
                    <br />
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={pageSize}
                        totalItemsCount={total}
                        pageRangeDisplayed={10}
                        onChange={handlePageChange}
                        itemClass="page-item"
                        linkClass="page-link"
                        // firstPageText="first"
                        // lastPageText="last"
                        prevPageText="previous"
                        nextPageText="next"
                    />
                </div>
            </div>
        </div>
    )
}

export default HospitalPage
