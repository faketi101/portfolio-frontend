import me_one from "../../images/me-1.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav id="main_nav" className="flex items_center justify_between">
            <div className="left flex items_center">
              <div className="branding">
                Coder <span>TI</span>
              </div>
              <div>
                <a href="#">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#work">work</a>
              </div>
            </div>
            <div className="right">
              <a href="#contact" className="btn btn_primary">
                Contact
              </a>
            </div>
          </nav>
          <div className="hero flex items_center justify_between">
            <div
              data-aos="fade-up-left"
              className="left flex_one flex justify_center"
            >
              <img src={me_one} alt srcSet />
            </div>
            <div className="right flex_one">
              <h6 data-aos="fade-right">Tarikul</h6>
              <h1 data-aos="fade-left">
                I'm a <span data-aos="fade-up">Developer</span>
              </h1>
              <p data-aos="zoom-in">I develop websites with MERN </p>
              <div data-aos="fade-right">
                <a href="#about" className="btn btn_secondary">
                  About ME
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
