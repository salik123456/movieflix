import React from 'react'
import styles from '../contact/contactmodule.css'
import { MdEmail, MdVoiceChat, MdForum } from "react-icons/md";
import Link from "next/link";

const ContactCard = () => {
  return (
    <div className='section'>
<div className='container'>
<div className='grid'>
    <div className='grid_card'>
    <i> <MdEmail /> </i>
                        <h2>Email</h2>
                        <p>Monday to Friday Expected </p>
                        <p className='last_para'>response time: 72 hours </p>
                        <Link href="/">  Send Email <span>-&gt;</span></Link>
    </div>

    <div className='grid_card'>
                        <i> <MdVoiceChat /> </i>
                        <h2>Live Chat</h2>
                        <p>Weekdays: 9 AM — 6 PM ET</p>
                        <p className='last_para'>Weekends: 9 AM — 5 PM ET </p>
                        <Link href="/" >  Chat Now <span>-&gt;</span></Link>
                    </div>


                    <div className='grid_card'>
                        <i> <MdForum /> </i>
                        <h2>Community Forum</h2>
                        <p>Monday to Friday Expected </p>
                        <p className='last_para'>response time: 72 hours </p>
                        <Link href="/" className='anchor_link'>  Ask The Community <span>-&gt;</span></Link>
                    </div>
</div>
</div>

    </div>
  )
}

export default ContactCard