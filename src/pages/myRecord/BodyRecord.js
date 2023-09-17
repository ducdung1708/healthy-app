import React from "react"
import classes from "../assets/css/myRecord/BodyRecord.module.css"
import Card from "./card_myRecord/Card"
import Chart from "../../components/Chart/Chart"
const calendar = ["日", "週", "月", "年"]
const title_date = { title: "BODY RECORD", date: "2021.05.21" }
const BodyRecord = (props) => {
    return (
        <Card items={title_date}>
            <div id="bodyRecord">
                {/* biểu đồ */}
                <div className={classes.graph}>
                    <Chart w="851px" h="185px" />
                </div>
                {/* các nút chọn trong danh sách calendar */}
                <div className={classes.calendar}>
                    {calendar.map((cal, index) => (
                        <div key={index}>{cal}</div>
                    ))}
                </div>
            </div>
        </Card>
    )
}
export default BodyRecord
