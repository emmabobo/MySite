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
                    <li><img width="64" height="64" src="https://img.icons8.com/nolan/64/web-design.png" alt="web-design"/><p>
                    Responsive Web Design</p></li>
                    <li><img width="64" height="64" src="https://img.icons8.com/nolan/64/web-design.png" alt="web-design"/><p>UI/UX Development</p></li>
                    <li><img width="64" height="64" src="https://img.icons8.com/nolan/64/web-design.png" alt="web-design"/><p>Performance Optimization</p></li>
                    <li><img width="64" height="64" src="https://img.icons8.com/nolan/64/web-design.png" alt="web-design"/><p>Cross-browser Compatibility</p></li>
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
