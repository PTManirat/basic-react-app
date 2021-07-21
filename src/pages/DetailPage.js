import React from 'react'
import { useParams, useHistory } from "react-router-dom";
import axios from 'axios'
import { CardDeck, Card, Spinner, Button } from 'react-bootstrap'

const DetailPage = () => {

    const {id, title} = useParams()
    const history = useHistory()
    const [detail, setDetail] = React.useState([])
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(null)
    const cancelToken = React.useRef(null)

    const getData = async (id) => {
        try {
            setLoading(true)
            const res = await axios.get('https://api.codingthailand.com/api/course/' + id ,{
                cancelToken: cancelToken.current.token  
            })
            setDetail(res.data.data)
        } catch (error){
            // console.log(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    React.useEffect(() => {

        cancelToken.current = axios.CancelToken.source()
        getData(id)

        return () =>  {
            // console.log('exit')
            cancelToken.current.cancel()
        }

    },[id])

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
                    <Button variant="secondary" onClick={() => {
                        history.goBack()
                    }}>Back</Button>
          
                    <h2>
                        {title} - {id}
                    </h2>

                    <div className="row mt-4">
                        {
                            detail.length > 0 ? (
                                <CardDeck>
                                    {
                                        detail.map((d, index) => {
                                            return (
                                                <div className="col-md-4" key={d.ch_id}>
                                                    <Card className="mb-4 shadow-sm">
                                                        <Card.Body>
                                                            <Card.Title>{d.ch_title}</Card.Title>
                                                            <Card.Text>
                                                                {d.ch_dateadd}
                                                            </Card.Text>
                                                        </Card.Body>
                                                    </Card>
                                                </div>
                                            )
                                        })
                                    }
                                </CardDeck>
                            ) : (
                                <div className="mx-auto">Not found data ...</div>
                            )
                        }
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default DetailPage
