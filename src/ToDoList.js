import React from "react";
import ToDo from './ToDo';

const ToDoList = (props) => {
    // props.toDoList
    return (<ul>
        {props.list.map((toDoData) => {
            return (<ToDo item={toDoData} handleToggle={props.handleToggle} />)
        })}
    </ul>);
};


export default ToDoList;