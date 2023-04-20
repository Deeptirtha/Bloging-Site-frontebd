import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Carousel from '../../components/Carousel/Carousel'
import BlogCard from '../../components/BlogCard/BlogCard'
import SideBar from '../../components/SideBar/SideBar'



function Home({ user, userLogin }) {

    const [blogs, setBlogs] = useState([])

    const [server, setServer] = useState(false)

    useEffect(() => {
            axios.get("http://localhost:4000/blogs").then((res) => {setBlogs(res.data.data);setServer(true)}).catch((err) => {
                if(err.message==="Network Error"){
                    alert("Please start the Server")
                }
            })
        
    }, [])

    // const filterItem = (category) => {
    //     axios.get("http://localhost:4000/blogs").then((res) => {
    //         let items = res.data.data
    //         let newItems = items.filter(x => x.category === category)
    //         setBlogs(newItems)
    //     }).catch((err) => alert(err.message))

    // }
    return (
        <div>
            <Navbar user={user} userLogin={userLogin} />
            <Carousel />
            <div className="blogHeading">
                <h1>BLOG</h1>
            </div>
            {(server)?<div className="homePageParts">
                <BlogCard blogs={blogs} setBlogs={setBlogs} />
            </div> : <div className='homePageParts'><h1 style={{fontSize:"5rem"}}>Start the server</h1></div>}
            

        </div>
    )
}

export default Home
