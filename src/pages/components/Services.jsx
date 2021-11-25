// import img_html from "../../images/html.png";
import DATA from "../../config/dataConfig";
const SingleCard = (props, index) => {
  const image = `./images/${props.img}`;
  return (
    <div data-aos={props.aos_data} className="card" key={`_k${index}`}>
      <img src={image} alt="html" />
      <h2>{props.name}</h2>
      <p />
      <div className="skills">
        <div className="percent">
          <div
            data-aos="fade-right"
            className="progress"
            style={{ width: props.percent, background: props.background }}
          ></div>
        </div>
        <span className="value">{props.percent}</span>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <h1 className="section_heading">
          <span>My</span> Services
        </h1>
        <p>My Skills on Different Things</p>
        <div className="card_wrapper">
          {DATA().service_data.map(SingleCard)}
        </div>
      </div>
    </section>
  );
};
export default Services;
