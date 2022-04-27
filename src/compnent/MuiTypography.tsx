import { Typography } from "@mui/material"

export const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>H1 Heading</Typography>
        <Typography variant='h2'>H2 Heading</Typography>
        <Typography variant='h3'>H3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>H4 Heading</Typography>
        <Typography variant='h5'>H5 Heading</Typography>
        <Typography variant='h6'>H6 Heading</Typography>

        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>
        
        <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptatem dignissimos laudantium veniam nobis deleniti rerum molestiae reprehenderit quasi doloremque aliquam sed ipsum quaerat, ea quis, tempora similique magnam possimus.</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita dolores porro exercitationem? Provident ad impedit minus unde maiores quaerat quisquam laborum. Nobis nisi eos voluptatem iusto consequuntur molestiae distinctio consequatur.</Typography>
    </div>
  )
}
