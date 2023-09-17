import React, { useEffect } from "react"

const ScrollButton = (props) => {
    const handleScroll = () => {
        useEffect(() => {
            const btn = document.getElementById(props.id)
            console.log(btn)
            // if (btn) {
            //     btn.scrollIntoView({ behavior: "smooth" })
            // }
        }, [])
        
    }

    return (
        <div onClick={handleScroll}>
            <div>{props.children}</div>
        </div>
    )
}

export default ScrollButton
