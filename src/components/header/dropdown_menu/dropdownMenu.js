import "./dropdownMenu.css"
import React from "react"
import { Link } from "react-router-dom"

const listMenu = [
    {
        path: "/",
        text: "自分の記録",
    },
    {
        path: "comingsoon",
        text: "体重グラフ",
    },
    {
        path: "/",
        text: "目標",
    },
    {
        path: "/",
        text: "選択中のコース",
    },
    {
        path: "/",
        text: "コラム一覧",
    },
    {
        path: "/",
        text: "設定",
    },
]
const SubMenu = () => {
    return (
        <div className="subMenu">
            {listMenu.map((menu, index) => (
                <Link className="link" key={index} to={menu.path}>
                    <div >
                        <span>{menu.text}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}
export default SubMenu
