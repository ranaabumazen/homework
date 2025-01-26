import { styled, Box, Button, InputBase, Typography, Chip } from "@mui/material";

export const StyledMainBox = styled(Box)({
    backgroundColor: '#F5F5F5', 
    margin: 16,
    marginBottom:8,
    paddingLeft: '50px',
    paddingRight: '50px',
    paddingTop: '32px',
    alignItems: 'flex-start',
    paddingBottom: '32px',
    display: 'flex',
    flexDirection: 'column'
});
export const StyledSearchButton = styled(Button)({
    backgroundColor: '#B8B8B8',
    borderRadius: '4px',
    textTransform: 'capitalize',
    color: 'white',
    height:40,
    marginRight: '32px',
    paddingLeft: '24px',
    paddingRight: '24px',
    '&.Mui-disabled': {
        color: '#F5F5F5',
    },
});
export const StyledSearchBox = styled(Box)({
    backgroundColor: 'white', 
    borderColor: 'gray', 
    height: 48,
    width: '100%',
    marginTop: '16px',
    alignItems: 'center',
    display: 'flex', 
    borderRadius: '8px'
});
export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    [theme.breakpoints.up("md")]: {
        width: "auto",
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    paddingLeft: '16px',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        display: 'flex',
        alignItems: 'center',
        height: '24px',
        margin: '2px',
        boxSizing: 'content-box',
        padding: '0 4px 0 4px',
        outline: 0,
        // overflow: 'hidden',
        transition: 
        theme.transitions.create('width'),

    },
    '&.MuiInputBase-root':{
        display:'block',
        color:'lightgray',
        fontSize:'14px'
    }
}));
export const StyledSubTitle = styled(Typography)({
    fontSize: '12px',
    marginLeft: '8px',
    color: 'gray',
    marginTop:'4px'
});
export const StyledSearchFilterButton = styled(Button)({
    border: 0, textTransform: 'capitalize'
});
export const StyledChip = styled(Chip)({
    padding:'16px',
    paddingLeft:'4px',
    paddingRight:'4px',
    borderRadius:'4px',
    margin:'0 8px'
})
