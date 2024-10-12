import React from "react"
import {useState,useEffect} from "react"
export default function Contact() {
  const [status,setStatus]=useState(false)
  const [name,setName]=useState("")
  const [mail,setMail]=useState("")
  const [message,setMessage]=useState("")
  function handleSubmit(e){
    e.preventDefault()
  }
  function handleChange1(e){
    setName(e.target.value)
  }
  function handleChange2(e){
    setMail(e.target.value)
  }
  function handleChange3(e){
    setMessage(e.target.value)
  }
  function handleClick(){
    name && mail && message?setStatus(true):""
  }
  useEffect(()=>{
    setTimeout(()=>{
      status===true?setStatus(false):""
    },2000)
  },[status])
  return (
    <div id="contact">
      <h3>Contact<hr /></h3>
      {/* <br />
      <p><strong>I'd Love To Hear From You</strong></p>
      <br />
      <div class="social-media1">
        <a style={{ textDecoration: "none" }} href="https://www.linkedin.com/in/mohit-agarwal-099744235/" target="_blank"><i class='fab fa-linkedin'></i> linkedIn</a>
      </div>
      <p href="www.gmail.com" className="contactMail"><i class='fa solid fa-envelope'></i> mohitagarwal4567@gmail.com</p> */}
    <form onSubmit={handleSubmit} class="form px-3">
      <div class="pageTitle titlevalue">Chat with me !! </div>
      <input type="text" class="name formEntry" value={name} onChange={handleChange1} placeholder="Name" required />
      <input type="text" class="email formEntry" value={mail} onChange={handleChange2} placeholder="Email" required/>
      <textarea class="message formEntry" value={message} onChange={handleChange3} placeholder="Message" required></textarea>
      <button onClick={handleClick} class="submit formEntry">Send Message</button>
      {status && <p style={{color:"black"}}>Your message has been sent.</p>}
    </form>
    </div>
  )
}