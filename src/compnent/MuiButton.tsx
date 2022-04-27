import { useState } from "react";
import { Stack , Button , IconButton , ButtonGroup , ToggleButton , ToggleButtonGroup} from "@mui/material"

import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export const MuiButton = () => {
    const [formats, setFormats] = useState<string | null>(null)
    console.log({formats});
    
    const handleFormatChange =(event : React.MouseEvent<HTMLElement>, updatedFormats : string | null)=>{
        setFormats(updatedFormats)
    }

  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction="row">
            <Button variant="text" href="https://google.com">Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>primary</Button>
            <Button variant='contained' color='secondary'>Secondary</Button>
            <Button variant='contained' color='error'>Error</Button>
            <Button variant='contained' color='warning'>Warning</Button>
            <Button variant='contained' color='info'>Info</Button>
            <Button variant='contained' color='success'>Sucess</Button>
            {/* <Button  variant='outlined' color='primary'>primary</Button>
            <Button  variant='outlined' color='secondary'>Contained</Button>
            <Button  variant='outlined' color='error'>Contained</Button>
            <Button  variant='outlined' color='warning'>Warning</Button>
            <Button  variant='outlined' color='info'>Info</Button>
            <Button  variant='outlined' color='success'>Sucess</Button> */}
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
            <Button variant="contained" endIcon={<SendIcon/>} disableElevation disableRipple onClick={() => alert('who the hell clicked me')}>Send</Button>
            <IconButton aria-label='send' color="primary">
            <SendIcon/>
            </IconButton>
        </Stack>
        
        <Stack spacing={2} direction='row' >
        <ButtonGroup
            variant="contained"
            orientation='vertical'
            size='small'
            color="success"
            aria-label='alignment button group  '>
        <Button >Left</Button>
        <Button >Center</Button>
        <Button >Right</Button>
        </ButtonGroup>
        </Stack>
        <Stack direction='row'>
            <ToggleButtonGroup aria-label="text formatting" value={formats} onChange={handleFormatChange} exclusive>
                <ToggleButton value='Bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
                <ToggleButton value='Italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
                <ToggleButton value='Underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}
