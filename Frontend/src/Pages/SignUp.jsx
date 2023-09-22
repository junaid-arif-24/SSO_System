import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {
  Container,
  Card,
  Grid,
  Typography,
  Button,
  Link,
  CssBaseline,
  createTheme,
  ThemeProvider,
  Box,
} from '@mui/material';
import VerticalLine from '../components/VerticalLine';
import FormField from '../components/FormField';
import SocialButtons from '../components/SocialButtons';
import VectorImg from '../assets/Vector.png';
import {useRecoilState} from 'recoil';
import {userAtom} from '../store/userAtom';
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: '0.2rem',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: '4px',
          fontSize: '12px',
        },
      },
    },
  },
});

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();
  const [, setUsername] = useRecoilState(userAtom);
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        },
      );
      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
        localStorage.setItem('token', data.token);
        const newUsername = formData.firstName + ' ' + formData.lastName;
        localStorage.setItem('username', newUsername);
        setUsername(newUsername);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
        navigate('/concern');
      } else {
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleChange = e => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const inputProps = {
    InputProps: {
      style: {fontSize: '10px'},
    },
    InputLabelProps: {
      shrink: false,
    },
  };
  const fetchAuthUser = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/auth/user`,
        {
          method: 'GET',
          credentials: 'include',
        },
      );

      if (response.ok) {
        const data = await response.json();
        console.log('User Authenticated!');
        const newUsername = data.fullname;
        localStorage.setItem('username', newUsername);
        setUsername(newUsername);
        navigate('/concern');
      } else {
        console.log('Not properly authenticated');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const redirectToGoogleSSO = async () => {
    const googleLoginURL = `${import.meta.env.VITE_BACKEND_URL}/auth/google`;
    window.open(googleLoginURL, '_self');

    fetchAuthUser();
  };

  const redirectToGithubSSO = async () => {
    const githubLoginURL = `${import.meta.env.VITE_BACKEND_URL}/auth/github`;
    window.open(githubLoginURL, '_self');
    fetchAuthUser();
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
            maxWidth: '900px',
            padding: '1.5rem',
            display: 'flex',
            gap: 5,
            flexDirection: 'column',
            maxHeight: '550px',
            borderTopRightRadius: '30px',
            borderBottomLeftRadius: '30px',
          }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div style={{textAlign: 'center'}}>
                <img
                  src="https://i.ibb.co/Qpv3fWR/logo-4.png"
                  alt="Company Logo"
                  style={{
                    maxWidth: '80%',
                    height: '10%',
                  }}
                />
              </div>
              <Typography
                variant="h6"
                style={{
                  textAlign: 'center',
                  fontFamily: 'Nunito',
                  fontWeight: 800,
                }}>
                Hello!
              </Typography>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <div
                  style={{
                    flex: 1,
                    maxWidth: '100px',
                    border: 'none',
                    borderBottom: '1px solid #AAB2C873',
                    marginTop: '5px',
                  }}></div>
                <div
                  style={{
                    margin: '0 2px',
                    fontSize: '10px',
                    fontFamily: 'Nunito',
                    color: '#00002280',
                  }}>
                  Create Account
                </div>
                <div
                  style={{
                    flex: 1,
                    maxWidth: '100px',
                    border: 'none',
                    borderBottom: '1px solid #AAB2C873',
                    marginTop: '5px',
                  }}></div>
              </div>

              <form
                onSubmit={handleSubmit}
                style={{width: '90%', marginLeft: '1rem'}}>
                {[
                  'firstName',
                  'lastName',
                  'email',
                  'password',
                  'confirmPassword',
                ].map(field => (
                  <FormField
                    key={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    inputProps={inputProps}
                  />
                ))}

                <Button
                  variant="contained"
                  fullWidth
                  type="submit"
                  style={{
                    marginTop: '0.5rem',
                    backgroundColor: '#1F64FF',
                  }}
                  onClick={handleSubmit}>
                  Signup
                </Button>
              </form>
              <Typography
                variant="subtitle2"
                style={{
                  fontSize: '12px',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                  fontFamily: 'Nunito',
                  fontWeight: 800,
                  color: '#00002280',
                }}>
                OR
              </Typography>
              <Box
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginTop: '0.5rem',
                }}>
                <SocialButtons
                  googleFunction={redirectToGoogleSSO}
                  githubFunction={redirectToGithubSSO}
                />
              </Box>
              <Typography
                variant="subtitle2"
                style={{
                  fontSize: '12px',
                  textAlign: 'center',
                  marginTop: '0.5rem',
                  fontFamily: 'Nunito',
                  fontWeight: 500,
                }}>
                Already have an Account? <Link href="#">Login</Link>
              </Typography>
            </Grid>
            <VerticalLine />
            <Grid item xs={12} sm={5.5}>
              <Box
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '80%',
                }}>
                <img
                  src="https://i.ibb.co/rQwRZzL/bro.png"
                  alt="Company Logo"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '350px',
                  }}
                />
              </Box>
              <img
                src={VectorImg}
                width={'110%'}
                style={{alignSelf: 'flex-end'}}
              />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
