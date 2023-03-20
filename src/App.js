import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'



function range(start,end){
  var ans=[];
  for(let i=start;i<=end;i++){
    ans.push(i);
  }
  return ans
}

const elevated =range(1,24);
const outlined =range(1,1);
console.log()
const  App = ()=>{
  return (
    <div>
  <Typography sx={{textAlign:"left" ,display:"block"}} variant="h4" color="initial">Elevated Papers</Typography>

   <Box
    sx={{
    
      display:'flex',
      justifyContent:"space-between",
      textAlign:"center",
      flexWrap:'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,}
    }} >
      {elevated.map((e)=>
       <Paper sx={{textAlign:"center",justifyContent:"center",margin:"auto"}} variant="elevation" elevation ={e}> {`Elevation is ${e}`}</Paper>
      )}
      
   
   </Box>
   <Typography sx={{textAlign:"left" ,display:"block"}} variant="h4" color="initial">Oulined Papers</Typography>

   <Box
    sx={{
    
      display:'flex',
      justifyContent:"space-between",
      textAlign:"center",
      flexWrap:'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,}
    }} >
      {outlined.map((e)=>
       <Paper sx={{textAlign:"center",justifyContent:"center",margin:"auto"}} variant="outlined" square> {`Outlined Square Papers Id ${e}`}</Paper>
      )}
      
   
   </Box>
   <Typography sx={{textAlign:"left" ,display:"block"}} variant="h4" color="initial">Oulined Papers Round Corners</Typography>

   <Box
    sx={{
    
      display:'flex',
      justifyContent:"space-between",
      textAlign:"center",
      flexWrap:'wrap',
      '& > :not(style)': {
        m: 1,
        width: 128,
        height: 128,}
    }} >
      {outlined.map((e)=>
       <Paper sx={{textAlign:"center",justifyContent:"center",margin:"auto"}} variant="outlined" > {`Outlined Square Papers Id ${e}`}</Paper>
      )}
      
   
   </Box>
     
    
   
    </div>  
  )
 }
export default App