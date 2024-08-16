import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { useState } from "react";


function Todo(){

    //Todo list main (array of object) default data

    //useState
    const [activityList,setactivityList]=useState([

        {
            id: 1,
            activity: "Go for 30mins walk"
        },
        {
            id: 2,
            activity: "Yogo 20mins"
        },
        {
            id: 3,
            activity: "Take Cold Shower"
        }

    ]);

    //apperance to app.js
    return(
    <div className="flex flex-col gap-4 flex-wrap">

        {/* Todo form includes the input box and add button----(TodoForm.jsx) */}
       <TodoForm activityList={activityList}  setactivityList={setactivityList}/>

       {/* TodoList.jsx and TodoItem.jsx */}
       <TodoList activityList={activityList}  setactivityList={setactivityList} />  
    </div>
    )
}

export default Todo