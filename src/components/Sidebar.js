import React from 'react'

const Sidebar = () => {

    // let fullName = 'Manee'

    const [fullName, setFullname] = React.useState('Manee')
    const [isShow, setIsShow] = React.useState(true)

    const changeName = () => {
        setFullname('Manop')
        setIsShow(!isShow)
    }

    React.useEffect(() => {
        console.log('test use effect first time')
    },[])

    React.useEffect(() => {
        console.log(fullName)
    },[fullName])

    return (
        <>
            <h3>Sidebar</h3>
            {
                isShow ? <p>Hello</p> : <p>Hi</p>
            }
            <p>My name's {fullName}.</p>
            <button onClick={changeName}>Change Name</button>
        </>
    )
}

export default Sidebar
