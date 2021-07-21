import React from 'react'
// import { UserStoreContext } from '../context/UserContext'
import { useSelector } from 'react-redux'

const MemberPage = () => {

    // const userStore = React.useContext(UserStoreContext)
    const profileRedux = useSelector(state => state.authReducer.profile)

    return (
        <div className="jumbotron">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Member Club</h2>
                        {
                            profileRedux && (
                                <div>
                                    <p>Welcome : {profileRedux.name}</p>
                                    <p>Email : {profileRedux.email}</p>
                                </div>
                            )
                        }
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MemberPage
