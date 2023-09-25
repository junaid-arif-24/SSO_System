import React from 'react';
import {IconButton,Box,useMediaQuery} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialButtons = ({googleFunction, githubFunction}) => {
  const isMobile = useMediaQuery('(max-width: 768px)'); 

  return (
    <Box sx={{display:"flex" , flexDirection:isMobile?'column':'row',alignItems:isMobile?'center':'' ,gap:3 , margin:isMobile?'1rem 0':''}}>
      <IconButton
        style={{
          width: '160px',
          fontSize: '12px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          height: '35px',
        }}
        onClick={googleFunction}>
        Signup with Google
        <GoogleIcon style={{marginLeft: '0.5rem'}} />
      </IconButton>
      <IconButton
        style={{
          width: '160px',
          fontSize: '12px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          height: '35px',
          
        }}
        onClick={githubFunction}>
        Signup with Github
        <GitHubIcon style={{marginLeft: '0.5rem'}} />
      </IconButton>
    </Box>
  );
};

export default SocialButtons;
