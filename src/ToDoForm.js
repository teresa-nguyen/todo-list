import React, {useState} from "react";

const ToDoForm = (props) => {
    const [userInput, setUserInput] = useState('');
    
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(userInput);
        setUserInput('');
     }
 return (<form onSubmit={handleSubmit}>
     <input value={userInput} type='text' onChange={handleChange} placeholder='Enter task...'/>
     <button type='submit'>Submit</button>
 </form>);
}



export default ToDoForm;