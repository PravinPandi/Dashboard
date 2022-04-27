import { useState } from 'react'
import { Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@mui/material'

export const MuiRadioBtn = () => {
    const [value, setValue] = useState('')
    console.log({value});
    

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        setValue(e.target.value)
    }
  return (
    <Box>
        <FormControl>
            <FormLabel id='job-experience-group-label'>
                Gender
            </FormLabel>
            <RadioGroup name='job-experience-group' aria-labelledby='job-experience-group-label' value={value} onChange={handleChange} row>
                <FormControlLabel control={<Radio />} label='Male' value='male' />
                <FormControlLabel control={<Radio />} label='Female' value='female' />
            </RadioGroup>
        </FormControl>
    </Box>
  )
}
