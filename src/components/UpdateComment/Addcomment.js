import React from 'react'
import './Comment.css'
import axios from 'axios'
import { useState } from 'react';


function Addcomment({commentid}) {

    const [comment,setComment]=useState("")

    let options = {}
 
    options.comments = comment

   function addcom(blogId){

    axios.put(`http://localhost:4000/commentUpdate/${commentid}`,options)
    .then((res)=> {
        alert("Comment Updated Successfully")
        window.location.reload(false)}
   
    )
    .catch((err) => alert(err.response.data.message) )
   }



  return (
    <div className='comment-input'>
        <input type="text"  className='comment-input-area inputGroup' value={comment} onChange={(e) => setComment(e.target.value)} />
        <button className='add-butn btn'  onClick={()=>{addcom(commentid)}}>Update</button>
      
    </div>
  )
}

export default Addcomment
