import React, { useState } from "react"
import classes from "./assets/css/Container.module.css"
import Recommended from "./myColumn/Recommended"
import Column from "./myColumn/Column"
import ShowMore from "../components/btn_ShowMore/ShowMore"

const MyColumn = () => {
    const [isShow, setIsShow] = useState(false)
    const clickShowHandler = (value) => {
        setIsShow(value)
    }
    return (
        <>
            <div className={classes.container}>
                {/* recommended */}
                <Recommended />
                {/* column */}
                <Column show={isShow} />
                {/* showmore */}
            </div>
            <ShowMore value={isShow} onShow={clickShowHandler} />
        </>

    )
}
export default MyColumn
