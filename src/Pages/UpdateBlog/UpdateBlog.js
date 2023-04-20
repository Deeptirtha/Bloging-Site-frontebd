import React, { useState } from 'react'
import axios from "axios"
import Navbar from '../../components/Navbar/Navbar'
import "./UpdateBlog.css"
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function UpdateBlog({ user, userLogin }) {

    const [image, setImage] = useState('https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=')
    const [pic, setPic] = useState("")
    const [texts, setTexts] = useState("")
    const [title, setTitle] = useState("")
    const [tag1, setTag1] = useState("")
    const [tag2, setTag2] = useState("")


    const displayImage = (e) => {
        e.preventDefault()
        setPic(e.target.files[0])

        let imgFile = e.target.files[0]
        var reader = new FileReader();

        var imgtag = document.getElementById("addBlogImg");
        imgtag.title = imgFile.name;

        reader.onload = function (e) {
            setImage(e.target.result);
        };
        reader.readAsDataURL(imgFile);
    }

    const writeBlogFunction = (e) => {
        e.preventDefault()

        let formData = new FormData()
        formData.append("file", pic)
        formData.append("fileName", pic.name)

        const config = {
            headers: {
                "x-api-key": localStorage.getItem("token"),
                'content-type': 'multipart/form-data'
            },
        };

        let options = {
            authorId: JSON.parse(localStorage.getItem("user"))._id,
            title: title,
            blogImage: pic,
            body: texts,
            tags: [tag1, tag2],
            category: document.getElementById("category").value
        }
        axios.put(`http://localhost:4000/blogs/${blogId.blogId}`, options, config).then((res) => {
            let data = res.data.data
            alert("Your Blog has Updated !")
            window.location.replace(`/blogs/${data._id}`)
        }).catch((err) => alert(err.message))
    }

    let blogId = useParams();

    useEffect(() => {
        axios.get(`http://localhost:4000/blogs/${blogId.blogId}`).then((res) => {
            let blogData = res.data.data
            setImage(blogData.blogImage)
            setTitle(blogData.title)
            setTexts(blogData.body)
            setTag1(blogData.tags[0])
            setTag2(blogData.tags[1])
            document.getElementById("category").value = blogData.category

        }).catch((err) => alert(err.message))
    }, [])

    return (
        <div>
            <Navbar user={user} userLogin={userLogin} />
            <form onSubmit={writeBlogFunction}>
                <div className='WriteBlog'>
                    <label htmlFor='addBlogImg'> <img id='blogImage' src={(image)?image:"https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg"} alt='Error' /><i className="addImgIcon fa-solid fa-plus" ></i></label>
                    <input id='addBlogImg' className='inputBlog' type="file" onChange={(e) => displayImage(e)} />
                    <input className='inputBlog' type="text" value={title} placeholder='Write blog title' onChange={(e) => setTitle(e.target.value)} />
                    <div className="tagsBox">
                        <input type="text" value={tag1} placeholder="Add Tag 1" onChange={(e) => setTag1(e.target.value)} />
                        <input type="text" value={tag2} placeholder="Add Tag 2" onChange={(e) => setTag2(e.target.value)} />
                        <select id='category'>
                            <option value="">Category</option>
                            <option value="Music">Music</option>
                            <option value="Game">Game</option>
                            <option value="Home">Home</option>
                            <option value="Study">Study</option>
                            <option value="Travling">Travling</option>
                            <option value="College">College</option>
                            <option value="Eating">Eating</option>
                            <option value="Love">Love</option>
                        </select>
                    </div>
                    <textarea className='inputBlog' placeholder='Wrtie Blogs' value={texts} rows={10} onChange={(e) => setTexts(e.target.value)} ></textarea>
                    <button type="submit" class="btn btn-success">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateBlog
