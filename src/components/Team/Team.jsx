import { Link } from "react-router-dom";
import dots from "/src/assets/images/team/dots.svg";
import team01 from "/src/assets/images/team/team-01.png";
import team02 from "/src/assets/images/team/team-02.png";
import team03 from "/src/assets/images/team/team-03.png";
import team04 from "/src/assets/images/team/team-04.png";
import "./Team.scss";

function Team() {
  const teamMembers = [
    {
      name: "Abby Gnawali",
      title: "Software Engineer",
      image: team01,
      linkedin: "https://www.linkedin.com/in/abhilashagnawali/",
      github: "https://github.com/abbygnawali",
    },
    {
      name: "Humaira Tasnim",
      title: "Software Engineer",
      image: team02,
      linkedin: "https://www.linkedin.com/in/humairatasnim/",
      github: "https://github.com/humairatasnim",
    },
    {
      name: "Shay Babaki",
      title: "Software Engineer",
      image: team03,
      linkedin: "https://www.linkedin.com/in/shaybabaki/",
      github: "https://github.com/sbabaki",
    },
    {
      name: "Siri Damineni",
      title: "Software Engineer",
      image: team04,
      linkedin: "https://www.linkedin.com/in/siridamineni/",
      github: "https://github.com/siridamineni",
    },
  ];

  return (
    <>
      <section id="team" className="ip-team">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ip-section-title mx-auto text-center">
                <span>Our Team</span>
                <h2>Meet the Scripters</h2>
                <p>
                  Our team is passionate about innovation, collaboration, and
                  delivering impactful solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {teamMembers.map((member, index) => (
              <div className="col-xl-3 col-lg-3 col-sm-6" key={index}>
                <div className="ip-single-team">
                  <div className="ip-team-image-wrapper">
                    <div className="ip-team-image">
                      <img src={member.image} alt={`${member.name}`} />
                    </div>

                    <img src={dots} alt="shape" className="shape shape-1" />
                  </div>
                  <div className="ip-team-info">
                    <h5>{member.name}</h5>
                    <h6>{member.title}</h6>
                  </div>
                  <ul className="ip-team-socials">
                    <li>
                      <Link to={member.linkedin} target="_blank">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to={member.github} target="_blank">
                        <i className="fa-brands fa-github"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
