import React from 'react'
import { logo } from '../styles/style'
import useHover from '../hooks/UseHover'

const Logo = () => {

    const logoImage = {
        url: './logo192.png'
    }

    const [hover, attrs] = useHover()

    return (
        <div>
            {/* <img src="./logo192.png" width="100" alt="logo" /> */}
            {
                hover ? <h3>เมนูหลัก</h3> : null
            }
            <img 
                style={logo} 
                src={logoImage.url} 
                {...attrs}
                width="100" 
                alt="logo" 
            />
        </div>
    )
}

export default Logo
