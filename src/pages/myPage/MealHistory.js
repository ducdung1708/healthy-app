import React, { useContext } from "react"
import classes from "../assets/css/myPage/MealHistory.module.css"
import RepeatGrid from "../../components/repeat_grid/RepeatGrid"
import { FilterContext } from "../../context/HexFilterContext"
const mealHistory = [
    {
        src: "./Images/myPage/m01.png",
        text: "05.21.Morning",
        menuItem: "morning",
    },
    {
        src: "./Images/myPage/l03.png",
        text: "05.21.Lunch",
        menuItem: "lunch",
    },
    {
        src: "./Images/myPage/d01.png",
        text: "05.21.Dinner",
        menuItem: "dinner",
    },
    {
        src: "./Images/myPage/l01.png",
        text: "05.21.Snack",
        menuItem: "snack",
    },
    {
        src: "./Images/myPage/m01.png",
        text: "05.20.Morning",
        menuItem: "morning",
    },
    {
        src: "./Images/myPage/l02.png",
        text: "05.20.Lunch",
        menuItem: "lunch",
    },
    {
        src: "./Images/myPage/d02.png",
        text: "05.20.Dinner",
        menuItem: "dinner",
    },
    {
        src: "./Images/myPage/s01.png",
        text: "05.20.Snack",
        menuItem: "snack",
    },
    {
        src: "./Images/myPage/m01.png",
        text: "05.20.Morning",
        menuItem: "morning",
    },
]
const MealHistory = (props) => {
    // biến nhận giá trị id người dùng click được nhận từ HexFilter
    const { filterSelected } = useContext(FilterContext)
    // lọc những phần tử có id là filterSelected
    const mealHistoryFilter = mealHistory.filter(
        (item) => item.menuItem === filterSelected
    )
    return (
        <div className={classes.container}>
            <RepeatGrid
                // nếu filterSelected === "" dùng danh sách mealHistory ban đầu nếu không thì dùng danh sách mealHistoryFilter
                items={filterSelected === "" ? mealHistory : mealHistoryFilter}
                // nhận giá trị showmore là true hay false
                show={props.show}
            >
                <Children />
            </RepeatGrid>
        </div>
    )
}
const Children = (meal) => {
    return (
        <div>
            {/* ảnh món ăn */}
            <img src={meal.src} alt="img" /> 
            {/* thời gian ăn */}
            <div className={classes.history}>
                <span>{meal.text}</span>
            </div>
        </div>
    )
}
export default MealHistory
