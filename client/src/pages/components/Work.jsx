import DATA from "../../config/dataConfig";
import {Link} from "react-router-dom"
const SingleCard = (props, index) => {
  return (
    <div
      // onClick={(window.location.href = `/work/${props.link}`)}
      data-aos={props.aos_data}
      className="card"
      key={`_work${index}`}
    >
     <Link to={props.link}>
     <div className="overly">
        <span>{props.type}</span>
        <Link to={props.link}>{props.name}</Link>
      </div>
      <img src={`./images/${props.img}`} alt="work" />
     </Link>
    </div>
  );
};

const Work = () => {
  return (
    <section id="work" className="work">
      <div className="container">
        <h1 className="section_heading">
          <span>My </span>Work
        </h1>
        <p>Here is some projects and pages that I made for practises</p>
        <div className="card_wrapper">{DATA().work_data.map(SingleCard)}</div>
      </div>
    </section>
  );
};

export default Work;
