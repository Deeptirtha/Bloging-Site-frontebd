import React, { useState } from 'react';
import axios from "axios"
import "./Profile.css"
import Navbar from '../../components/Navbar/Navbar';


function Profile({ user, userLogin }) {

    const [fname, setFname] = useState(user.fname)
    const [title, setTitle] = useState(user.title)
    const [email, setEmail] = useState(user.email)
    const [lname, setLname] = useState(user.lname)
    const [password, setPassword] = useState(user.password)
    const [profile, setProfile] = useState(user.profile)
    const [pic, setPic] = useState("")

    const updateProfile=(e)=>{
        e.preventDefault()
        
        const config = {
            headers: {
                "x-api-key": localStorage.getItem("token"),
                'content-type': 'multipart/form-data'
            },
        };

        let options = {
            authorId:JSON.parse(localStorage.getItem("user"))._id,
            title:title,
            fname : fname,
            lname : lname,
            email : email,
            password : password,
            profile : pic
        }

        axios.put("http://localhost:4000/authors", options, config).then((res)=>{

        console.log(res.data)
            localStorage.removeItem("user")
            localStorage.setItem("user", JSON.stringify(res.data.data))
            alert("Your profile has updated !")
            window.location.replace("/")
        }).catch((err)=>{alert(err)})
        
    }


    const displayDP = (e) => {
        e.preventDefault()

        setPic(e.target.files[0])
        let imgFile = e.target.files[0]
        var reader = new FileReader();

        var imgtag = document.getElementById("profilePicture");
        imgtag.title = imgFile.name;

        reader.onload = function (e) {

            setProfile(e.target.result);
        };
        reader.readAsDataURL(imgFile);

    }
    return (
        <div id='Profile'>
            <Navbar user={user} userLogin={userLogin} />
            <div className="Profile">
                <div className="formBox">
                    <form onSubmit={updateProfile}>
                        <div id="imageBox" className="eachInputBox">
                            <div id="DPBOX">
                                <img id="profilePicture" src={profile} alt='Error' />
                                <label htmlFor='addDP'><i className="DPIcon fa-solid fa-camera"></i></label>
                            </div>
                            <input type="file" accept='/image/*' id='addDP' alt='erorr' style={{ display: "none" }} onChange={(e) => displayDP(e)} />
                        </div>
                        <div className="eachInputBox">
                            <span>First Name</span>
                            <input className='inputBlog' placeholder='Write your first name' type="text" value={fname} onChange={(e)=>setFname(e.target.value)} />
                        </div>
                        <div className="eachInputBox">
                            <span>Last Name</span>
                            <input className='inputBlog' placeholder='Write your last name' type="text" value={lname} onChange={(e)=>setLname(e.target.value)}/>
                        </div>
                        <div className="eachInputBox">
                            <span>Email</span>
                            <input className='inputBlog' placeholder='Write your email' type="email" value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                        <div className="eachInputBox">
                            <span>Password</span>
                            <input className='inputBlog' placeholder='Write your password' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </div>
                        <div className="eachInputBox">
                            <button type="submit" class="btn btn-success">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile
