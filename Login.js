import { useState } from "react"

function Login(){
    let[email,setEmail]=useState("")
        let[pass,setPass]=useState("")
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4 frm">

        <p>Email</p>
        <p><input onChange={(ev)=>{
            setEmail(ev.target.value)
        }}type="text" className="form-control" /></p>
        <p>Password</p>
        <p><input onChange={(ev)=>{
            setPass(ev.target.value)
        }} type="password" className="form-control" /></p>
        <p><button onClick={async ()=>{
            var fd=new FormData();
            fd.append("email",email);
            fd.append("pass",pass);
            var resp = await fetch("http://localhost:2000/admin/login",{
                method: 'POST',
                body:fd
            });
            var data=await resp.json();
            if(data.msg=="Invalid Login"){
                alert("Invalid Login")
            }else{
                localStorage.setItem("uname",data.name);
                localStorage.setItem("uid",data.id);
                window.location="/"
            }

            console.log(data)
            
         }} className="btn btn-success">Login</button></p>




        </div>
        </div>
        </div>
        </>
    )
}
export default Login