import React from "react" 

import githubLogo from '/assets/icons/github-142-svgrepo-com.svg'
import twitterLogo from '/assets/icons/twitter-rounded-svgrepo-com.svg'
import facebookLogo from '/assets/icons/facebook-svgrepo-com.svg'
import instagramLogo from '/assets/icons/instagram-svgrepo-com.svg'


export default function Footer() {
    return (
    <div className="footer">
        <a href="https://github.com/NikHerronCoding"><img className="footer-logo" src={githubLogo} alt="twitter logo"/></a>
        <a href="https://twitter.com/nikolas_herron"><img className="footer-logo" src={twitterLogo} alt="twitter logo"/></a>
        <a href=""><img  className="footer-logo" src={facebookLogo} alt="facebook logo"/></a>
        <a href=""><img src={instagramLogo} className="footer-logo"alt="image here"/></a>
    </div>
    )
}
