import React from 'react';
import {IconButton} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

const SocialButtons = ({googleFunction, githubFunction}) => {
  return (
    <>
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
          marginLeft: '1rem',
        }}
        onClick={githubFunction}>
        Signup with Github
        <GitHubIcon style={{marginLeft: '0.5rem'}} />
      </IconButton>
    </>
  );
};

export default SocialButtons;
