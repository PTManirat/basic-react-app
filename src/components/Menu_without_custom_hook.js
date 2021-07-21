import React from 'react'
import useHover from '../hooks/UseHover'

const Menu_without_custom_hook = () => {

    const [hover, attrs] = useHover()

    return (
        <div>
            <h1>Menu_without_custom_hook</h1>
            {
                hover ? <h3>เมนูหลัก</h3> : null
            }
            <img {...attrs} src="./logo192.png" width="100" alt="logo" />
        </div>
    )
}

export default Menu_without_custom_hook
