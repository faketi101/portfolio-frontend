import DATA from "../../config/dataConfig"

const Footer = () => {
  return (
    <footer className="footer">
      <div data-aos="slide-right" className="footer_social">
        <a href={DATA().social_links.github} target="_blank">
          <i className="fab fa-github" />
        </a>
        <a href={DATA().social_links.facebook} target="_blank">
          <i className="fab fa-facebook-f" />
        </a>
        <a href={DATA().social_links.twitter} target="_blank">
          <i className="fab fa-twitter" />
        </a>
        <a href={DATA().social_links.pinterest} target="_blank">
          <i className="fab fa-pinterest-p" />
        </a>
        <a href={DATA().social_links.instagram} target="_blank">
          <i className="fab fa-instagram" />
        </a>
      </div>
      <div data-aos="slide-right" className="copyright">
        Copyright 2021 © Website All Right Reserved
      </div>
    </footer>
  );
};
export default Footer;
