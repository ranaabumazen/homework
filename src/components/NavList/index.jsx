import * as React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Stack } from "@mui/material";
import { StyledButton, StyledItem } from './styles';

const NavList = () => {
  return <Stack
    direction={{ xs: 'column', sm: 'row' }}
    spacing={0.5}
    sx={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >

    {['Home', 'Browse Jobs', 'Employers', 'Candiates', 'Contact'].map((value, index) => (
      <StyledItem
        key={value}
      >
        <StyledButton
          variant="outlined"
          color='black'
          endIcon={index !== 0 && index != 4 ?
            <KeyboardArrowDownIcon
              fontSize='small'
              sx={{ marginLeft: -1.5, marginRight: -1.5 }} />
            : null}>
          {value}
        </StyledButton>

      </StyledItem>
    ))}

  </Stack>
}
export default NavList;