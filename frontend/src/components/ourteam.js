import React from 'react';
import '../styles/ourteam.css'; // Adjust the path based on your project structure
import PP from '../assets/rp.avif';

const TeamSection = () => {
  return (
    <div className="container2">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h1 className="heading" align="center"><b>Faculty Coordinator</b></h1>
        </div>
      </div>

      <div className="row faculty-row">
        <div className="col-md-12 col-sm-12">
          <div className="faculty-rep less-height">
            <div className="faculty-image">
              <img src={PP} alt="Dr. Somnath Maji" />
            </div>
            <br />
            <div className="details">
              <p>Dr. Mayur Parate</p>
              <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
             
              <a href="mailto:luna@example.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 col-sm-12">
          <h1 className="heading" align="center"><b>Developer</b></h1>
        </div>
      </div>

      <div className="row faculty-row">
        {/* First Counsellor */}
        <div className="col-md-4 col-sm-12">
          <div className="faculty-rep less-height">
            <div className="faculty-image">
              <img src={PP} alt="Maria Morris" />
            </div>
            <div className="details">
              <p>Ajinkya Muley</p>
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
        </div>

        {/* Second Counsellor */}
        <div className="col-md-4 col-sm-12">
          <div className="faculty-rep less-height">
            <div className="faculty-image">
              <img src={PP} alt="Yukti Rastogi" />
            </div>
            <div className="details">
              <p>Raghav Gupta</p>
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
        </div>
        

        {/* Third Counsellor */}
        <div className="col-md-4 col-sm-12">
          <div className="faculty-rep less-height">
            <div className="faculty-image">
              <img src={PP} alt="D. Phani Bhushan" />
            </div>
            <div className="details">
              <p>Kushagra Srivastava</p>
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
        </div>
        
      </div>
      <div className="row">
        <div className="col-md-12 col-sm-12">
         
        </div>
      </div>

      <div className="row faculty-row">
        {/* First Counsellor */}
        <div className="col-md-4 col-sm-12">
          <div className="faculty-rep less-height">
            <div className="faculty-image">
              <img src={PP} alt="Maria Morris" />
            </div>
            <div className="details">
              <p>Shivendra Tripathi</p>
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
        </div>

        {/* Second Counsellor */}
        <div className="col-md-4 col-sm-12">
          <div className="faculty-rep less-height">
            <div className="faculty-image">
              <img src={PP} alt="Yukti Rastogi" />
            </div>
            <div className="details">
              <p>Tanay Pandey</p>
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
        </div>
        

        
          
        
        
      </div>
    </div>
    </div>
  );
};

export default TeamSection;






