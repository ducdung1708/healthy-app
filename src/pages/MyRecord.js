import React, { useState } from "react"
import classes from "./assets/css/Container.module.css"
import Record from "./myRecord/Record"
import BodyRecord from "./myRecord/BodyRecord"
import MyExercise from "./myRecord/MyExercise"
import MyDiary from "./myRecord/MyDiary"
import ShowMore from "../components/btn_ShowMore/ShowMore"
const MyRecord = () => {
    const [isShow, setIsShow] = useState(false)
    const clickShowHandler = (value) => {
        setIsShow(value)
    }

    return (
        <>
            <div className={classes.container}>
                {/* record */}
                <Record />
                {/* body record */}
                <BodyRecord />
                {/* my excercise */}
                <MyExercise />
                {/* my diary  */}
                <MyDiary show={isShow} />
            </div>
            <ShowMore value={isShow} onShow={clickShowHandler} />
        </>

    )
}
export default MyRecord
