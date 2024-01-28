import { Typography } from '@mui/joy'
import React from 'react'
import CrisperLogo from '../assets/CRISPR_black.png';
import '../styles/Banner.css'
const Banner = () => 
{
    return (
        <a href="http://192.168.77.84/" target="_blank" className='banner-to-crispr'>
              <h1 className='banner-heading'>Visit our Server</h1>
            <Typography  gutterBottom className='link'>
              
                <img className='banner-logo' src= {CrisperLogo} height={200} width={200}/>
            </Typography>
        </a>            
    )
}

export default Banner       