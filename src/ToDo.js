import React from "react";

const ToDo = (props) => {
    // props === {
    //   item: {
    //     "id": 1,
    //     "task": "Give dog a bath",
    //     "complete": true
    //   },
    //   handleToggle: () => {}
    // }
    return (<li className={props.item.complete ? "strike" : ""} onClick={() => {props.handleToggle(props.item.id)}}>
        {props.item.task}
    </li>);
}


export default ToDo;