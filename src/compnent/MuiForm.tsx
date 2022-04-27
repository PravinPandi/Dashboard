import * as React from 'react';
import { useState} from 'react'
import "./MuiForm.css";
import Login from "./Log";
import { Form, Alert } from "react-bootstrap";


import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

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

        

const theme = createTheme();
type arrProps={
  name: string,
  pass: string,
  lname: string,
  email : string,
}


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const dumArr: arrProps[]=[]


export const MuiForm = () => {
  const [contacts, setContacts] = useState(dumArr)
    const [name, setName] = useState('')
    const [lname, setLname] = useState('')
    const [pass, setPass] = useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender] = useState('')
    // const [showConfirm, setShowConfirm] = useState(false);

    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    
    // const handleChange= (e : React.ChangeEvent<HTMLInputElement>)=>{
    //     // setCountry(e.target.value as string)
    // }
    // const handleChange1 = (e : React.ChangeEvent<HTMLInputElement>) =>{
    //     setGender(e.target.value)
    // }

    function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
  
      if (!name || !pass || !lname || !gender) {
        setFlag(true);
      } else {
        setFlag(false);
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem(
          "password",
          JSON.stringify(pass)
        );
        console.log("Saved in Local Storage");
  
        setLogin(!login);
      }
    }
    function handleClick() {
      setLogin(!login);
    }

    // const onSubmit=(e: React.FormEvent<HTMLFormElement>) =>{
    //   e.preventDefault()
    //   dumArr.push({name,pass,lname, email})
    //     console.log(dumArr);
    //     const newContact = {
    //       name : name,
    //       pass : pass,
    //       lname : lname,
    //       email : email
    //     }
    //     const newContacts = [...contacts, newContact];
    // setContacts(newContacts);  
    // }

    // const handleConfirm = (index : number) => {
    //   const selectedindex=index;
    //   dumArr.splice(selectedindex,1)
    //   setShowConfirm(true);
    // };

    // const handleRemoveClick = ()=>{
    //   setShowConfirm(false);
    // }

return (
  <Stack >
    <Paper sx={{width:400 ,marginLeft:60,height:550,marginTop:5,paddingTop:0,paddingInline:0,borderRadius: 2}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
      <form className="form" onSubmit={handleFormSubmit}>
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
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <br></br>
          <Box>
          <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField label='FirstName' value={name} onChange={(e) => setName(e.target.value)} variant='outlined' required fullWidth/>
              </Grid>
              <Grid item xs={12} sm={6}>
              <TextField label='LastName' value={lname} onChange={(e) => setLname(e.target.value)} variant='outlined' required fullWidth/>
              </Grid>
              <Grid item xs={12} sm={12}>
              <TextField label='Email Id' value={email} onChange={(e) => setEmail(e.target.value)} variant='outlined' required fullWidth/>
              </Grid>
              <Grid item xs={12} sm={12}>
              <TextField
                label='PassWord'
                required
                type='password'
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                error={!pass}
                helperText={!pass ? 'Required' : 'Dont share your credentials'}
                fullWidth
              />
              </Grid>
              {/* <Grid item xs={12}>
              <TextField label='Select Country' value={country} onChange={handleChange} select fullWidth required>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
              </TextField>
              </Grid>
              <Grid item xs={12}>
              <FormControl>
              <FormLabel id='job-experience-group-label'>
                  Gender
              </FormLabel>
              <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={gender} onChange={handleChange1} row>
                  <FormControlLabel control={<Radio />} label='Male' value='male' />
                  <FormControlLabel control={<Radio />} label='Female' value='female' />
              </RadioGroup>
          </FormControl>
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              SignUp
            </Button>
          </Box>
        </Box>
        <p onClick={handleClick}>
        Already registered{" "}log in?
        </p>
              {flag && (
                <Alert color="primary" variant="danger">
                  I got it you are in hurry! But every Field is important!
                </Alert>
              )}
      </form>
      </Container>
    </ThemeProvider>
  </Paper>













  
      {/* <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          <StyledTableCell align="right">S.No</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">password</StyledTableCell>
            <StyledTableCell align="right">Country</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
      <TableBody>
        {
        dumArr.map((data,index) => {
            return(
            <StyledTableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell align="right">{index+1}</StyledTableCell>
              <StyledTableCell align="right">{data.name}</StyledTableCell>
              <StyledTableCell align="right">{data.pass}</StyledTableCell>
              <StyledTableCell align="right">{data.country}</StyledTableCell>
              <StyledTableCell align="right">{data.gender}</StyledTableCell>
              <StyledTableCell align="right">{<IconButton onClick={() => handleConfirm(index) }><PersonRemoveIcon/></IconButton>}
              </StyledTableCell>
            </StyledTableRow>
          )})
            }
              {showConfirm && (
                <div>
                  <Dialog
                      open={showConfirm}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                    <DialogTitle id="alert-dialog-title">
                      {"Data Deleted Sucessfully"}
                    </DialogTitle>
                      <DialogActions>
                        <Button
                          onClick={() => handleRemoveClick()}
                          color="secondary"
                          autoFocus
                        >
                        Ok
                        </Button>
                      </DialogActions>
                    </Dialog>
                </div>
              )}
        </TableBody>
      </Table>
    </TableContainer> */}
    
  </Stack>
)
}


