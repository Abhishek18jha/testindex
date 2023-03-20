import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'







const  App = ()=>{
  return (
    <div>
    <Typography variant="h1" color="initial">Button Types</Typography>
    <Typography 
    sx={{display:"flex",
    flexDirection:"row",
    margin:"20px",
    gap:"20px"
    ,flexWrap:"wrap"
}}
    variant="div" color="initial">

    
    <Button variant='contained'>Button</Button>
    <Button variant='text'>Text</Button>
    <Button variant='outlined'>Outlined</Button>
    <Button variant="text"  color="primary" disabled> Disabled</Button>
    <Button href='http://www.google.com' variant="text" color="primary"> Google </Button>
    <Button variant="contained" color="success" disableElevation>
      Disable elevation
    </Button>    
    <Button variant="outlined" href="#outlined" color="primary">
      Outlined Link Button
    </Button>
    </Typography>
    <Typography variant="div" color="initial">
      <Box display="" mx="" my="" sx="">
        
      </Box>
    </Typography>
    </div>  
  )
 }
export default App