import React from 'react';
import '../styles/ourteam.css';
import PP from '../assets/pp.jpeg'; // Make sure the path to your image is correct

const TeamSection = () => {
  return (
    <section>
      <div className="row">
        <h1 className="heading">Our Team</h1>
      </div>
      <div className="row">
        {/* Member 1 */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src={PP} alt="Luna Turner" />
            </div>
            <h3>Ajinkya Muley</h3>
            <p>Developer</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/lunaturner" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:luna@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Member 2 */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src={PP} alt="Bryant Hall" />
            </div>
            <h3>Raghav Gupta</h3>
            <p>Developer</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/bryanthall" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:bryant@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Member 3 */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src={PP} alt="Hope Watkins" />
            </div>
            <h3>Kushagra Srivastava</h3>
            <p>Developer</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/hopewatkins" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:hope@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Member 4 */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src={PP} alt="John Doe" />
            </div>
            <h3>Tanay Pandey</h3>
            <p>Developer</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:john@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Member 5 */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src={PP} alt="Emily White" />
            </div>
            <h3>Shivendra Tripathi</h3>
            <p>Developer</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:john@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        </div>
        </section>
  );
};

export default TeamSection;



