import {Box, List, ListItem, ListItemText, Typography} from '@mui/material';
import { menuData } from '../../Utils/data';
import GridImage from '../../assets/Grid.png';
function DashboardMenu() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column', 
        backgroundColor: '#transparent', 
        height: '100vh',
        width: '200px',
        alignItems:"center",
        fontSize:"8px",
        p:"0 1rem"
        
      }}>
      <List>
      <ListItem sx={{textAlign:"center",marginTop:"1rem",marginBottom:"1rem"}}>
      <img
              src="https://i.ibb.co/Qpv3fWR/logo-4.png"
              alt="Company Logo"
              style={{
                maxWidth: '80%',
                maxHeight: '50px',
              }}
            />
      </ListItem>

        <ListItem button sx={{display:"flex",gap:2 , borderRadius:"25px",backgroundColor:"#fff"}}>
          
            <img src={GridImage} />
          
            <ListItemText
            primary={
              <Typography
                variant="inherit" 
                sx={{ color: 'blue', fontSize: '14px' }} 
              >
                Dashboard
              </Typography>
            }
          />
        </ListItem>
        {menuData.map((item, index) => (
  <ListItem button sx={{ display: "flex", gap: 2 }} key={index}>
    <img src={item.link} alt="Icon" />
    <ListItemText
      primary={
        <Typography
          variant="inherit" 
          sx={{ fontSize: '14px',color:"#000000" }} 
        >
          {item.name}
        </Typography>
      }
    />
  </ListItem>
))}

      </List>
    </Box>
  );
}

export default DashboardMenu;
