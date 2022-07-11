import classes from "../users/users.module.css";
import React, {useEffect, useState} from "react";

let Paginator = (props) => {
    let portionSize = 10;
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let page = [];
    //для відображення усіх сторінкок написати i <= pagesCount !!!!!!!
    for (let i = 1; i <= pagesCount; i++) {
        page.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={classes.wrapper}>
            {
                portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}> PREV </button>}
            {/*props.currentPage === p && classes.pagination*/}
            {page
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    return <span className={({ [classes.selectedPage]: props.currentPage === p }, classes.pageNumber)}
                                 key={p}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
            {portionCount > portionNumber && <button onClick={()=> { setPortionNumber(portionNumber+1)}}>NEXT</button>}
        </div>
    )
}

export default Paginator;