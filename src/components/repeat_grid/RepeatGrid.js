import classes from "./RepeatGrid.module.css"
import React from "react"
// tạo ra 1 box chứa các box con sử dụng ở mypage, mycolumn, myrecord
const RepeatGrid = (props) => {
    const showmore = props.show //biến dùng để kiểm tra xem người dùng có click vào showmore không
    return (
        // nếu showmore === true thì dùng css .main_show không thì dùng .main_hide
        <div className={showmore ? classes.main_show : classes.main_hide}>
            {props.items.map((item, index) => (
                <div className={classes.item} key={index}>
                    {/* sao chép lại phần tử children được tryền vào và cập nhật thêm item */}
                    {React.cloneElement(props.children, item)} 
                </div>
            ))}
        </div>
    )
}
export default RepeatGrid
