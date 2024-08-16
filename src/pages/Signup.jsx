
import { useState } from "react";
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Signup(props){

    const users=props.users
    const setUsers=props.setUsers

    //Navigate to the next page
    const navigate= useNavigate();
    
    //username , password entered from signup page
    const [eusername,setEusername]=useState();
    const [epassword,setEpassword]=useState();

    function handleUinput(event){
        setEusername(event.target.value)
    }

    function handlePinput(event){
        setEpassword(event.target.value);
    }


    function addUser(){
        setUsers([...users,{username:eusername, password:epassword}])
        navigate('/');
    }


    return(
        <div className="bg-[#1E201E] p-10">
            <div className="bg-[#EFEFEF] p-10  border rounded-md">
                <h1 className="text-3xl my-1 font-medium">Signup Here</h1>
                <p>I help you to manage your activities after you login 😉 </p>

                <div className="flex flex-col gap-2 my-4">
                    <input onChange={handleUinput}
                    type="text" 
                    className="w-52 border border-black p-1 bg-transparent rounded-sm" 
                    placeholder="username"/>

                    <input onChange={handlePinput}
                    type="text" 
                    className="w-52 border border-black p-1 bg-transparent rounded-sm" 
                    placeholder="password"/>

                    <input 
                    type="text" 
                    className="w-52 border border-black p-1 bg-transparent rounded-sm" 
                    placeholder="confirm password"/>

                    <button onClick={addUser} className="bg-[#FF9100] font-bold w-24 p-1 rounded-md">Signup</button>

                    <p>Already have an account? <Link to={"/"} className="underline">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Signup