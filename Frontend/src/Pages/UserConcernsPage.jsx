import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  Container,
  CssBaseline,
  Button,
  Box,
  TextField,
  Typography,
  useMediaQuery,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../store/userAtom';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: '600',
          fontFamily: 'Nunito',
          color: '#000022',
        },
        outlined: {
          borderColor: '#C0C0C0',
          '&:hover': {
            borderColor: '#1F64FF',
          },
        },
        contained: {
          backgroundColor: '#1F64FF',
          color: 'white',
          '&:hover': {
            backgroundColor: '#1F64FF',
          },
        },
      },
    },
  },
});

const UserConcernsPage = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const username = useRecoilValue(userAtom)
  const navigate = useNavigate();

  const handleButtonClick = value => {
    setSelectedButton(value === selectedButton ? null : value);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container
        component="main"
        maxWidth="lg"
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Card
          style={{
            backgroundColor: '#ffffff',
            width: '100%',
            height: `${isSmallScreen ? '440px':'420px'}` ,
            maxWidth: '1000px',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '30px',
          }}>
          <Box style={{textAlign: 'center'}}>
            <img
              src="https://i.ibb.co/Qpv3fWR/logo-4.png"
              alt="Company Logo"
              style={{
                maxWidth: '100%',
                height: '70%',
              }}
            />
          </Box>
          <Typography
            variant="h6"
            style={{
              textAlign: 'center',
              fontFamily: 'Nunito',
              fontWeight: 'bold',
            }}>
            { `Welcome ${username}!`}
          </Typography>

          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '3rem',
              marginTop: '0.7rem',
            }}>
            <Box
              style={{
                flex: 1,
                maxWidth: '100px',
                border: 'none',
                borderBottom: '1px solid grey',
                marginTop: '5px',
              }}></Box>
            <Box style={{margin: '0 10px', fontSize: '10px'}}>
              Choose from the following
            </Box>
            <Box
              style={{
                flex: 1,
                maxWidth: '100px',
                border: 'none',
                borderBottom: '1px solid grey',
                marginTop: '5px',
              }}></Box>
          </Box>
          <Box
            display={isSmallScreen ? 'flex' : 'flex'}
            flexDirection={isSmallScreen ? 'column' : 'row'}
            justifyContent="space-around"
            alignItems={isSmallScreen?"center":""}
            marginBottom="10px">
            <Button
              onClick={() => handleButtonClick('Developer')}
              variant={
                selectedButton === 'Developer' ? 'contained' : 'outlined'
              }
              sx={{
                width: '200px',
                marginBottom: isSmallScreen ? '10px' : '0',
              }}>
              Developer
            </Button>
            <Button
              onClick={() => handleButtonClick('Organisation')}
              variant={
                selectedButton === 'Organisation' ? 'contained' : 'outlined'
              }
              sx={{
                width: '200px',
                marginBottom: isSmallScreen ? '10px' : '0',
              }}>
              Organisation
            </Button>
            <Button
              onClick={() => handleButtonClick('Company')}
              variant={selectedButton === 'Company' ? 'contained' : 'outlined'}
              sx={{
                width: '200px',
                marginBottom: isSmallScreen ? '10px' : '0',
              }}>
              Company
            </Button>
          </Box>

          {selectedButton && (
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                gap: 2,
                alignItems: 'center',
                height: '60%',
                flexDirection: isSmallScreen ? 'column' : 'row',
              }}>
              <TextField
                size="small"
                placeholder={`${selectedButton} Name`}
                sx={{width: isSmallScreen ? '100%' : '40%'}}
              />
              <Button
              onClick={()=>navigate('/hosting')}
                type="submit"
                size="medium"
                variant="contained"
                color="primary">
                Submit
              </Button>
            </Box>
          )}
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default UserConcernsPage;
