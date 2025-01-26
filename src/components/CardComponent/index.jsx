import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Box } from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { StyledAvatar, StyledCard, StyledCompanyTypography, StyledSalaryTypography, StyledTypeButton, StyledTypography } from './styles';
import { StyledFlexBox } from '../../sharedStyles';


export default function CardComponent({ job }) {

  const { job_title, type, location, company, salary, publishedPeriod } = job
  const iconStyle = {
    color: "#D3D3D3",
    width: 20,
    height: 20
  }
  return (
    <StyledCard>
      <CardHeader
        avatar={
          <StyledAvatar aria-label="recipe">
            R
          </StyledAvatar>
        }
        action={
          <StyledTypeButton>
            {type}
          </StyledTypeButton>
        }
        title={<StyledCompanyTypography>
          {company}
        </StyledCompanyTypography>}
      />
      <CardContent>
        <Typography variant="body2"  >
          {job_title}
        </Typography>
        <StyledFlexBox
          alignItems={'center'}
          mt={1}
        >
          <AccessTimeOutlinedIcon sx={iconStyle} />
          <StyledTypography>
            {publishedPeriod}
          </StyledTypography>
          <Box sx={{ flexGrow: 0.15 }} />
          <FmdGoodOutlinedIcon sx={iconStyle} />
          <StyledTypography>{location}
          </StyledTypography>
        </StyledFlexBox>
      </CardContent>
      <CardActions disableSpacing>
        <StyledSalaryTypography>
          <Typography sx={{ fontSize: 18 }}>${salary}
          </Typography>
          <Typography sx={{ fontSize: 12, color: 'lightgray' }}>
            /Month
          </Typography>
        </StyledSalaryTypography>
        <IconButton aria-label="add to favorites">
          <VerifiedUserOutlinedIcon sx={{ ...iconStyle, width: 24, height: 24 }} />
        </IconButton>
        <IconButton aria-label="share">
          <BookmarkBorderOutlinedIcon sx={{ ...iconStyle, width: 24, height: 24 }} />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
}
