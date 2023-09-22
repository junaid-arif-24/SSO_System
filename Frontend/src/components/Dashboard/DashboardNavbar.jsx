import {Box, Button, TextField, Typography} from '@mui/material';
import CardGiftcardOutlinedIcon from '@mui/icons-material/CardGiftcardOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const DashboardNavbar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}>
      <Box sx={{ml: '1rem'}}>
        <TextField
          sx={{
            backgroundColor: '#FFFFFF',
            border: 'none',
            borderRadius: '25px',
            '& .MuiOutlinedInput-root': {
              fontSize: '12px',
              paddingRight: '1px',
              paddingLeft: '5px',
              color: 'black',
              '& fieldset': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                borderColor: 'transparent',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent',
              },
            },
          }}
          variant="outlined"
          size="small"
          placeholder="search"
          InputProps={{
            endAdornment: (
              <Button
                variant="contained"
                size="medium"
                sx={{borderRadius: '25px'}}>
                <SearchOutlinedIcon />
              </Button>
            ),
          }}
        />
      </Box>
      <Box sx={{display: 'flex', gap: 2}}>
        <Button
          sx={{
            backgroundColor: '#FFC656',
            color: 'black',
            borderRadius: '25px',
            fontSize: '12px',
            textTransform: 'capitalize',
          }}>
          <CardGiftcardOutlinedIcon
            sx={{
              backgroundColor: '#FFFFFF',
              padding: '2px',
              borderRadius: '50px',
              marginRight: '3px',
              color: 'black',
            }}
          />
          Upgrade Plan
        </Button>
        <Button
          sx={{
            padding: '7px',
            backgroundColor: '#FFFFFF',
            minWidth: '5px !important',
            borderRadius: '7px',
          }}>
          <NotificationsOutlinedIcon />
        </Button>
        <Button
          sx={{
            padding: '7px',
            backgroundColor: '#FFFFFF',
            minWidth: '5px !important',
            borderRadius: '7px',
          }}>
          <EmailOutlinedIcon />
        </Button>
        <Button
          sx={{
            padding: '7px',
            backgroundColor: '#FFFFFF',
            minWidth: '5px !important',
            borderRadius: '7px',
          }}>
          <SettingsOutlinedIcon />
        </Button>
        <Button size="small" sx={{textTransform: 'capitalize', width: '100px'}}>
          <Typography
            variant="subtitle2"
            sx={{
              color: 'black',
              display: 'flex',
              alignItems: 'center',
              marginLeft: '25px',
            }}>
            XeroCodee <KeyboardArrowDownOutlinedIcon />{' '}
          </Typography>
        </Button>
        <Button
          sx={{
            padding: '7px',
            backgroundColor: '#FFFFFF',
            minWidth: '5px !important',
            borderRadius: '7px',
            marginRight: '7px',
          }}>
          <PersonOutlinedIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default DashboardNavbar;
