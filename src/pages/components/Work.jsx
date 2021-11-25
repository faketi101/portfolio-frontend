import DATA from "../../config/dataConfig";

const SingleCard = (props, index) => {
  return (
    <div
      data-aos={props.aos_data}
      className="card"
      key={`_work${index}`}
    >
     <a href={props.link} target="_blank" rel="noreferrer">
     <div className="overly">
        <span>{props.type}</span>
        <a href={props.link} target="_blank" rel="noreferrer">{props.name}</a>
      </div>
      <img src={`./images/${props.img}`} alt="work" />
     </a>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <h1 className="section_heading">
          <span>My </span>Works
        </h1>
        <p>Here is some projects and pages that I made for practises</p>
        <div className="card_wrapper">{DATA().work_data.map(SingleCard)}</div>
      </div>
    </section>
  );
};

export default Work;
