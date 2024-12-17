import React from 'react'
import logo from "../../assets/logo.png"
import "./Footer.css"

const Footer = () => {
  return (
    <footer>

    <div className='footer-logo'>
      <img src={logo}alt='logo'/>

    </div>
    {/* copyright */}
    <div className='footer-copyright'>
      <p>Copyright &copy; 2023 Mikasa Ackerman . All Rights Reserved</p>
      </div>
      {/* social links */}
      <ul className='footer-social-media'>
        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook"></i></a></li>
        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
        <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
      </ul>
    </footer>
  )
}

export default Footer
