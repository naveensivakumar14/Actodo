
import { useLocation } from "react-router-dom"





import Header from '../components/Header'
import Card from '../components/Card';
import Todo from '../components/ToDoContainer';




function Landing() {


const data= useLocation();
console.log(data.state);



const Months=["January","February","March","April","May","June","July","August","September","October","November","December"];

let currDate=new Date().getDate();
let currMonth=new Date().getMonth();

let now = new Date();
let hours = (now.getHours())%12;
let minutes = now.getMinutes();







  //render apperance
  return (
    <div className=" bg-[#1E201E] p-16">
        <div className='bg-[#efefef] p-10 border rounded-md'>

          {/* Header */}
          <Header name={data.state.user} ></Header>

          {/* Cards */}
          <div className='flex justify-between my-6 gap-7 flex-wrap'>
            <Card bgcolor={"#FD9B63"} title={"26°C"} subtitle={"Coimbatore"}/>
            <Card  bgcolor={"#B1AFFF"} title={(Months[currMonth])+" "+(currDate)} subtitle={(hours+":"+minutes)}/>
            <Card bgcolor={"#B4E380 "} title={"Build Using"} subtitle={"React"}/>
          </div>

          {/* Todo Container */}
          <Todo/>

         
           
        </div>
    </div>
  );
}

export default Landing;
