import {AppBar,Toolbar,IconButton,Typography,Button,Stack,Menu,MenuItem,Drawer, Box, ListItemText,List,ListItem,ListItemIcon} from '@mui/material'
import logo from './Logo.png';

import { useState } from 'react'

import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const MuiNavbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <AppBar position='static' color='primary'>
      <Toolbar>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='250px' role='presentation' textAlign='center'>
          <Typography variant='h6' component='div'>
            Mail
          </Typography>
          
          <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
        </Box>
      </Drawer>
        <IconButton size='small' edge='start' color='inherit' aria-label='logo' disableRipple>
            <img src={logo} alt="Logo"/>
        </IconButton >
        <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>
          Jnana Inventive
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>About</Button>
          <Button color='inherit'>Contact</Button>
          <Button
            color='inherit'
            id='resources-button'
            aria-controls={open ? 'resources-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDownIcon />}
            onClick={handleClick}>
            Profile
          </Button>
          <Menu
          id='resources-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          MenuListProps={{
            'aria-labelledby': 'resources-button'
          }}>
          <MenuItem onClick={handleClose}>Edit</MenuItem>
          <MenuItem onClick={handleClose}>Settings</MenuItem>
        </Menu>
          <Button color='inherit'>Login</Button>
          <Button color='inherit'>SignUp</Button>
        </Stack>
        
      </Toolbar>
    </AppBar>
  )
}