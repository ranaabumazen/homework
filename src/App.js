import './App.css';
import { Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import SearchAppbar from './components/SearchAppbar';
import Sidebar from './components/Sidebar';
import { StyledFlexBox, StyledSignInButton } from './sharedStyles';
import data from './jobs';
import MainBody from './components/MainBody';
import NavList from './components/NavList';

function App() {
  const [jobsPerPage, setJobsPerPage] = useState(data.slice(0, 8 ));
  const [jobsList, setJobsList] = useState(data);

  const [page, setPage] = useState(1);
  useEffect(() => {
    const filteredjobs = jobsList.slice(8 * (page - 1), 8 * page);
    setJobsPerPage(filteredjobs);
  }, [page]);
  const handlePageChange = (event, value) => {
    setPage(value);
    const filteredjobs = jobsList.slice(8 * (page - 1), 8 * page);
    setJobsPerPage(filteredjobs);
  }

  return (
    <Box mt={2}>
      <header style={{ display: 'flex', justifyContent: 'space-between', 
        alignItems: 'center' }}>
          <StyledFlexBox 
          justifyContent={'center'}
          flex={1}
          >
        <NavList />
        </StyledFlexBox>
        <StyledFlexBox justifyContent={'flex-end'} alignItems={'center'} >
          <StyledSignInButton sx={{ paddingLeft: 4, paddingRight: 4 }}>
            Sign in
          </StyledSignInButton>
          <MenuIcon sx={{ marginLeft: 2, marginRight: 2 }} />
        </StyledFlexBox>
      </header>
      <SearchAppbar dataList={jobsPerPage} handleSetJobsList={setJobsPerPage}/>
      <StyledFlexBox sx={{ backgroundImage:" radial-gradient(circle farthest-corner at center, rgba(237, 247, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)", margin: 2, marginTop: 0, padding: 8 }}>
        <Sidebar jobsList={jobsPerPage} />
        <MainBody
          jobsList={jobsList}
          jobsPerPage={jobsPerPage}
          handlePageChange={handlePageChange}
          page={page} />
      </StyledFlexBox>
    </Box>
  );
}

export default App;
