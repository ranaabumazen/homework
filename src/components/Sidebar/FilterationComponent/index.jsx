import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import {
  AirbnbSlider, CustomCheckbox, StyledCheckboxInnerBox, StyledCheckboxOuterBox, StyledFormControlLabel, StyledMainCard,
  StyledMenuItem,
  StyledRangeButton, StyledRangeTypography, StyledSelect, StyledTitleTypography
} from '../styles';
import { InputAdornment, OutlinedInput, Stack } from '@mui/material';
import { StyledSignInButton } from '../../../sharedStyles';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';

export default function FilterationComponent({ jobsList }) {

  const jobTypes = [{ label: 'Full Time Jobs', count: jobsList.filter(job => job.type == 'fulltime').length },
  { label: "Part Time Jobs", count: jobsList.filter(job => job.type == 'fulltime').length },
  { label: "Remote Jobs", count: 20 }, { label: "Freelance", count: 29 }, { label: "Temporary", count: 39 }];

  const experienceLevel = [{ label: "Expert", count: 10 }, { label: "Senior", count: 10 }, { label: "Junior", count: 10 },
  { label: "Regular", count: 10 }, { label: "Internship", count: 10 }, { label: "Associate", count: 10 }];
  const [salaryValue, setSalaryValue] = React.useState([20, 40]);
  const [category, setCategory] = React.useState('');

  const handleSliderChange = (event, value) => {
    setSalaryValue(value);
  }

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  const iconStyle = {
    marginLeft: -0.5, marginRight: .5, color: 'lightgray'
  }
  return (
    <StyledMainCard>

      <CardContent>
        <StyledTitleTypography>
          Location
        </StyledTitleTypography>
        <OutlinedInput
          sx={{
            fontSize: '14px',
            width: '100%'
          }}
          placeholder="Location"
          id="outlined-adornment-weight"
          startAdornment={<InputAdornment >
            <FmdGoodOutlinedIcon sx={iconStyle} />
          </InputAdornment>}

        />
        <StyledTitleTypography sx={{ marginTop: 2 }}
        >
          Category
        </StyledTitleTypography>
        <StyledSelect
          value={10}
          onChange={handleChange}

          defaultValue={"UI/UX design"}
          inputProps={{ 'aria-label': 'Without label' }}
          startAdornment={<InputAdornment>
            <WorkOutlineOutlinedIcon sx={iconStyle} />

          </InputAdornment>}
        >

          <StyledMenuItem value={10}> UI/UX desgin</StyledMenuItem>
          <StyledMenuItem value={20} >Twenty</StyledMenuItem>
          <StyledMenuItem value={30}>Thirty</StyledMenuItem>
        </StyledSelect>
        <StyledTitleTypography sx={{ marginTop: 2, }}
        >
          Job type
        </StyledTitleTypography>
        <FormGroup>
          {jobTypes.map((jobType, index) => (
            <StyledCheckboxOuterBox>
              <StyledFormControlLabel
                control={<CustomCheckbox defaultChecked={index == 1 || index == 2} />}

                label={jobType.label} />
              <StyledCheckboxInnerBox>
                {jobType.count}
              </StyledCheckboxInnerBox>
            </StyledCheckboxOuterBox>
          ))}

        </FormGroup>



        <StyledTitleTypography sx={{ marginTop: 2 }}
        >
          Experience Level
        </StyledTitleTypography>
        <FormGroup>
          {experienceLevel.map((level, index) => (
            <StyledCheckboxOuterBox>
              <StyledFormControlLabel
                control={<CustomCheckbox defaultChecked={index == 2 || index == 3} />}

                label={level.label} />
              <StyledCheckboxInnerBox>
                {level.count}
              </StyledCheckboxInnerBox>

            </StyledCheckboxOuterBox>
          ))}

        </FormGroup>

        <StyledTitleTypography sx={{ marginTop: 2 }}
        >
          Salary Range
        </StyledTitleTypography>
        <Stack>
          <AirbnbSlider
            aria-label='ios slider'
            onChange={handleSliderChange}
            defaultValue={salaryValue}

          />
        </Stack>

        <Stack direction={'row'} sx={{ justifyContent: 'space-between' }} mt={-1}>
          <Stack direction={'column'} >
            <StyledRangeTypography>
              From
            </StyledRangeTypography>
            <StyledRangeButton disabled variant='outlined'

            >
              ${salaryValue[0] * 100}
            </StyledRangeButton>
          </Stack>
          <Stack direction={'column'} >
            <StyledRangeTypography
            >
              To</StyledRangeTypography>
            <StyledRangeButton disabled variant='outlined'

            >
              ${salaryValue[1] * 100}
            </StyledRangeButton>
          </Stack>

        </Stack>
      </CardContent>
      <CardActions sx={{ marginLeft: 1 }}>
        <StyledSignInButton size="small" >Apply filter</StyledSignInButton>
        <Button size="small" sx={{
          textTransform: 'capitalize', color: 'gray'
        }}>Reset filter</Button>
      </CardActions>
    </StyledMainCard>
  );
}
