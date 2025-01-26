import { Box, Card, CardContent, InputAdornment, Typography } from "@mui/material";
import { StyledSignInButton } from "../../sharedStyles";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FilterationComponent from "./FilterationComponent";
import { StyledMainSideBarCard, StyledOutlineInput } from "./styles";
const Sidebar = ({jobsList})=>{
return(
<Box sx={{margin:2,marginTop:1}}>
<StyledMainSideBarCard>  
        <CardContent>
          <Typography gutterBottom variant="h6"
           component="div">
            Set job reminder
          </Typography>
          <Typography variant="p" sx={{ color: 'gray',fontSize:'12px' }}>
           Enter Your email address and get job notification
          </Typography>
         
          <StyledOutlineInput
          placeholder="Enter email address"
            id="outlined-adornment-weight"
            startAdornment={<InputAdornment position="end">
                <MailOutlineIcon sx={{color: 'lightgray',marginRight:'4px' }}/>
                </InputAdornment>}
          
          />
      {/* <CardActions> */}
         <StyledSignInButton
         sx={{marginTop:2,
            paddingLeft:4,paddingRight:4,}}>
          Submit
        </StyledSignInButton>
        </CardContent>
      {/* </CardActions> */}
    </StyledMainSideBarCard>
    <FilterationComponent jobsList={jobsList}/>
</Box>
)
}
export default Sidebar;