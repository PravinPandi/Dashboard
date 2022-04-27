import { Stack , TextField , InputAdornment} from "@mui/material"
import { useState } from "react"
import { positions } from "@mui/system"

export const MuiTextFeild = () => {
    const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='Name' variant='outlined'/>
            <TextField label='Name' variant='filled'/>
            <TextField label='Name' variant='standard'/>
    </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='small secondary' size='small' color="success"/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField
                label='Form Input'
                required
                type='password'
                value={value}
                onChange={(e) => setValue(e.target.value)}
                error={!value}
                helperText={!value ? 'Required' : 'Dont share your credentials'}/>
            <TextField
                label='PassWord'
                type='password'
                helperText={!value ? 'required' :'Do Not share your credentials'}/>
            <TextField label='Read only' InputProps={{readOnly : true}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Amount' InputProps={{startAdornment :<InputAdornment position='start'>$</InputAdornment> }}/>
            <TextField label='Weight' InputProps={{ endAdornment : <InputAdornment position='end'>Kgs</InputAdornment> }}/>
        </Stack>
    </Stack>
  )
}
