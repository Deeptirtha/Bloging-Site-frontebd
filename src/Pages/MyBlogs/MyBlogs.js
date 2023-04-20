import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import "./MyBlogs.css"
import axios from "axios"
import Navbar from "../../components/Navbar/Navbar"


function MyBlogs({ user, userLogin }) {

    const [myBlog, setMyBlog] = useState([])

    let authorId = JSON.parse(localStorage.getItem("user"))._id
    useEffect(() => {
        axios.get(`http://localhost:4000/blogs?authorId=${authorId}`).then((res) => { setMyBlog(res.data.data) }).catch((err) => {alert("No Blogs Found Write Your 1st Blog ")
    window.location.replace("/WriteBlog")})
    })

    return (
        <>
            <Navbar user={user} userLogin={userLogin} />
            <div className="myblogBox">
                <div id='cardBox'>
                    {myBlog.map(x => {
                        return (
                            <div className="card" style={{ "width": "18rem", height: "25rem" }}>
                                <img id='blogImage1' src={(x.blogImage)?x.blogImage:"https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg"} style={{ width: "18rem", height: "12rem" }} className="card-img-top" alt="Error" />
                                <div className="card-body">
                                    <h5 className="card-title">{x.title}</h5>
                                    <p id="para" className="card-text" >{x.body}</p>
                                </div>
                                <a href={`/blogs/${x._id}`}> <button type="button" class="btn btn-primary btn-sm" style={{ width: "6rem", marginInline: "1rem" }}>Read More</button></a>
                            </div>
                        )
                    })}
                </div>

                <div id='SideBar1' >
                    {/* <h2>My Blogs</h2> */}
                </div>
            </div>
        </>
    )
}

export default MyBlogs
