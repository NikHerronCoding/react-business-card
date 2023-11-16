import React from "react"


export default function Header() {
    return (
        <div className="header">
            <img className="headshot" src="./src/assets/images/OSMSHIELD-7969-min.jpg" />
            <h1>Nik Herron</h1>
            <h3>Frontend Developer</h3>
            <p className="location">Denver, CO</p>
            <a className="portfolio-link" href="https://nikherroncoding.github.io/">
                <p>https://nikherroncoding.github.io/</p>
            </a>
           
            <div className="button-container">
                <button id="email-button"><img id="email-logo"src="./src/assets/icons/Mail.png"/> Email </button>
                <a href="https://www.linkedin.com/in/nikolas-herron/"><button id="linkedin-button"> <img id="linkedin-logo" src="./src/assets/icons/linkedin-svgrepo-com.svg"/>LinkedIn </button> </a>
            </div>

        </div>
    )
}