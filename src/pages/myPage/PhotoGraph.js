import React from "react"
import classes from "../assets/css/myPage/PhotoGraph.module.css"
import Chart from "../../components/Chart/Chart"
const PhotoGraph = () => {
    return (
        <div className={classes.photo_graph}>
            {/* hình ảnh */}
            <img src="./Images/myPage/t01.png" alt="img" />
            {/* biểu đồ */}
            <div className={classes.box_chart}>
                <Chart/>
            </div>
        </div>
    )
}
export default PhotoGraph
