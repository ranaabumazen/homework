import { Box, Button, styled } from "@mui/material";

export const StyledFlexBox =styled(Box)({
    display:'flex',
    flexDirection:'row'
    
});
export const StyledVerticalFlexBox=styled(Box)({
    display:'flex',
    flexDirection:'column'
});
export const StyledSignInButton= styled(Button)({
    backgroundColor:'#B80000 ',
    color:'white',
    borderRadius:'8px',
    paddingLeft:'12px',
    paddingRight:'12px',
    textTransform:'capitalize'
});
