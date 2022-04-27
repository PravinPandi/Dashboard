import React, { useState } from "react";
import './SignUp.css'
import { useNavigate, Link } from "react-router-dom";

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {ThemeProvider,
  IconButton,
  Paper,
  tableCellClasses,
  Button,
  Stack,
  Grid,
  createTheme,
  Typography,
  Container,
  Card,
  TextField,
  MenuItem,
  Box,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogActions,
  styled,
  CssBaseline} from "@mui/material"
import Login from "./Login";
const theme = createTheme();
function Registration() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(true);
  function handleFormSubmit(e :React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name || !password || !email) {
      alert('Please Fill every Field')
    } else {
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem(
        "password",
        JSON.stringify(password)
      );
      console.log("Saved in Local Storage");
      setLogin(!login);
      navigate('/Login')
    }
  }
  return (
  <>
    <div>
      {" "}
          {login ? (
        <Card sx={{width:400 ,marginLeft:60,height:500,marginTop:5,paddingTop:0,paddingInline:0,borderRadius: 2}}>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <form onSubmit={handleFormSubmit}>
          <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <AccountCircleIcon sx={{ m: 1,fontWeight: 'bold',fontSize: 50,  }}>
            <LockOutlinedIcon />
          </AccountCircleIcon>
        <Typography component="div" variant="h5" sx={{marginTop:3,height:50}}>
            Register
          </Typography>
          <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
          <TextField
            sx={{textAlign: "right"}}
            name="name"
            label="Name"
            onChange={(event) => setName(event.target.value)}
            variant='outlined' fullWidth>
              Name
            </TextField><br/><br/>
            </Grid>
            <Grid item xs={12} sm={12}>
        <TextField name="email"
          variant='outlined'
          label="Email address"
          onChange={(event) => setEmail(event.target.value)}
          fullWidth>
            Email address
        </TextField><br/><br/>
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField name="password"
          variant='outlined'
          label="Password"
          onChange={(event) => setPassword(event.target.value)}
          fullWidth>
            Password
        </TextField><br/><br/>
        </Grid>
        </Grid>
        <Button variant='contained' type="submit" >
          Sign Up
        </Button>
        <p>Already a Member? <Link to='/Login'>LogIn </Link></p>
        </Box>
  </form>
  </Container>
  </ThemeProvider>
      </Card>
          ) : (
            <Login />
          )}
    </div>
    </>
  );
}
export default Registration;