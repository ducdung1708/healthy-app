import React from 'react';
import classes from "../assets/css/myColumn/Column.module.css"
import RepeatGrid from "../../components/repeat_grid/RepeatGrid"
const list_column = [
    {
        src: "./Images/myColumn/column-1.jpg",
        date_time: "2021.05.17 23:25",
        description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hash_tag: "#魚料理 #和食 #DHA",
    },
    {
        src: "./Images/myColumn/column-2.jpg",
        date_time: "2021.05.17 23:25",
        description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hash_tag: "#魚料理 #和食 #DHA",
    },
    {
        src: "./Images/myColumn/column-3.jpg",
        date_time: "2021.05.17 23:25",
        description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hash_tag: "#魚料理 #和食 #DHA",
    },
    {
        src: "./Images/myColumn/column-4.jpg",
        date_time: "2021.05.17 23:25",
        description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hash_tag: "#魚料理 #和食 #DHA",
    },
    {
        src: "./Images/myColumn/column-5.jpg",
        date_time: "2021.05.17 23:25",
        description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hash_tag: "#魚料理 #和食 #DHA",
    },
    {
        src: "./Images/myColumn/column-6.jpg",
        date_time: "2021.05.17 23:25",
        description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hash_tag: "#魚料理 #和食 #DHA",
    },
    {
        src: "./Images/myColumn/column-7.jpg",
        date_time: "2021.05.17 23:25",
        description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hash_tag: "#魚料理 #和食 #DHA",
    },
    {
        src: "./Images/myColumn/column-8.jpg",
        date_time: "2021.05.17 23:25",
        description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hash_tag: "#魚料理 #和食 #DHA",
    },
    {
        src: "./Images/myColumn/column-1.jpg",
        date_time: "2021.05.17 23:25",
        description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hash_tag: "#魚料理 #和食 #DHA",
    },
    {
        src: "./Images/myColumn/column-1.jpg",
        date_time: "2021.05.17 23:25",
        description:
            "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hash_tag: "#魚料理 #和食 #DHA",
    },
]
const Column = (props) => {
    return (
        <div className={classes.container}>
            <RepeatGrid items={list_column} show = {props.show}>
                <Children />
            </RepeatGrid>
        </div>
    )
}

const Children = (column) => {
    return (
        <div className={classes.column}>
            {/* hình ảnh */}
            <img src={column.src} alt="column_img" />
            {/* thời gian */}
            <div className={classes.date_time}>
                <span>{column.date_time}</span>
            </div>
            {/* miêu tả */}
            <div className={classes.description}>{column.description}</div>
            {/* danh sách các thẻ tag */}
            <div className={classes.hash_tag}>{column.hash_tag}</div>
        </div>
    )
}
export default Column
