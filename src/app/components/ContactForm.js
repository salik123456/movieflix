'use client'
import React, { useState } from 'react'

import styles from '../contact/contactmodule.css'
import { Mulish } from 'next/font/google'


const mulish = Mulish({
    weight: '400',
    subsets: ['latin'],
  })

const ContactForm =  () => {
  const [user,setUser]=useState({
    username:"",
    email:"",
    phone:"",
    message:""
  })
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const response = await fetch('/api/contact', {
            method:'POST',
            headers:{"Content_Type":"application/json"},
            body: JSON.stringify({
                username:user.username,
                email:user.email,
                phone:user.phone,
                message:user.message
            })
        })
        // Set the status based on the response from the API route
        if (response.status === 200) {
            setUser({
                username: "",
                email: "",
                phone: "",
                message: ""
            })
            setStatus('success');
        } else {
            setStatus('error');
        }

    }catch (e) {
        console.log(e)
    }

}


  const handleChange=(e)=>{
    const name=e.target.name
    const value=e.target.value
  
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
   <form className='contact_form' onSubmit={handleSubmit}>
<div className='input_field'>
<label htmlFor='username' className='label'>
   Username
    <input type='text' name='username' id='username' placeholder='enter your username' className={mulish.className} value={user.username} onChange={handleChange} autoComplete='off' required/>
</label>
</div>

<div className='input_field'>
<label htmlFor='email' className='label'>
  Email Address
    <input type='email' name='email' id='email' placeholder='enter your email' className={mulish.className}  value={user.email} onChange={handleChange} autoComplete='off' required/>
</label>
</div>


<div className='input_field'>
<label htmlFor='phone' className='label'>
   Contact No
    <input type='number' name='phone' id='phone' placeholder='enter your phone no' className={mulish.className}  value={user.phone} onChange={handleChange} autoComplete='off' required/>
</label>
</div>

<div className='input_field'>
<label htmlFor='message' className='label'>
   Message
    <textarea rows={5} name='message' id='message' placeholder='enter your message' className={mulish.className}  value={user.message} onChange={handleChange} autoComplete='off' />
</label>
</div>


<div>
{status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}
    <button type='submit ' className={mulish.className}>Send Message</button>
</div>

   </form>
  )
}


export default ContactForm
