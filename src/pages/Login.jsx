import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function Login(props){

    //getting user names from array of objects
    const users=props.users

    //navigate to landing page
    const navigate= useNavigate();


    //username , password entered from login page
    const [eusername,setEusername]=useState();
    const [epassword,setEpassword]=useState();

    //useState for conditional rendering
    const [ruser,setRuser]=useState(true)

    //getting username input
    function handleUinput(event){
        setEusername(event.target.value)
    }

    //getting users password input
    function handlePinput(event){
        setEpassword(event.target.value)
    }

    //check whether entered username math to the item from user array of object 
    function checkUser(){
        var isuserFound=false
        users.forEach(function(item){
            if(item.username=== eusername && item.password=== epassword){
                console.log("Login Successful")
                isuserFound=true;
                navigate('/Landing',{state:{user:eusername}})
            }
        })
        if (isuserFound===false){
            console.log("Login Failed");
            setRuser(false);
        }
    }

    return(
        <div className=" bg-[#1E201E] p-24">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl my-1 font-medium">Hey, Hi 👋</h1>

            {/* conditional rendering */}
            {ruser? <p>I help you to manage your activities after you login 😊</p>:<p className="text-red-600">Please Signup before you Login 😊</p>}
                
                <div className="flex flex-col gap-2 my-4">
                    <input onChange={handleUinput}
                    type="text" 
                    className="w-52 border border-black p-1 bg-transparent rounded-sm" 
                    placeholder="username"/>

                    <input onChange={handlePinput}
                    type="text" 
                    className="w-52 border border-black p-1 bg-transparent rounded-sm" 
                    placeholder="password"/>

                    <button onClick={checkUser} className="bg-[#9BEC00] font-bold w-24 p-1 rounded-md">Login</button>

                    <p>Don't have an account? <Link to={"/Signup"} className="underline">Signup</Link></p>
                </div>

            </div>
        </div>
    )

}

export default Login


