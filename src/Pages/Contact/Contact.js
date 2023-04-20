import React from 'react';
import "./Contact.css"
import Navbar from '../../components/Navbar/Navbar';

function Contact({ user, userLogin }) {


  // const contactFun = () => {
  //   alert("Message Sent !")
  //   document.querySelector('.inputBlog').value = ""
  //   document.querySelector('.form-control').value = ""
  // }


  return (
    <div id='bigBoxContact'>
      <Navbar user={user} userLogin={userLogin} />
      <h1 id='heading'>Contact us</h1>
      <div className="Contact">
        <form action="https://formspree.io/f/xknakokg" method='POST' >
          <div className="eachInputBox">
            <span>Full Name</span>
            <input name="name" className='inputBlog' placeholder='Write your first name' type="text" required />
          </div>
          <div className="eachInputBox">
            <input name='email' value={`${user.email}`} style={{ display: "none" }} className='inputBlog' placeholder='Write your email' type="email" required />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Message</label>
            <textarea name="message" className="form-control" placeholder='Write message here' rows="3" required></textarea>
          </div>
          <button type="submit" id='btnContact'  className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
