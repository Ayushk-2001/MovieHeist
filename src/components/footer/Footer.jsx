import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
               <b> Discover, Watch, Enjoy: Your Movie Journey</b><br></br>

🎬 Explore Movies: Dive into our curated collection sourced from the TMDB API, spanning genres and languages.<br></br>

📽️ Watch Trailers: Preview the excitement with trailers, helping you choose the perfect flick.<br></br>

🎥 Personalized Picks: Receive tailored recommendations based on your tastes and preferences.<br></br>

🔥 Seamless Streaming: Enjoy high-quality movies on any device, anytime.<br></br>

🌐 Connect with Us: Join our community, share thoughts, and stay updated on the latest releases.<br></br>

📞 Need Help?: Reach out to our friendly support team for assistance.<br></br>

📣 Follow Us: Stay tuned for updates, promotions, and more via our social media channels.<br></br>

🍿 Start Watching: Begin your cinematic journey today!<br></br>
                </div>
                <div className="socialIcons">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
