import React, { useEffect, useState } from 'react'
import "./SinglePost.css"
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CommentCard from "../../components/CommentCard/Comment"
import Addcomment from "../../components/AddComment/Addcomment"


function SinglePost({ user, userLogin }) {
    const [blog, setBlog] = useState({ authorId: {} })
    const [comment, setcomment] = useState([])
    let blogId = useParams();


    useEffect(() => {
       axios.get(`http://localhost:4000/blogs/${blogId.blogId}`).then((data)=>
       setBlog(data.data.data))
       .catch((e)=>alert(e.message))
     
        }

    , [])

    useEffect(() => {
        axios.get(`http://localhost:4000/comment/${blogId.blogId}`).then((data)=>
        setcomment(data.data.data))
        .catch((e)=>alert(e.message))
         }
     , [])


    let config = {
        headers: {
            "x-api-key": localStorage.getItem("token")
        },
    }
    const deleteBlog = () => {
        if (!userLogin) { window.location.replace("/Login") }
        else {
            let check = window.confirm("Are you sure ?")
            if (check) {
                axios.delete(`http://localhost:4000/blogs/${blogId.blogId}`, config).then(() => {
                    window.location.replace("/")
                }).catch((err) => alert(err.message))
            }
        }
    }


    return (
        <>
            <Navbar user={user} userLogin={userLogin} />
            <div className='SinglePost'>
                <div className='BlogDetails'>
                    <img id='blogImage1' src={(blog.blogImage)?blog.blogImage:"https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg"} alt='Error' />
                    <h1>{blog.title}</h1>
                    <div id="authorNameBox">
                        <span>Author : {blog.authorId.fname + " " + blog.authorId.lname} </span>
                        <div id="iconBox10">
                            <a href={`/updateBlogs/${blog._id}`}> <i class="fa-solid fa-pen-to-square"></i></a>
                            <i onClick={deleteBlog} class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                    <p>{blog.body}</p>
                </div>
                <CommentCard comment={comment} />
                <Addcomment blogId={blogId.blogId}/>

            </div>
        </>
    )
}

export default SinglePost



// 