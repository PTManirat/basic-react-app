import React from 'react'
import { getVersion } from '../redux/actions/authAction'
import { useDispatch, useSelector } from 'react-redux'

const Footer = props => {

    const dispatch = useDispatch()
    const version = useSelector((state) => state.authReducer.version)

    React.useEffect(() => {
        dispatch(getVersion())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <>
            <footer className="container">
                <p>© Patty Racy Company {new Date().getFullYear()} version : {version}</p>
            </footer>
        </>
    )

}

export default Footer
