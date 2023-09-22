import {Box, useMediaQuery} from '@mui/material';
import DashboardMenu from '../components/Dashboard/DashboardMenu';
import DashboardNavbar from '../components/Dashboard/DashboardNavbar';
import DashboardMain from '../components/Dashboard/DashboardMain';

const Dashboard = () => {
  const isMobile = useMediaQuery('(max-width: 768px)'); 

  return (
    <Box
      sx={{
        backgroundColor: '#C2DAFB',
        height: isMobile ? '190vh' : '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? 0 : 2, 
      }}>
      <DashboardMenu />
      <Box
        sx={{
          padding: '0.8rem',
          width: '80%',
          flexGrow: 1, 
        }}>
        {!isMobile && <DashboardNavbar />}
        <DashboardMain />
      </Box>
    </Box>
  );
};

export default Dashboard;
