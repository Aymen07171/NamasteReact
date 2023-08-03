import { faTwitter, faGithub, faDiscord, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { footer_data } from "../Helpers/Constant";
import appstore from "../Images/icon-AppStore.webp";
import playstore from "../Images/icon-GooglePlay.webp";
import { footData } from "../Helpers/Helper";

const Footer = () => {
  return (
    <div className="footer">
      <div key="footerContent" className="footer-content">
        {footer_data.map(footData)}
        <div key="footerDownloadLink"className="download-link">
          <a href="/"><img src={appstore}/></a>
          <a href="/"><img src={playstore}/></a>
        </div>
      </div>
      <div key="footerFoot"className="footer-data">
        <p className="info">❤️ Made with Love for Food by Varun 💛</p>
        <div className="contact-links">
          <a
            className="linkedin"
            href="https://linkedin.com/in/varunpelluru"
            target="_blank"
            title="Varun Pelluru's Linkedin Profile"
          >
            <FontAwesomeIcon icon={faLinkedin}/>
          </a>
          <a
            className="github"
            href="https://github.com/varunmsd99"
            target="_blank"
            title="Varun Pelluru's GitHub repo"
          >
            <FontAwesomeIcon icon={faGithub}/>
          </a>
          <a
            className="twitter"
            href="https://twitter.com/varun_vsgvk"
            target="_blank"
            title="Varun Pelluru's Twitter Profile"
          >
            <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a
            className="discord"
            href="https://discordapp.com/users/535798915518169094"
            target="_blank"
            title="Varun Pelluru's Discord Profile"
          >
            <FontAwesomeIcon icon={faDiscord}/>
          </a>
        </div>
        <p className="copyright-info" title="Just Kiddin' There is no Copyright for this">©️ 2023 FoodVilla</p>
      </div>
    </div>
  );
};

export default Footer;
