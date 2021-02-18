import img_work_1 from "../../images/ph-1.png";
import img_work_2 from "../../images/ph-1.png";
import img_work_3 from "../../images/ph-1.png";

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <h1 className="section_heading">
          <span>My </span>Works
        </h1>
        <p>Here is some projects and pages that I made for practises</p>
        <div className="card_wrapper">
          <div data-aos="fade-right" className="card">
            <div className="overly">
              <span>Caregory</span>
              <a href>Web Development</a>
            </div>
            <img src={img_work_1} alt="work" />
          </div>
          <div data-aos="fade-left" className="card">
            <div className="overly">
              <span>Caregory</span>
              <a href>Web Development</a>
            </div>
            <img src={img_work_2} alt="work" />
          </div>
          <div data-aos="fade-right" className="card">
            <div className="overly">
              <span>Caregory</span>
              <a href>Web Development</a>
            </div>
            <img src={img_work_3} alt="work" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
