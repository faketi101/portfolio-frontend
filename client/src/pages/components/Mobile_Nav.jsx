import ToTop from "./ToTop";
// images
import hamberger from "../../images/hamberger.svg";
import times from "../../images/times.svg";

const Mobile_nav = () => {
  const open_mobile_nav = () => {
    const mobile_nav = document?.getElementById("mobile_nav");
    mobile_nav?.classList.toggle("open");
  };
  const close_mobile_nav = () => {
    const mobile_nav = document?.getElementById("mobile_nav");
    mobile_nav?.classList.remove("open");
  };
  return (
    <>
      <ToTop />
      <div className="side_main_wrapper">
        <button onClick={open_mobile_nav} className="hamberger" id="hamberger">
          <img src={hamberger} alt="hamberger" />
        </button>
        <div className="mobile_nav" id="mobile_nav">
          <button onClick={close_mobile_nav} className="times">
            <img src={times} alt="times" />
          </button>
          <div className="branding">
            Coder <span>TI</span>
          </div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#work">work</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Mobile_nav;
