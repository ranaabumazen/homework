import { Button, Paper, styled } from "@mui/material";

export const StyledItem =  styled(Paper)(({ theme }) => ({
    border:0,
    boxShadow:'none',
    padding: theme.spacing(1),
    textAlign: 'center',
    color: 'black',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
  }));
  export const StyledButton = styled(Button)({
    border:0,
    textTransform:'capitalize'
  });