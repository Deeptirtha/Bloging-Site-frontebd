import React from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom"

import Home from './Pages/Home/Home';
import Contact from './Pages/Contact/Contact';
import WriteBlog from './Pages/WriteBlog/WriteBlog';
import Profile from './Pages/Profile/Profile';
import Login from './Pages/Login/Login';
import SinglePost from './Pages/SinglePost/SinglePost';
import Resister from './Pages/Resister/Resister';
import MyBlogs from './Pages/MyBlogs/MyBlogs';
import UpdateBlog from './Pages/UpdateBlog/UpdateBlog';


function App() {
    let userLogin= false;
    let user = (localStorage.getItem("user"))
    
    if(!user){
        user = {}
    }else{
        user = JSON.parse(user)
        userLogin = true;
    }
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home user={user} userLogin={userLogin} />} />
                    <Route path="/Contact" element={userLogin ? <Contact user={user} userLogin={userLogin} /> : <Login />} />
                    <Route path="/MyBlogs" element={userLogin ? <MyBlogs user={user} userLogin={userLogin} />: <Login />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Resister" element={<Resister />} />
                    <Route path="/WriteBlog" element={userLogin ? <WriteBlog user={user} userLogin={userLogin} /> : <Login />} />
                    <Route path="/Profile" element={ <Profile user={user} userLogin={userLogin}/> } />
                    <Route path="/blogs" element={<SinglePost user={user} userLogin={userLogin}/>} >
                        <Route path=':blogId' element={<SinglePost user={user} userLogin={userLogin}/>}/>
                    </Route>
                    <Route path="/updateBlogs" element={userLogin ?<UpdateBlog user={user} userLogin={userLogin}/>: <Login />} >
                        <Route path=':blogId' element={<UpdateBlog user={user} userLogin={userLogin}/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
    )
}

export default App
