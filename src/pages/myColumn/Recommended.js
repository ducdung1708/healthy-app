import React from 'react';
import classes from "../assets/css/myColumn/Recommended.module.css"
import line from "../../icons/myColumn/line.svg"
const list_recommended = [
    {
        title: "RECOMMENDED COLUMN",
        text: "オススメ",
    },
    {
        title: "RECOMMENDED DIET",
        text: "ダイエット",
    },
    {
        title: "RECOMMENDED BEAUTY",
        text: "美容",
    },
    {
        title: "RECOMMENDED HEALTH",
        text: "健康",
    },
]
const Recommended = () => {
    return (
        <div className={classes.list_recommended}>
            {list_recommended.map((recommended, index) => (
                <div className={classes.recommended} key={index}>
                    {/* tiêu đề */}
                    <div className={classes.title}>{recommended.title}</div>
                    {/* đường thẳng ngăn cách tiêu đề và nội dung */}
                    <img src={line} alt="line" />
                    {/* nội dung */}
                    <div className={classes.text}>{recommended.text}</div>
                </div>
            ))}
        </div>
    )
}
export default Recommended
