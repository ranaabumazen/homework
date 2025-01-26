
import { styled,Checkbox, Box, Slider, Card, OutlinedInput, Typography, Button, MenuItem, FormControlLabel, Select } from "@mui/material";

export  const CustomCheckbox = styled(Checkbox)({
  '&.MuiCheckbox-root':{
        color:'lightgrey'
      },
    '&.Mui-checked': {
        color: '#B80000', 
      // Applying color with !important
      },
  });
  export const StyledCheckboxInnerBox=styled(Box)({
    backgroundColor: '#F5F5F5',
    color: 'gray',
    display: 'flex', 
    borderRadius: '8px', 
    height: 20, 
    fontSize: '14px',
    alignItems: 'center', 
    padding: '2px 8px 2px 8px',
  });
  export const StyledCheckboxOuterBox=styled(Box)({
     display: 'flex', justifyContent: 'space-between',
                alignItems: 'center'
  });
  export const  AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-thumb': {
        width:15,
        height:15,
        backgroundColor:'white',
        border:0,
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
      },
      '& .airbnb-bar': {
        height: 9,
        width: 1,
        backgroundColor: 'currentColor',
        marginLeft: 1,
        marginRight: 1,
      },
    },
    '& .MuiSlider-track': {
      height: 3, 
       borderColor:'#B80000',
          backgroundColor:'#B80000'
    },
    '& .MuiSlider-rail': {
        backgroundColor:'#e0e0e0',
          border:'1px solid #B80000',
      opacity: 1,
      height: 3,
      ...theme.applyStyles('dark', {
        color: '#bfbfbf',
        opacity: undefined,
      }),
    },
  }));
  export const StyledMainCard = styled(Card)({
     width: '240px',
     padding:'1px',
     paddingBottom:'16px'
  });
  export const StyledOutlineInput = styled(OutlinedInput)({
    backgroundColor:'white',
    color: 'gray' ,
    marginTop:'8px',
    marginBottom:'8px',
    borderRadius:'8px',
    paddingLeft:'4px',
    fontSize:'12px',
    border:0,
    '& .MuiOutlinedInput-notchedOutline':{
        borderColor:'white'
      }
  });
  export const StyledTitleTypography = styled(Typography)({
    fontSize: 16,
    fontWeight:'600' ,
    marginBottom:'8px'
  });
  export const StyledRangeTypography = styled(Typography)({
    fontSize: 12,
    fontWeight:'500',
    marginTop:'16px',
    marginBottom:'8px'
  })
  export const StyledRangeButton = styled(Button)({
    borderColor:'#F5F5F5',
    padding:'8px 24px 8px 24px',
    backgroundColor:"#F8F8F8"
  });
  export const StyledMenuItem = styled(MenuItem)({
    color:'	#707070', 
    fontSize:'13px',
  });
  
  export const StyledFormControlLabel = styled(FormControlLabel)({
    '& .MuiFormControlLabel-label':{
      fontSize:'13px',
      
    },color:'	#707070'
  });
  export const StyledSelect = styled(Select)({
    color:"#b9b9b9", 
    fontSize:'14px',
    width:'100%',
    borderRadius:'8px'
  });
  export const StyledMainSideBarCard = styled(Card)({
    width: '225px',
    padding:'8px',
    backgroundColor:"#dbeaff",
    borderRadius:'8px',
    marginBottom:'24px'
  })
