import { StyledFlexBox, StyledVerticalFlexBox } from "../../sharedStyles";
import GridViewIcon from '@mui/icons-material/GridView';
import ReorderIcon from '@mui/icons-material/Reorder';
import JobsList from "../JobsList";
import { StyledIconButton, StyledPagination } from "./styles";
import { Typography } from "@mui/material";
import { StyledSearchFilterButton } from "../SearchAppbar/styles";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const iconStyle = {
  width: 18,
  height: 18,
  fontSize: 9,
  marginTop: -1,
  marginBottom: -1
}
const innerIconStyle = {
  marginLeft: -1,
  marginRight: -1,
  color: 'lightgray'
}
const MainBody = ({ jobsList, jobsPerPage, page, handlePageChange }) => {
  return (
    <StyledVerticalFlexBox>
      <StyledFlexBox alignItems={'center'} justifyContent={'space-between'} p={1}>
        <Typography sx={{ color: "#4c4c4c"}}>
          Showing <span style={{ fontWeight: 'bold', color: 'black' }}>
            {Math.min(8*(page-1)+1,jobsList.length)} - {Math.min(8*page,jobsList.length)}
            </span> of  <span style={{ fontWeight: 'bold', color: 'black' }}>
              {jobsList?.length}</span> jobs
        </Typography>
        <StyledFlexBox alignItems={'center'}>
          <Typography sx={{ color: "gray" }}>
            Sort by:
          </Typography>
          <StyledSearchFilterButton
            variant="outlined"
            color='black'
            sx={{ marginLeft: -1 }}
            endIcon={
              <KeyboardArrowDownIcon
                fontSize='small'
                sx={innerIconStyle} />
            }>
            {'Newest Post'}
          </StyledSearchFilterButton>
          <StyledIconButton>
            <ReorderIcon sx={iconStyle} color="primary" />
          </StyledIconButton>
          <StyledIconButton>
            <GridViewIcon sx={iconStyle} />
          </StyledIconButton>
        </StyledFlexBox>
      </StyledFlexBox>
      <JobsList JobsList={jobsPerPage} />
      <StyledPagination
        page={page}
        onChange={handlePageChange}
        count={Math.ceil(jobsList.length / 8)}
        shape="rounded"
      />
    </StyledVerticalFlexBox>);

}
export default MainBody;