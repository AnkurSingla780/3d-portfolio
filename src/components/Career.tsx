import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sales Development Intern</h4>
                <h5>AlphaAxis Business Services</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Assisted in lead generation and client outreach, supporting a sales
              pipeline of 50+ prospects. Organized and maintained client interaction
              data, improving follow-up efficiency and tracking.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Social Intern</h4>
                <h5>Bharat Vikas Parishad</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Designed 10+ presentations and documents, improving teaching and content
              delivery quality. Taught 25+ underprivileged students, enhancing
              engagement and learning consistency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE</h4>
                <h5>UPES (University of Petroleum and Energy Studies)</h5>
              </div>
              <h3>2023-27</h3>
            </div>
            <p>
              Pursuing B.Tech Computer Science Engineering with a specialization in
              emerging technologies, maintaining a CGPA of 8.58/10.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
