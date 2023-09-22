import  { useEffect, useState } from 'react'
import { CircularProgress, Typography, Box } from "@mui/material";
const CustomCircularProgress = ({products}) => {
   const [barValue,setBarValue] = useState(0);
   useEffect(()=>{
       if(products.length === 1) {setBarValue(40)}
      else if(products.length === 2) {setBarValue(80)}
      else if(products.length === 3) {setBarValue(100)}
      else{
        setBarValue(0)
      }
   },[products])

    const circleStyle = {
      color: "#0D64DE"
    };
  
    return (
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          value={barValue}
          thickness={8} 
          sx={circleStyle}
          size={70}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem"
          }}
        >
          <Typography variant="caption" component="div" color="text.secondary">
          {`${barValue}%`}
          </Typography>
        </Box>
      </Box>
    );
  }

export default CustomCircularProgress