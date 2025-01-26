import { IconButton, Pagination, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)({

    border:'1px solid lightgray',
    borderRadius:'4px',
    padding:'0px 1px 1px 1px',
    height:'30px',
    width:'30px',
    margin:'4px'
});
export const StyledPagination = styled(Pagination)({
    marginTop:'16px',
    '& .MuiPaginationItem-root.Mui-selected':{
    backgroundColor:'#ffc8c9'
   },'& .MuiPaginationItem-previousNext':{
    borderRadius:'50%',
    color:'white',
    backgroundColor:'rgba(0, 0, 0, 0.12)'
   }
})