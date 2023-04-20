import React from 'react'
import './Comment.css'
import axios from 'axios'
import { useState } from 'react';


function Addcomment({blogId,commentid}) {

    const [comment,setComment]=useState("")
    let userData = JSON.parse(localStorage.getItem("user"))

    let options = {}
 
    options.comments = comment
    options.CommentId = commentid
    options.name = userData.fname+" "+userData.lname

   function addcom(blogId){

    axios.post(`http://localhost:4000/comment/${blogId}`,options)
    .then((res)=> {
        alert("Thanks for your review")
        window.location.reload(false)}
   
    )
    .catch((err) => alert(err.response.data.message) )
   }



  return (
    <div className='comment-input'>
        <input type="text"  className='comment-input-area inputGroup' value={comment} onChange={(e) => setComment(e.target.value)} />
        <button className='add-butn btn'  onClick={()=>{addcom(blogId)}}>Add</button>
      
    </div>
  )
}

export default Addcomment
