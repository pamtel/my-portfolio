import React from 'react'
import ContactItem from '../Components/ContactItem'
import Tittle from '../Components/Tittle'
import phone from '../img/phone.svg'
import email from '../img/emailme.svg'
import location from '../img/location.svg'


function Contact() {
    return (
        <>
        <Tittle title={'Contact Me'} span={'Contact Me'}/>
        <div className="ContactPage">
            <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d7928.758063332105!2d3.583986371486005!3d6.47358089172863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x103bf9f986d9ffad%3A0xe9eed330907a0ade!2sPhase%202%20Lekki%20Gardens%2C%20Lekki!3m2!1d6.477322099999999!2d3.5915557!4m5!1s0x103bf75df5c74367%3A0x6a7e7df9d6c1cd4a!2sLekki!3m2!1d6.4698419!2d3.5851718!5e0!3m2!1sen!2sng!4v1616338626315!5m2!1sen!2sng" width="200" height="320" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contact-sect">
                <ContactItem icon={phone} text1={"+234 7036648787"} text2={"+234 8183130278"} title={'Phone'}/>
                <ContactItem icon={email} text1={"pamelaakosahiante@gmail.com"} text2={"pamelaahiante@yahoo.com"} title={'Email'}/>
                <ContactItem icon={location} text1={"Lekki-Ajah, Lagos"} title={'Location'}/>
            </div>
        </div>
        </>
    )
}

export default Contact
