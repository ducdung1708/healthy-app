import React, { useContext } from "react"
import { FilterContext } from "../../context/HexFilterContext"
import classes from "../assets/css/myPage/HexFilter.module.css"
import icon_mypage from "../../icons/icon_mypage"

const ListHex = [
    {
        src: icon_mypage.morning,
        id: "morning",
    },
    {
        src: icon_mypage.lunch,
        id: "lunch",
    },
    {
        src: icon_mypage.dinner,
        id: "dinner",
    },
    {
        src: icon_mypage.snack,
        id: "snack",
    },
]
const HexFilter = () => {
    // biến lưu id của hex mà người dùng click truyền đến MealHistory
    const { setFilterSelected } = useContext(FilterContext)
    // hàm cập nhật id khi click
    const clickFilterHandler = (id) => {
        setFilterSelected(id)
    }
    return (
        <div className={classes.listHex}>
            {ListHex.map((hex, index) => (
                <img
                    key={index} //key
                    src={hex.src} //src ảnh
                    alt="hex"
                    // xử lý sự kiện click
                    onClick={() => {
                        clickFilterHandler(hex.id)
                    }}
                />
            ))}
        </div>
    )
}
export default HexFilter
