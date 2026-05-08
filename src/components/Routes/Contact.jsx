
import { useEffect } from "react";
const Contact =()=>{

    useEffect(()=>{
        console.log("useEffect")
   const timer =setInterval(() => {
    console.log("Hello from useEffect")
   }, 1000);
   return()=>{
    console.log("UseEffect return")
    clearInterval(timer)
   }
  },[])
console.log("render")
    return(
        <div>
            <h1>For contacting us Email on:</h1>
            <h3>Email is: shahzadgull5059@gmail.com</h3>
        </div>
    )
}
export default Contact;

