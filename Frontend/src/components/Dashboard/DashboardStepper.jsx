import React from 'react';
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Button,
  Paper,
  Typography,
  Card,
  useMediaQuery
} from '@mui/material';
import RedDot from '../../assets/reddot.png';
import GreenDot from '../../assets/greendot.png';
import {steps} from '../../Utils/data';
import {productsAtom} from '../../store/userAtom';
import {useRecoilState} from 'recoil';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';

const DashboardStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [products, setProducts] = useRecoilState(productsAtom);
  const isMobile = useMediaQuery('(max-width: 768px)'); 

  const handleNext = service => {
    setProducts(prev => {
      return [...prev, { label: `Step ${activeStep + 1}`, ...service }];
    });
  
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
    console.log(products)
  };
  
 

  const handleReset = () => {
    setActiveStep(0);
    console.log(products)
    setProducts([]);
  };
  return (
    <Box sx={{width: '75%'}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.id}>
            <StepLabel
              optional={<Typography variant="caption">{step.title}</Typography>}
              StepIconComponent={CustomStepIcon}>
              {step.label}
            </StepLabel>
            <StepContent>
              <Box sx={{display: 'flex', gap: 3 ,flexDirection:isMobile?"column":"row"}}>
                {step.services.map((service) => {
                  return (
                    <Card
                      key={service._id}
                      onClick={() => handleNext(service)}
                      sx={{
                        width: '150px',
                        height: '50px',
                        padding: '0.5rem 1rem',
                        borderRadius: '15px',
                        display: 'flex',
                        boxShadow: '7px 7px 10px 0px #0000001A',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                      }}>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 2,
                        }}>
                        <Typography
                          variant="body1"
                          sx={{fontFamily: 'Nunito', fontWeight: 700}}>
                          {service.name}
                        </Typography>
                        <Box sx={{display: 'flex', gap: 0.3}}>
                          <img src={GreenDot} height="10px" width="10px" />
                          <img src={RedDot} height="10px" width="10px" />
                          <SyncOutlinedIcon
                            sx={{height: '10px', width: '15px'}}
                          />
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          height: '40px',
                          width: '40px',
                          backgroundColor: service.bg,
                          border: `1px solid ${service.bg}`,
                          borderRadius: '10px',
                          p: '0.2rem 0.6rem',
                        }}>
                        <img
                          src={`${service.imgLink}`}
                          height={'40px'}
                          width={'40px'}
                        />
                      </Box>
                    </Card>
                  );
                })}
              </Box>

              {/* <Box sx={{mb: 2}}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{mt: 1, mr: 1}}>
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{mt: 1, mr: 1}}>
                    Back
                  </Button>
                </div>
              </Box> */}
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{p: 3}}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{mt: 1, mr: 1}}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default DashboardStepper;

const CustomStepIcon = ({completed}) => (
  <div
    style={{
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      backgroundColor: completed ? '#1976D2' : 'transparent',
      border: `2px solid ${completed ? 'transparent' : '#1976D2'}`,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: completed ? '#fff' : '#1976D2',
    }}>
    {completed ? (
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#fff',
        }}
      />
    ) : null}
  </div>
);
