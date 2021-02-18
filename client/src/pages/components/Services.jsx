import img_html from "../../images/html.png";
import img_css from "../../images/css.png";
import img_js from "../../images/js.jpg";
import img_expressjs from "../../images/expressjs.png";
import img_reactjs from "../../images/reactjs.jpg";
import img_mongodb from "../../images/mongodb.png";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h1 className="section_heading">
          <span>My</span> Services
        </h1>
        <p>My Skills on Different Things</p>
        <div className="card_wrapper">
          <div data-aos="fade-left" className="card">
            <img src={img_html} alt="html" />
            <h2>HTML</h2>
            <p />
            <div className="skills">
              <div className="percent">
                <div
                  data-aos="fade-right"
                  className="progress"
                  style={{ width: "98%", background: "#ff6600" }}
                ></div>
              </div>
              <span className="value">98%</span>
            </div>
          </div>
          <div data-aos="fade-right" className="card">
            <img src={img_css} alt="css" />
            <h2>CSS</h2>
            <p />
            <div className="skills">
              <div className="percent">
                <div
                  data-aos="fade-right"
                  className="progress"
                  style={{ width: "98%", background: "#3A9BD5" }}
                ></div>
              </div>
              <span className="value">98%</span>
            </div>
          </div>
          <div data-aos="fade-left" className="card">
            <img src={img_js} alt="javascript" />
            <h2>JavaScript</h2>
            <p />
            <div className="skills">
              <div className="percent">
                <div
                  data-aos="fade-right"
                  className="progress"
                  style={{ width: "95%", background: "#F4DF40" }}
                ></div>
              </div>
              <span className="value">95%</span>
            </div>
          </div>
          <div data-aos="fade-right" className="card">
            <img src={img_expressjs} alt="express" />
            <h2>Express JS</h2>
            <p />
            <div className="skills">
              <div className="percent">
                <div
                  data-aos="fade-right"
                  className="progress"
                  style={{ width: "94%", background: "#ECDD23" }}
                ></div>
              </div>
              <span className="value">94%</span>
            </div>
          </div>
          <div data-aos="fade-left" className="card">
            <img src={img_reactjs} alt="react" />
            <h2>React JS</h2>
            <p />
            <div className="skills">
              <div className="percent">
                <div
                  data-aos="fade-right"
                  className="progress"
                  style={{ width: "90%", background: "#87DAFE" }}
                ></div>
              </div>
              <span className="value">90%</span>
            </div>
          </div>
          <div data-aos="fade-right" className="card">
            <img src={img_mongodb} alt="mongodb" />
            <h2>MongoDB</h2>
            <p />
            <div className="skills">
              <div className="percent">
                <div
                  data-aos="fade-right"
                  className="progress"
                  style={{ width: "95%", background: "#4D9444" }}
                ></div>
              </div>
              <span className="value">95%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
