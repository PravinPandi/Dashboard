import { Box , TextField , MenuItem} from "@mui/material"
import { useState } from "react"

export const MuiSelect = () => {
    const [country, setCountry] = useState('')
    console.log({country});
    
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>)=>{
        setCountry(e.target.value as string)
    }

  return (
    <Box width='250px'>
        <TextField label='Select Country' value={country} onChange={handleChange} select fullWidth>
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>

  )
}
