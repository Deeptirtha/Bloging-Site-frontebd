import React, { useState } from "react";
import "./comment.css";
import axios from 'axios';
import Reply from "./Comment"
import Addcomment from "../AddComment/Addcomment";
import { useParams } from 'react-router-dom'
import UpdateComment from '../UpdateComment/Addcomment'

function Comment({ comment }) {

  const [replycomeent,setreplycomeent]=useState([])
  const [index,setIndex]=useState(false)
  const [indexno,setIndexno]=useState()
  const [ind,setInd]=useState(false)
  const [update,setUpdate]=useState(false)

  let blogId = useParams();

  function deletecomment(commentid, a, b,c) {
    if (a !== (b+" "+c)) return alert("can't delete other person comment")
    axios.put(`http://localhost:4000/comment/${commentid}`)
      .then((res) => {
        alert("your comment deleted successfully")
        window.location.reload(false)
      }

      )
      .catch((err) => alert(err.response.data.message) )
  }

  function reply(commentid,i) {
    setIndex(!index)
    setIndexno(i)
    axios.get(`http://localhost:4000/reply/${commentid}`)
      .then((res) => {
        setreplycomeent(res.data.data)
        console.log(res.data.data)
      }

      )
      .catch((err) => alert(err.response.data.message) )

  }

  function addreply(i) {
    setIndexno(i)
    setInd(!ind)
  }


  function upd(i) {
    setIndexno(i)
    setUpdate(!update)
  }

  let userData = JSON.parse(localStorage.getItem("user"))

  return (
    <div className="comment-div">
      {comment.map((element, i) => {
        return (
          <div className="sig-div">
            <div className="card_body">
              <div className="writey price">
                <div className="comment-user">
                  <img
                    className="comment-pic"
                    src="https://b.zmtcdn.com/web/assets/2267aec184e096c98c46a1565a5563661664945464.png?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                    alt=""
                  />
                  <h4 className="mt-2">{element.name}</h4>
                </div>
               
                <div className="add-btnn">
                <span className="d">{element.date}</span>
                <div>
                  
                  <button className="btn btn-outline-success" type="submit" onClick={() => reply(element._id,i)}>
                    <i className="fa-solid fa-comment"></i>
                  </button>
                  <button className="btn btn-outline-success upd" type="submit" onClick={() => upd(i)}>
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
                
                  
                <div>
                  <button className="btn btn-outline-success dle" type="submit" onClick={() => deletecomment(element._id, element.name, userData.fname,userData.lname)}>
                    <i className="fa-solid fa-trash "></i>
                  </button>
                  <button className="btn btn-outline-success rep" type="submit" onClick={() => addreply(i)}>
                  <i className="fa-solid fa-reply"></i>
                  </button>
                </div>
              </div>
              </div>
              <div className="writey  price">
                <span className="p">comment:-{element.comments}</span>
              </div>
     
              {(index && indexno===i)?<div className="comment-div"><Reply comment={replycomeent} /></div>:<></>}
              {(ind && indexno===i)?<Addcomment blogId={blogId.blogId} commentid={element._id}/>:<></>}
              {(update && indexno===i)?<UpdateComment commentid={element._id}/>:<></>}
            </div>



            <p className="line"></p>
          </div>
        );
      })}
    </div>
  );
}

export default Comment;