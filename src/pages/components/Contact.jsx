import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Notify from "../../Components/notify/Notify";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [errInp, setErrInp] = useState("");
  const submitMail = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const from = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;
    const post_obj = {
      name,
      from,
      subject,
      message,
    };
    // console.log(post_obj);
    let link = "https://coderti-server.herokuapp.com/sendmail";

    const validation = () => {
      if (!name) {
        toast.error("Name input must be filled");
        setErrInp("name");
        return false;
      } else if (!from) {
        setErrInp("email");
        toast.error("Email input must be filled");
        return false;
      } else if (!subject) {
        setErrInp("subject");
        toast.error("Subject input must be filled");
        return false;
      } else if (!message) {
        setErrInp("message");
        toast.error("Message input must be filled");
        return false;
      } else {
        return true;
      }
    };
    // console.log(validation());
    try {
      if (validation()) {
        setLoading(true);
        let response = await axios.post(link, post_obj);
        setLoading(false);
        e.target.reset();
        if (response.status === 200) {
          toast.success("Mail has sent to Coder TI");
        }
      }
    } catch (error) {
      setLoading(false);
      // console.dir(error);
      toast.error(error?.response?.data?.error || "Something Went Wrong !");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      {/* {loading ? toast.info("Sending") : null} */}
      {loading ? <Notify text="Sending mail..." /> : null}
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
          <form data-aos="slide-right" onSubmit={submitMail}>
            <div className="input_wrap">
              <input
                className={errInp === "name" ? "invInput" : null}
                type="text"
                autoComplete="none"
                name="name"
                placeholder="Your Name"
              />
              <input
                className={errInp === "email" ? "invInput" : null}
                type="email"
                autoComplete="none"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div className="input_wrap_two">
              <input
                className={errInp === "subject" ? "invInput" : null}
                type="text"
                autoComplete="none"
                name="subject"
                placeholder="Your Subject"
              />
              <textarea
                className={errInp === "message" ? "invInput" : null}
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
    </>
  );
};
export default Contact;
