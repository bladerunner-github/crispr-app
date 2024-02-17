import React from 'react'
import Button from '@mui/material/Button';
import "../styles/AboutUsSnippet.css"
import manasLogo from "../assets/WhatsApp_Image_2024-01-02_at_11.11.27_40ca8432-removebg-preview.png";
const AboutUsSnippet = () => 
{
  return (
    <div id="Front">
        <img src = { manasLogo } alt="font" />
        <p>
        MANAS, or “Mental Health Assistance for Navigating Academic Success”
        is an initiative by the students and administrators of IIIT Nagpur
        to identify and effectively tackle any social, mental or depressing
        issue that concerns any given student of the IIITN, it relies on
        trust, empathy and bond that the students of our college share
        within the community, and the support that students give to the
        programme and to each other.
        <br/><br/>
        <button onClick={() => window.open('/about-us', "_blank")} className='custom-btn btn-3'><span>Read More</span></button>
        </p>  
    </div>
    
  )
}

export default AboutUsSnippet