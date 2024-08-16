import { useState } from "react"
import TodoItem from "./TodoItem";

function TodoList(props){
    

    //getting array of object data from Todo container main parent (TodoContainer.jsx)
    const activityList=props.activityList;
    const setactivityList=props.setactivityList;


    return(
        <div className="bg-[#D1E9F6] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium py-2">Today's Activity</h1>
            
            {/* conditional rendering */}
            {activityList.length==0?<p>You haven't added anything yet</p>:""}
            
            {
                activityList.map(function(item,index){
                    return(
                        <TodoItem id={item.id} index={index} activity={item.activity} activityList={activityList} setactivityList={setactivityList} />
                    )
                })
            }
        </div>
    )
}

export default TodoList