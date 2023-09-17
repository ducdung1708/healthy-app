import React, { useState } from "react"
import classes from "./assets/css/Container.module.css"
import PhotoGraph from "./myPage/PhotoGraph"
import HexFilter from "./myPage/HexFilter"
import MealHistory from "./myPage/MealHistory"
import ShowMore from "../components/btn_ShowMore/ShowMore"
import { FilterContextProvider } from "../context/HexFilterContext"
const MyPage = () => {
    const [isShow, setIsShow] = useState(false)
    const clickShowHandler = (value) => {
        setIsShow(value)
    }
    return (
        <>
            {/* phần chứa hình ảnh và biểu đồ */}
            <PhotoGraph />
            <div className={classes.container}>

                {/*  */}
                <FilterContextProvider>
                    {/* chứa các lựa chọn lọc dữ liệu trong MealHistory */}
                    <HexFilter />
                    {/* danh sách các bữa ăn */}
                    <MealHistory show={isShow} />
                </FilterContextProvider>
                {/* lựa chọn hide hoặc show nội dung */}
            </div>
            <ShowMore value={isShow} onShow={clickShowHandler} />
        </>

    )
}
export default MyPage
