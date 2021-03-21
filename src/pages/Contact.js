import React from 'react'
import ContactItem from '../Components/ContactItem'
import phone from '../img/phone.svg'
import email from '../img/emailme.svg'
import github from '../img/github.png'


function Contact() {
    return (
        <div className="ContactPage">
            <div className="map-sect"></div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={"+234 7036648787"} text2={"+234 8183130278"} title={'Phone'}/>
                <ContactItem icon={email} text1={"+234 7036648787"} text2={"+234 8183130278"} title={'Email'}/>
                <ContactItem icon={github} text1={"+234 7036648787"} text2={"+234 8183130278"} title={'Github'}/>
            </div>
        </div>
    )
}

export default Contact
