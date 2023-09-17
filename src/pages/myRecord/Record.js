import classes from "../assets/css/myRecord/Record.module.css"
import React from "react"
import { Link } from "react-scroll"
// import ScrollButton from "./scrollButton/Scroll"
const listRecord = [
    {
        src: "./Images/myRecord/MyRecommend-1.jpg",
        title: "BODY RECORD",
        text: "自分のカラダの記録",
        id: "bodyRecord",
    },
    {
        src: "./Images/myRecord/MyRecommend-2.jpg",
        title: "MY EXERCISE",
        text: "自分の運動の記録",
        id: "myExercise",
    },
    {
        src: "./Images/myRecord/MyRecommend-3.jpg",
        title: "MY DIARY",
        text: "自分の日記",
        id: "myDiary",
    },
]
const Record = () => {
    return (
        <div className={classes.container}>
            {listRecord.map((record, index) => (
                // Link đường dẫn di chuyển đến id mà người dùng click
                <Link to={record.id} smooth={true} duration={500} key={index}>
                    <div className={classes.record} >
                        {/* hình ảnh */}
                        <div className={classes.image}>
                            <img src={record.src} alt="img" />
                        </div>
                        {/* bộ lọc hình ảnh có màu xám */}
                        <div className={classes.gray_filter}></div>
                        {/* tiêu đề */}
                        <div className={classes.title}>{record.title}</div>
                        {/* nội dung */}
                        <div className={classes.text}>{record.text}</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default Record
