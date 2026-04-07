import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:ankursingla1975@gmail.com"
                data-cursor="disable"
              >
                Email — ankursingla1975@gmail.com
              </a>
            </p>
            <p>
              <a
                href="tel:+917988086879"
                data-cursor="disable"
              >
                Phone — +91 7988086879
              </a>
            </p>
            <h4>Education</h4>
            <p>
              B.Tech Computer Science Engineering, UPES (Dehradun) — 2023–2027
            </p>
            <p>
              Class XII (CBSE), M.D.A.V. Public School — 84.6%
            </p>
            <p>
              Class X (CBSE), M.D.A.V. Public School — 86.0%
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/AnkurSingla780"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/ankur-singla-394128274"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Ankur Singla</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
