import { Avatar, Box, Button, Card, styled, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

export const StyledTypography = styled(Typography)({
    marginRight:'16px',
    marginLeft:'4px',
    color:"#4c4c4c",
    fontSize:'14px'
});
export const StyledCard = styled(Card)({
     width: '245px',
     margin:'8px',
     paddingTop:'4px',
     borderRadius:'8px'
});
export const StyledSalaryTypography = styled(Typography)({
    flexGrow: 1, 
    display: 'flex', 
    alignItems: 'center', 
    flexWrap: 'wrap', 
    fontWeight: 'bold', 
    padding: '4px'
});
export const StyledTypeButton = styled(Button)({
    backgroundColor: '#F5F5F5',
    marginRight:'16px', 
    color: '#696969',
    fontSize:12, 
    textTransform: 'capitalize'
});
export const StyledCompanyTypography = styled(Typography)({
    textOverflow:'ellipsis',
    fontSize:'14px',
    marginRight:'8px'
});
export const StyledAvatar = styled(Avatar)({
    backgroundColor: red[600],marginRight:'-8px',
    width:25,
    height:25,
    fontSize:'14px'
})