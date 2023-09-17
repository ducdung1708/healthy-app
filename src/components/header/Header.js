import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import classes from "./header.module.css"
import icon_header from "../../icons/icon_header"
import NaviMemo from "./NaviMemo"
import DropDownMenu from "./dropdown_menu/dropdownMenu"
const Header = (props) => {
    const [clickDropdownMemu, setClickDropdownMenu] = useState(false)
    // hàm thực hiện đóng submenu khi click toàn trang
    const handleOutsideClick = (event) => {
        console.log(event.target)
        if (event.target.name !== "submenu") {
            setClickDropdownMenu(false)
        }
    }
    // thực hiện khi clickDropdownMemu thay đổi
    useEffect(() => {
        if (clickDropdownMemu) {
            document.addEventListener("click", handleOutsideClick)
            return () => {
                document.removeEventListener("click", handleOutsideClick)
            }
        }
    }, [clickDropdownMemu])

    return (
        <header className={classes.header}>
            {/* logo app */}
            {/* Click vào logo menu thì đưa đến trang chử */}
            <Link to="/">
                <img
                    className={classes.logo}
                    src={icon_header.logoApp}
                    alt="logo"
                />
            </Link>
            {/* Danh sách các menu trên thanh navi */}
            <div className={classes.list_navi_memo}>
                {/* menu 1 */}
                <NaviMemo
                    icon={icon_header.icon_memo}
                    text="自分の記録"
                    path="/"
                />
                {/* menu 2  */}
                <NaviMemo
                    icon={icon_header.icon_challenge}
                    text="チャレンジ"
                    path="myrecord"
                />
                {/* menu 3 */}
                <NaviMemo
                    icon={icon_header.icon_info}
                    text="お知らせ"
                    path="mycolumn"
                />
            </div>
            {/* icon_sub_menu */}
            <img
            name = "submenu"
                className={classes.icon_menu}
                // nếu clickDropdownMemu === true thì hiển thị icon_menu nếu không thì hiển thị icon_close
                src={
                    !clickDropdownMemu
                        ? icon_header.icon_menu
                        : icon_header.icon_close
                }
                alt="logo"
                onClick={() => setClickDropdownMenu(!clickDropdownMemu)} 
            />
            {/* dropMenu, nếu clickDropdownMemu === true thì hiển thị */}
            {clickDropdownMemu && (
                <div>
                    <DropDownMenu />
                </div>
            )}
        </header>
    )
}
export default Header
