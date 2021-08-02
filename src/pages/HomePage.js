import React from "react";
import { FiSmile } from "react-icons/fi"
import { Link } from "react-router-dom"
import { useQuery } from 'react-query'
import { Spinner } from 'react-bootstrap' 

const HomePage = () => {

    // const { isLoading, error, data, isFetching } = useQuery('getData', () =>
    //     fetch('https://api.codingthailand.com/api/news?page=1&per_page=3').then(res =>
    //         res.json()
    //     )
    // )

    const query = useQuery('getData', () => {
        
        const controller = new AbortController()
        const signal = controller.signal

        const promise = fetch('https://api.codingthailand.com/api/news?page=1&per_page=3',{
            method : 'get',
            signal : signal
        }).then(res =>
            res.json()
        )

        //cancel request 
        promise.cancel = () => controller.abort()

        return promise
    })

    const { isLoading, error, data, isFetching } = query

    if(isLoading === true){
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
                <p>{JSON.stringify(error)}</p>
            </div>
        )
    }

    return (
        <>
            <main role="main">
                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Welcome</h1>
                        <p>
                            This website develop by React language test. <FiSmile color="brown" size="2em" />
                        </p>
                        <p>
                            {/* <a className="btn btn-primary btn-lg" href="#" role="button">
                                Learn more »
                            </a> */}
                            <Link to="/product" className="btn btn-primary btn-lg" role="button">
                                All Products »
                            </Link>
                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="mx-auto">
                            {
                                isFetching ? 'Updating...' : null
                            }
                        </div>
                    </div>
                    <div className="row">
                        {
                            data.data.map((d,index) => {
                                return(
                                    <div className="col-md-4" key={d.id}>
                                        <h2>{d.topic}</h2>
                                        <p>
                                            {d.detail}
                                        </p>
                                        <p>
                                            Cagetagory : {d.name}
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr />
                </div>{" "}
            </main>
        </>
    );
};

export default HomePage;
