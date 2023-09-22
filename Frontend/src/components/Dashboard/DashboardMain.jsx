import {Box, Card, Typography,useMediaQuery} from '@mui/material';
import Switch from '@mui/material/Switch';
import DashboardStepper from './DashboardStepper';
import ProgressCard from './ProgressCard';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../store/userAtom';


const DashboardMain = () => {
  const username = useRecoilValue(userAtom);
  const isMobile = useMediaQuery('(max-width: 768px)'); 
  return (
    <Box
      sx={{
        width: '95%',
        height: isMobile?'100%':'87%',
        backgroundColor: '#FFFFFF',
        marginTop: '10px',
        borderRadius: '30px',
        padding: '1rem 1.5rem',
      }}>
      <Box
        sx={{
          height: '100px',
          backgroundImage:
            'linear-gradient(180deg, rgba(211, 230, 255, 0.31) 0%, rgba(231, 241, 255, 0) 100%), linear-gradient(0deg, #F6FAFF, #F6FAFF)',
          padding: '1rem',
          borderRadius: '25px',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Box>
          <Typography
            variant={isMobile?"h5":"h3"}
            sx={{fontFamily: 'Nunito', fontWeight: '800'}}>
            {` Hi ${username}!`}
          </Typography>
          <Typography
            variant={isMobile?"caption":"body2"}
            sx={{fontFamily: 'Nunito', fontWeight: '700', padding: '1rem 0'}}>
            Welcome to XeroCodee Ecosystem 😎
          </Typography>
        </Box>
        <Box
          sx={{display: 'flex',alignItems: 'flex-start',flexDirection:isMobile?"column":"row" }}>
          <Typography
            variant={isMobile?"caption":"body2"}
            sx={{fontFamily: 'Nunito', fontWeight: '700'}}>
            Test Mode
          </Typography>
          <Switch />
          <Typography
            variant={isMobile?"caption":"body2"}
            sx={{fontFamily: 'Nunito', fontWeight: '700'}}>
            Production Mode
          </Typography>
        </Box>
      </Box>
      <Box sx={{display: 'flex',flexDirection:isMobile?"column":"row",alignItems:isMobile?"center":"",justifyContent:isMobile?"space-between":''}}>
        <DashboardStepper />
        <ProgressCard/>
      </Box>
    </Box>
  );
};

export default DashboardMain;
