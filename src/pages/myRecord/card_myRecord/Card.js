import classes from "./Card.module.css"
import React from 'react';
const Card = (props) => {
    const items = props.items
    return (
        <div className={classes.body}>
            {/* tiêu đề */}
            <div className={classes.title}>{items.title}</div>
            <div className={classes.date}>{items.date}</div>
            {props.children}
        </div>
    )
}
export default Card
