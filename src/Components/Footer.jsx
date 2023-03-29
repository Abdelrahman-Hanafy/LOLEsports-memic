import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <footer className="Footer">
        <div className="group-images-copyright">
            <div className="images">
                <Link className="item riot" href="http://www.riotgames.com" target="_blank">
                    <img src="https://am-a.akamaihd.net/image?resize=228:64&amp;f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Ffooter%2Friot-logo.png" className="image" alt="Riot Games" />
                </Link>
                <Link className="item lol" href="https://leagueoflegends.com" target="_blank">
                    <img src="https://am-a.akamaihd.net/image?resize=166:64&amp;f=http%3A%2F%2Fassets.lolesports.com%2Fwatch%2Ffooter%2Flol.png" className="image" alt="League of Legends" />
                </Link>
            </div>
            <div className="copyright">© 2023 Riot Games. All Rights Reserved.
                <div className="links">
                    <Link className="link" href="https://www.riotgames.com/en/terms-of-service" target="_blank">Terms of Service</Link>
                    <Link className="link" href="https://www.riotgames.com/en/privacy-notice" target="_blank">Privacy Notice</Link>
                    <Link className="link" href="https://www.riotgames.com/en/accessibility" target="_blank">Accessibility</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer