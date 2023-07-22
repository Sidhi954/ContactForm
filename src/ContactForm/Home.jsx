import React, {useState} from 'react';
import "./index.css";

const Home = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [subject,setSub]=useState("");
    const [message,setMessage]=useState("");

    const validateForm=()=> {
        if(name.length===0){
            alert("Invalid Form, Name can not be empty")
            return
        }
        if(email.length===0){
            alert("Invalid Form, Email can not be empty")
            return
        }
        
        if(subject.length===0){
            alert("Invalid Form, Subject can not be empty")
            return
        }
        if(message.length===0){
            alert("Invalid Form, Message can not be empty")
            return
        }
        alert("Message sent successfully!!")
    }
  return (
    <>
        <form action=""/>
        <div className="container">
        <h1>Contact form#01</h1><hr/>
        <h2>Get in touch</h2>
        <p>FULL NAME:* <input type="text" name="name" id="name" placeholder="Name" onChange={(e)=>setName(e.target.value)}/></p>
        <p>EMAIL ADDRESS:* <input type="email" name="email" id="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} /></p>
        <p>SUBJECT:* <input type="text" name="subject" id="subject" placeholder="Subject" onChange={(e)=>setSub(e.target.value)} /></p>
        <p>MESSAGE:* <textarea name="message" id="message" cols="30" rows="10" placeholder="Message" onChange={(e)=>setMessage(e.target.value)}/></p>
        <input type="submit" value="Send Message" onClick={()=>{validateForm()}}/>
    </div>
    <div className="container2">
        <h2>Let's get in touch</h2><hr/>
        <p className="class1" style={{fontSize: '20px', fontWeight:'500'}}>We're open for any suggestion or just to have a chat</p>
        <p className="class1"> <img src="add.png" alt="" height="20px"/> Address: 198 West 21st Street,Suite 721 New York NY10016 </p>
        <p className="class1"> <img src="phone.png" alt="" height="20px"/> Phone: +1234 567 890  </p>
        <p className="class1"> <img src="email.png" alt="" height="20px"/> Email: info@gmail.com </p>
        <p className="class1"> <img src="web.png" alt="" height="20px"/> Website: infosite.com </p>
    </div>
    </>
  )
}

export default Home;
