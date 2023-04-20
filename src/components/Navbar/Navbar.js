import React from 'react'
import "./Navbar.css"


function Navbar({ user, userLogin }) {

    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
    }
    let data=localStorage.getItem("user")

    return (
        <div className='navbarBigBox'>
            <nav className="navbar navbar-expand-lg">    
                <div className="navbarIcons">
                    <a href='https://www.facebook.com/' rel="noreferrer" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                    <a href='https://www.instagram.com/dee_tirtha/' rel="noreferrer" target="_blank"><i className="fa-brands fa-square-instagram"></i></a>
                    <a href='https://www.linkedin.com/in/deeptirtha-mukherjee-7b5040249/' rel="noreferrer" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                    <a href='https://twitter.com/' rel="noreferrer" target="_blank"><i className="fa-brands fa-square-twitter"></i></a>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav" mx-auto>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/WriteBlog">Write</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/MyBlogs">My Blogs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/Contact">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='/login' onClick={logout}>{data?"Logout":"Login"}</a>
                        </li>
                    </ul>
                </div>
                <div id="navbarDP">
                    {userLogin ? <a href='/Profile'><img id="navbarProfile" src={(user.profile)?user.profile:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} alt="Loading" /></a> :
                        <></>}
                </div>
                {/* <i className="fa-solid fa-magnifying-glass" id='search'></i> */}
            </nav>
        </div>
    )
}

export default Navbar
