import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Home.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import img1 from './ironman1.jpg';
import img2 from './ironman2.jpg';
import img3 from './ironman3.jpg';
import img4 from './manofsteel.jpg';
import AppBar from '@mui/material/AppBar';
import {Typography,Toolbar,ThemeProvider,createTheme,Button } from '@mui/material';
export default function Design() {
  let name = JSON.parse(localStorage.getItem("name") || "")
  const darkTheme = createTheme({
      palette: {
        mode: 'dark',
        primary: {
          main: '#1976D2',
        },
      },
    });
 const arrayImages=[{title:"Iron Man",paragraph:"(2008)",images:img1},
                    {title:"Iron Man 3",paragraph:"(2013)",images:img2},
                    {title:"Man Of Steel",paragraph:"(2013)",images:img4},
                    {title:"Iron Man 2",paragraph:"(2010)",images:img3} ]
 //const items = JSON.parse(localStorage.getItem('items'));
return (
  <Box
  component="span"
  sx={{ display: 'inline-block', transform: 'scale(0.8)'}}
>
  <Card sx={{ Height:1000,marginLeft:20,borderRadius: 2}}>
     <ThemeProvider theme={darkTheme}>
      <AppBar position="static" color={"secondary"}>
      <Toolbar variant="dense">
      <Link to='/Login'><Button variant='contained'>LogOut</Button></Link>
      <Typography component="div" sx={{ marginLeft: 59,height:80}}>
       <h1>HOOKED</h1>
      </Typography>
      <Typography  component="div" sx={{marginLeft: "auto"}}>
        <p>WELCOME {name}</p>
      </Typography>
      </Toolbar>
      </AppBar>
      </ThemeProvider><br/><br/>
    <div className='txtdiv'>
      <span>
      <input type="text" />
      <button>SEARCH</button>
      </span><br/>
      <h6>Sharing a few of our favourite movies</h6>
      </div><br/>
      {arrayImages.map((item) => {
          return(
      <div className='pics'>
        <h3>{item.title}</h3>
     <div>
     <img
      src={item.images}
      alt=""/> </div>
      <p>{item.paragraph}</p>
    </div>
      )})
    }
  </Card>
  </Box>
);
}