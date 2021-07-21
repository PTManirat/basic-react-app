import React from 'react'

const Menu = () => {

    const [hover, setHover] = React.useState(false)

    const mouseIn = () => {
        setHover(true)
    }

    const mouseOut = () => {
        setHover(false)
    }

    return (
        <div>
            <h1>Menu</h1>
            {
                hover ? <h3>เมนูหลัก</h3> : null
            }
            <img onMouseOver={mouseIn} onMouseOut={mouseOut} src="./logo192.png" width="100" alt="logo" />
        </div>
    )
}

export default Menu
