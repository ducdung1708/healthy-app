import classes from "./ShowMore.module.css"
import React from 'react';
const ShowMore = (props) => {
    const clickShowHandler = () =>{
        props.onShow(!props.value)
    }
    return (
        <div className={classes.container_showmore}>
            <div className={classes.showmore} onClick={clickShowHandler}>記録をもっと見る</div>
        </div>
    )
}
export default ShowMore
