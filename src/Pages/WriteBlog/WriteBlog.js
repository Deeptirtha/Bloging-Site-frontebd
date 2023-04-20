import React, { useState } from 'react'
import "./WriteBlog.css"
import Navbar from '../../components/Navbar/Navbar'
import axios from "axios"

function WriteBlog({ user, userLogin }) {
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
        axios.post("http://localhost:4000/blogs", options, config).then((res) => {
            let data = res.data.data
            alert("Blog has created !")
            window.location.replace(`/blogs/${data._id}`)
        }).catch((err) => alert(err.message))
    }

    return (
        <>
            <Navbar user={user} userLogin={userLogin} />
            <form onSubmit={writeBlogFunction}>
                <div className='WriteBlog'>
                    <label htmlFor='addBlogImg'> <img id='blogImage' src={image} alt='Error' /><i className="addImgIcon fa-solid fa-plus" ></i></label>
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
                    <button type="submit" class="btn btn-success">Publish</button>
                </div>
            </form>
        </>
    )
}

export default WriteBlog
