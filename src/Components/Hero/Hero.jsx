import React from "react"
import "./Hero.css"
import HeroImg from "../../asset/hero-img.png"


function Hero() {
return (
    <div className="container hero-container">
        <div className="hero">
            <div className="hero-content">
                <h1>Frontend <span>Developer</span></h1>
                <p>Expert in React, JavaScript, HTML5, CSS3, and modern web frameworks</p>
                <ul className="skills-list">
                    <li>Responsive Web Design</li>
                    <li>UI/UX Development</li>
                    <li>Performance Optimization</li>
                    <li>Cross-browser Compatibility</li>
                </ul>
                <button className="hero-cta-button">View Portfolio</button>
            </div>
            <div className="hero-img">
                <h1>Hello ,<span>Emmanuel</span> here</h1>
                <img src={HeroImg} alt="Hero" />
            </div>
        </div>
    </div>
)
}

export default Hero
