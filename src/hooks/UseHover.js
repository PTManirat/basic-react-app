import React from 'react'

const useHover = () => {

    const [hover, setHover] = React.useState(false)

    const mouseIn = () => {
        setHover(true)
    }

    const mouseOut = () => {
        setHover(false)
    }

    const attrs = {
        onMouseOver: mouseIn,
        onMouseOut: mouseOut
    }

    return [hover, attrs]

}

export default useHover