import './SignUp.css'
import { TextField,Button,Grid,Card , Typography} from "@mui/material";
import React, { useState } from "react";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [namelog, setNamelog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [home, setHome] = useState(true);
    function handleLogin(e :React.FormEvent<HTMLFormElement>) {
      e.preventDefault();

      let pass = JSON.parse(localStorage.getItem("password") || "")
      let name = JSON.parse(localStorage.getItem("name") || "")
      if (!namelog){
        alert("Please Fill the Name");
      }else if(!passwordlog){
        alert("Please Enter the Password");
      } else if (passwordlog !== pass || namelog !== name) {
        alert("UserName or Password is wrong")
      } else {
        setHome(false);
        navigate('/Login/Home')
      }

    }
    return (
      <div>
        {home ? (
        <Card sx={{width:260 ,marginLeft:60,height:350,marginTop:7,paddingTop:2,paddingRight:1,paddingLeft:10,borderRadius: 2}}>
          <form onSubmit={handleLogin}>
          <Typography component="div" variant="h5"  sx={{ marginLeft:7,height:60,paddingTop:2}}>
            Log In
          </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={8} >
                <TextField
                  sx={{textAlign: "right"}}
                  name="name"
                  label="Name"
                  onChange={(event) => setNamelog(event.target.value)}
                  variant='outlined'
                  fullWidth>
                    Name
                  </TextField><br/><br/>
              </Grid>
            <Grid item xs={12} sm={8}>
        <TextField name="password"
              variant='outlined'
              label="Password"
              type="password"
              onChange={(event) => setPasswordlog(event.target.value)}
              fullWidth>
            Password
            </TextField><br/><br/>
            </Grid>
            </Grid>
            <Button type="submit" variant='contained'>
              Login
            </Button>
          </form>
        </Card>
        ) : (
          <Home />
        )}
      </div>
    );
  }
export default Login;