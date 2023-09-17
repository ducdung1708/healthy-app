import React from 'react';
import classes from "../assets/css/myRecord/Exercise.module.css"
import line from "../../icons/myRecord/line.svg"

const Exercise = (props) => {
    //danh sách exercise trong component MyExercise
    return (
        <div className={classes.excercise}>
            {/* dấu chấm */}
            <div className={classes.period}>●</div>
            {/* nội dung */}
            <div className={classes.content}>
                {/* text */}
                <div className={classes.text}>{props.items.text}</div>
                {/* số lượng kcal tiêu thụ */}
                <div className={classes.kcal}>{props.items.kcal}</div>
                {/* số phút hoạt động */}
                <div className={classes.min}>{props.items.min}</div>
                {/* đường gạch chân bên dưới */}
                <img src={line} alt="line" />
            </div>
        </div>
    )
}
export default Exercise
