import React from 'react';
import '../styles/ourteam.css'; // Adjust the path based on your project structure
import PP from '../assets/rp.avif';
import PC from '../assets/rag.jpg';
import PJ from '../assets/siv.jpg';
import PS from '../assets/tan.jpg';
import PK from '../assets/kus.jpg';
import PJK from '../assets/ajk.jpg';
import MP from '../assets/MP.jpg';

const TeamSection = () => {
  return (
    <div className="container2">
      
    <div className="container222">
    <h1 className="heading" ><b>Faculty Coordinator</b></h1>
   
      <div className="row faculty-row">
        <div className="col-md-12 col-sm-12">
          <div className="faculty-rep less-height">
            <div className="faculty-image">
              <img src={MP} alt="" />
            </div>
            <br />
            <div className="details">
              <p>Dr. Mayur Parate</p>
              <div className="icons">
              
              <a href="https://www.linkedin.com/in/mayur-parate-66727b6a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fab fa-linkedin"></i>
              </a>
             
              <a href="mailto:mparate@iiitn.ac.in">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
              
            </div>
          </div>
        </div>
      </div>
      <h1 className="heading1" ><b>Developer</b></h1>
      <div className="">
        <div className="col-md-12 col-sm-12">
  
        </div>
      </div>

      <div className="row faculty-row">
        {/* First Counsellor */}
        <div className="col-md-4 col-sm-12">
          <div className="faculty-rep less-height">
            <div className="faculty-image">
              <img src={PJK} alt="Maria Morris" />
            </div>
            <div className="details">
              <p>Ajinkya Muley</p>
              <div className="icons">
            
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              
              <a href="mailto:bt22cse155@iiitn.ac.in">
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
              <img src={PC} alt="Yukti Rastogi" />
            </div>
            <div className="details">
              <p>Raghav Gupta</p>
              <div className="icons">
            
              <a href="https://www.linkedin.com/in/raghav-gupta-b00899264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fab fa-linkedin"></i>
              </a>
             
              <a href="mailto:bt22cse051@iiitn.ac.in">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            </div>
          </div>
        </div>
        

    
        
      </div>
      

      <div className="row faculty-row">
        {/* First Counsellor */}
        <div className="col-md-4 col-sm-12">
          <div className="faculty-rep less-height">
            <div className="faculty-image">
              <img src={PK} alt="Maria Morris" />
            </div>
            <div className="details">
              <p>Kushagra Srivastava</p>
              <div className="icons">
              
              <a href="https://www.linkedin.com/in/kushagra-srivastava-32690b250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fab fa-linkedin"></i>
              </a>
              
              <a href="mailto:bt22cse139@iiitn.ac.in">
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
              <img src={PS} alt="Yukti Rastogi" />
            </div>
            <div className="details">
              <p>Tanay Pandey</p>
              <div className="icons">
            
              <a href="https://www.linkedin.com/in/tanay-pandey-7532b8257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fab fa-linkedin"></i>
              </a>
              
              <a href="mailto:bt22cse074@iiitn.ac.in">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            </div>
          </div>
        </div>
        

        
          
        
        
      </div>
      <div className="row faculty-row">
        {/* First Counsellor */}
        <div className="col-md-4 col-sm-12">
          <div className="faculty-rep less-height">
            <div className="faculty-image">
              <img src={PJ} alt="Maria Morris" />
            </div>
            <div className="details">
              <p>Shivendra Tripathi</p>
              <div className="icons">
              
              <a href="https://www.linkedin.com/in/shivendra-tripathi-61a294274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i className="fab fa-linkedin"></i>
              </a>
              
              <a href="mailto:bt22cse009@iiitn.ac.in">
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






