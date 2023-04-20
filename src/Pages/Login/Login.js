import React, { useState } from 'react'
import "./Login.css"
import axios from "axios"
import Navbar from '../../components/Navbar/Navbar'



function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const loginFunction = (e) => {
        e.preventDefault()

        let obj = {
            email: email,
            password: password
        }

        axios.post("http://localhost:4000/login", obj).then((res) => {
            localStorage.setItem("token", res.data.data.token)

            localStorage.setItem("user", JSON.stringify(res.data.data.user))
            window.location.replace("/")

        }).catch((err) => alert(err.message))
    }


    return (
        <>
            <Navbar />
            <div id='bigBox1'>

                <div className="headingLogin">
                    <h2 id="login">LOGIN</h2>
                </div>

                <div className="loginBox">

                    <form onSubmit={loginFunction}>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Write your email" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Write your password" />
                        </div>

                        <button type="submit" id='btn1' className="btn btn-primary">Login</button>

                        <div id="headingLogin">
                            <a href='/Resister'>Resister</a>
                        </div>

                    </form>
                </div>

            </div>
        </>
    )
}



export default Login
