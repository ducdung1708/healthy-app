import React from "react"
import "./chart.css"
import { Line } from "react-chartjs-2"
import { Chart as Chartjs } from "chart.js"
import { LineElement } from "chart.js"
import { CategoryScale } from "chart.js"
import { LinearScale } from "chart.js"
import { Tooltip } from "chart.js"
import { Legend } from "chart.js"
import { Title } from "chart.js"
import { PointElement } from "chart.js"

Chartjs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
const data = {
    // Các nhãn trên trục x
    labels: [
        "6月",
        "7月",
        "8月",
        "9月",
        "11月",
        "10月",
        "12月",
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
    ],
    // mảng chứa dữ liệu các đường trên biểu đồ
    datasets: [
        // Line 1
        {
            label: "Line 1", // Nhãn của line
            backgroundColor: "#FFCC21", //màu của các điểm
            data: [40, 39, 27, 40, 39, 50, 40, 23, 65, 34, 20, 100], //dữ liệu
            borderColor: "#FFCC21", //màu của đường nối giữa các điểm
        },
        //Line 2
        {
            label: "Line 2",
            backgroundColor: "#8FE9D0",
            data: [23, 44, 27, 21, 39, 54, 65, 41, 27, 32, 26, 52],
            borderColor: "#8FE9D0",
        },
    ],
}
const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
        // cấu hình trục x
        x: {
            ticks: {
                font: {
                    family: "Hiragino Kaku Gothic Pro",
                    style: "normal",
                    weight: "300",
                    size: "8px",
                    height: "12px",
                    align: "center",
                },
                color: "#FFFFFF",
            },
        },
        // cấu hình trục y
        y: {
            beginAtZero: true,
            display: false,
            ticks: {
                font: {
                    family: "Helvetica",
                    size: "12px",
                    weight: "bold",
                    color: "red",
                },
            },
        },
    },
}
const Chart = (props) => {
    const w = parseInt(props.w), h = parseInt(props.h)
    console.log(w, h)

    return (
        <div style={{
            display: "inline-block",
            position: "relative",
            width: "100%",
            height: "100%"
        }}>
            <Line data={data} options={options} />
        </div>
    )
}
export default Chart

