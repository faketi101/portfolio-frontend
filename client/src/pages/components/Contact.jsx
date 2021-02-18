const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h1 data-aos="slide-right" className="section_heading">
          <span>Contact </span>ME
        </h1>
        <p data-aos="slide-right">Email or Send a Message for me</p>
        <div className="card_wrapper">
          <div data-aos="slide-right" data-aos-delay={400} className="card">
            <i className="fas fa-envelope" />
            <h1>Email ME At</h1>
            <h6>coding.beast.404@gmail.com</h6>
          </div>
        </div>
        <form data-aos="slide-right" action>
          <div className="input_wrap">
            <input
              type="text"
              autoComplete="none"
              name="name"
              placeholder="Your Name"
            />
            <input
              type="email"
              autoComplete="none"
              name="email"
              placeholder="Your Email"
            />
          </div>
          <div className="input_wrap_two">
            <input
              type="text"
              autoComplete="none"
              name="subject"
              placeholder="Your Subject"
            />
            <textarea
              name="message"
              cols={30}
              rows={10}
              placeholder="Your Message"
              defaultValue={""}
            />
          </div>
          <div className="btn_wrapper">
            <button type="submit" className="btn btn_primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
