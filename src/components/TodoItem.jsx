


function TodoItem(props){


    //getting array of object data from Todo container main parent (TodoContainer.jsx)
    const activityArray=props.activityList
    const setactivityArray=props.setactivityList

    //deleting the array item
    function handleDelete(Delete_id){
       {
        const newArray=activityArray.filter(function(item){
            if(item.id===Delete_id){
                return false
            }
            else{
                return true;
            }
        })
        setactivityArray(newArray);
       }
       
    }


    //appearance
    return(
        <div className="flex justify-between py-2">
            <p>{props.index+1}.{props.activity}</p>
            <button className="text-red-500 font-bold" onClick={ ()=> handleDelete(props.id)}>Delete</button>
        </div>
        
    )

}

export default TodoItem