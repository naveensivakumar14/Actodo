import { useState } from "react";

function TodoForm(props){

    //usestate for adding new activities from input
    const[newactivity,setNewactivity]=useState("");

    //getting array of object data from Todo container main parent (TodoContainer.jsx)
    const activityList=props.activityList;
    const setactivityList=props.setactivityList;

    //add new items to the array

    //geting inputs from input element
    function handleChange(event){
        setNewactivity(event.target.value)
    }

    //combine activities 

    function addActivity(){
        setactivityList([...activityList,{id: activityList.length+1, activity:newactivity}]);
        setNewactivity([])
        
    }






    return(
        <div className="flex flex-col gap-4">
            <h2 className="text-xl font-medium">Manage Your Activities</h2>
            <div>
                <input value={newactivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next activity" />
                <button onClick={addActivity} className="border border-black bg-[#0C1844] text-white m-1 p-1" >Add</button>
            </div>
        </div>
    )
}

export default TodoForm