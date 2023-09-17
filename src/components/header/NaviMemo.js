import React from "react"
import { Link,useLocation } from "react-router-dom"
import classes from "./NaviMemo.module.css"

const NaviMemo = (props) => {
    let current_path = "/"
    if(props.path !== "/"){
       current_path = "/"+props.path
    }
    
    return (
        <Link to={props.path} className={classes.link}>
            <div className={classes.memo} >
                {/* icon menu */}
                <img src={props.icon} alt="icon_memo" />
                {/* text menu */}
                <span
                    style={{ color: useLocation().pathname === current_path ? "#FF963C" : "white" }}
                >
                    {props.text}
                </span>
            </div>
        </Link>
    )
}
export default NaviMemo
