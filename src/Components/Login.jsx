import { useState,useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

const Login = () => {

    let[email,setEmail] = useState([])
    let[password,setPassword] = useState([])
    let [udata,setUdata]=useState()
    let navigate = useNavigate()

    let re=useRef()
    let rp=useRef()

    useEffect(() => {
        let fetchingData = async() => {
            let response=await fetch(`http://localhost:1000/login`)
            let data=await response.json();
            setUdata(data)
            // console.log(data);
            }
        fetchingData()     
    }, [udata])

   let handleSubmit = (e) =>{
    
    e.preventDefault();
    
    
        let ld=udata.find(d=>d.email==re.current.value)
        if(ld){
            navigate("/admin")
        }
        else{
            alert("Invalid Credintials")
        }

   }
    
    return ( 
        <div className="login_form">
        <div className="border rounded m-auto w-25 p-2 " >
            <form action="" onSubmit={handleSubmit}>
            <h1>Login Form</h1>
                <div>
                <label htmlFor="" className="m-2">UserName</label>
                <input type="email" ref={re}  onChange={(e) => setEmail(e.target.value)} className="w-100 p-2 rounded"/>
                </div>
                <div>
                    <label htmlFor="" className="m-2">Password</label>
                    <input type="password" ref={rp}  onChange={(e) => setPassword(e.target.value)} className="w-100 p-2 rounded" />
                </div>      
            <button type="submit" className="btn btn-success m-2 ">Submit</button>
            </form>
        </div>
        </div>
     );
}
 
export default Login;