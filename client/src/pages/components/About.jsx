import me from "../../images/me.jpg";
const About = () => {
  return (
    <>
      <section data-aos="fade-right" id="about" className="about">
        <div className="container flex items_center about_inner_wrap">
          <div className="flex_one">
            <img
              data-aos="fade-up-left"
              className="about_me_img"
              src={me}
              alt="image"
              srcSet
            />
          </div>
          <div data-aos="fade-right" className="flex_one right">
            <h1>
              About <span>Me</span>
            </h1>
            <h3>Hello! I'm Tarikul Islam.</h3>
            <p>
              I'm a teenager boy who love to code. I started coding as a hobby.
              I know much of Web Development. I do both Frontend and Backend
              coding. I usually use React Js for Frontend and Express JS for
              Backend.
            </p>
            <div className="social">
              <a href>
                <i className="fab fa-github" />
              </a>
              <a href>
                <i className="fab fa-facebook-f" />
              </a>
              <a href>
                <i className="fab fa-twitter" />
              </a>
              <a href>
                <i className="fab fa-pinterest-p" />
              </a>
              <a href>
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
