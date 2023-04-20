import React from 'react'
import "./BlogCard.css"
// import axios from "axios"



function BlogCard({blogs}) {
    let authorId = localStorage.getItem("user")

    return (
        <>
            <div id='cardBox'>
                {blogs.map(x => {
                    return (
                        <div className="card" style={{ "width": "18rem", height: "25rem" }}>
                            <img id='blogImage1' src={(x.blogImage)?x.blogImage:"https://www.shutterstock.com/image-photo/blogging-blog-word-coder-coding-260nw-520314613.jpg"} style={{ width: "18rem", height: "12rem" }} className="card-img-top" alt="Error" />
                            <div className="card-body">
                                <h5 className="card-title">{x.title}</h5>
                                <p id="para" className="card-text" >{(x.body.length<1)?(x.body):"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design."}</p>
                            </div>
                           {authorId? <a href={`/blogs/${x._id}`}> <button type="button" class="btn btn-primary btn-sm" style={{ width: "6rem", marginInline: "1rem" }}>Read More</button></a>:<h5><a href={`/Login`}>Login to Read</a></h5>}
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default BlogCard




