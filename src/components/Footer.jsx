import React from 'react'
import { FaWhatsapp, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './Footer.css'

function Footer() {
  return (
      <div className="footer">
      <h2>Contact Us</h2>

      <p className="contact">
        <MdEmail className="icon" />
        resumebuilder@gmail.com
      </p>

      <p className="contact">
        <FaPhone className="icon" />
        9087654321
      </p>

      <h3>Connect With Us</h3>

      <div className="social">
        <FaWhatsapp />
        <FaFacebook />
        <FaInstagram />
      </div>

      <p className="bottom">
        Designed & built with <span>❤️</span> using React
      </p>
    </div>
  )
}

export default Footer
