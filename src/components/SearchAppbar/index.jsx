

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import { Autocomplete, Box, Typography } from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
import { Search, StyledMainBox, StyledSearchBox, StyledSearchButton, StyledInputBase, SearchIconWrapper, StyledSubTitle, 
    StyledSearchFilterButton,
    StyledChip, 
    } from './styles';
import { StyledFlexBox } from '../../sharedStyles';

const SearchAppbar = ({ dataList,handleSetJobsList }) => {
    const [filteredData, setFilteredData] = useState(dataList);
    const [selectedValue, setSelectedValue] = useState([]);
    useEffect(()=>{
        if(dataList && dataList.length > 0 ){
            handleSetJobsList(dataList);
        }
        // setSelectedValue({job_title:''});
    },[dataList,handleSetJobsList]);

    const handleSelectItem = (e,value) => {
        e.preventDefault();
        
        // if(!value) return;
        // if(!value || value.length == 0) return ;
        // const inputValue = e.target.value;
        // const selectedValue = filteredData.filter(
        //     (el) => el.job_title === e.target.value
        // )[0];
        // console.log(dataList.filter(el=>(inputValue.toLowerCase()).includes(el.job_title.toLowerCase())))

        setSelectedValue(value);
        // console.log(e);
        console.log(value)
        handleSetJobsList(dataList.filter(el=>
            value.some((selectedTitle)=>
            el.job_title.toLowerCase().includes(selectedTitle.job_title.toLowerCase()))
        //    ( (el.job_title.toLowerCase()).includes(value[0]?.toLowerCase()))
        ));

    };
    const handleDeleteChip =(deletedchip)=>{
        const updatedval = selectedValue.filter((chip)=>chip !== deletedchip);
        setSelectedValue(updatedval);
        
    }
    const chipsHtml = selectedValue && Array.isArray(selectedValue) && selectedValue.length > 0 ?selectedValue?.map((option,index)=>{
        const label = option.job_title || option;
        return(
            <StyledChip
            key={label}
            label={label}
            size="small"
            // {...tagProps}
            onDelete={()=>handleDeleteChip(option)}
        />
        )
    }):null
    const iconStyle = {
        marginLeft: -0.5,
        marginRight: -0.5,
        color: 'lightgray'
    };
    const innerIconStyle = {
        marginLeft: -1,
        marginRight: -1,
        color: 'lightgray'
    }
    return (
        <StyledMainBox>
            <Typography fontWeight={'bold'}>
                There are 65,866 Jobs

            </Typography>
            <Typography fontWeight={'bold'}>
                Here for You!

            </Typography>
           <StyledFlexBox alignItems={'center'} justifyContent={'space-between'} width={'100%'}>
                
                <StyledSubTitle>
                Discover your next career move, freelance gig, or internship
                </StyledSubTitle>
                
                <Box sx={{ flexGrow: 1 }} />
             
                <Typography fontSize={'12px'} >
                    Home / <span style={{color:'gray'}}>Jobs listing</span>
                </Typography>
               
                </StyledFlexBox>
            <StyledSearchBox>
                <Search >
                    <Autocomplete
                    sx={{'& .MuiAutocomplete-root':{
                        width:'100%',
                    }}}
                    multiple
                        size="small"
                        id="tags-standard"
                        filterSelectedOptions
                        freeSolo
                        options={dataList}
                        getOptionLabel={(option)=>option.job_title}
                        onChange={(e,value)=>setSelectedValue(value)}
                        value={selectedValue}
                        renderTags={()=>{}}
                        renderInput={(params) => (
                            <div
                                ref={params.InputProps.ref}
                                style={{
                                    display: "flex",
                                    height: "100%",
                                    borderRadius: '8px',
                                }}
                            >
                                <SearchIconWrapper>
                                    <SearchIcon 
                                    sx={{ color: 'lightgray' }} />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    type="text"
                                    {...params.inputProps}
                                    placeholder="Search"
                                    
                                >

                                </StyledInputBase>


                            </div>
                        )}
                    />
               {selectedValue &&<div>{chipsHtml}</div>}
                </Search>
                
                  <Box sx={{flexGrow:1}}/>
                  <StyledChip
                    key={dataList[0].job_title}
                    label={'UI/UX designing'}
                    size="small"
                    onDelete={()=>handleDeleteChip(dataList[0])}
                   />
                <StyledSearchFilterButton
                sx={{fontSize:12}}
                    variant="outlined"
                    color='black'
                    startIcon={<WorkOutlineOutlinedIcon sx={iconStyle} />}
                    endIcon={
                        <KeyboardArrowDownIcon
                            fontSize='small'
                            sx={innerIconStyle} />
                    }>
                    {'full time'}
                </StyledSearchFilterButton>
                <StyledSearchFilterButton
                  sx={{fontSize:12}}
                    variant="outlined"
                    color='black'
                    startIcon={<FmdGoodOutlinedIcon sx={iconStyle} />}
                    endIcon={
                        <KeyboardArrowDownIcon
                            fontSize='small'
                            sx={innerIconStyle} />
                    }>
                    {'New York, USA'}
                </StyledSearchFilterButton>
                <StyledSearchFilterButton
                  sx={{fontSize:12}}
                    variant="outlined"
                    color='black'
                    startIcon={<AttachMoneyOutlinedIcon sx={iconStyle} />}
                    endIcon={
                        <KeyboardArrowDownIcon
                            fontSize='small'
                            sx={innerIconStyle} />
                    }>
                    {'Salary Range'}
                </StyledSearchFilterButton>
                <Box sx={{ flexGrow: 1 }} />
                <StyledSearchButton
                    disabled={true}
                    disableElevation={'white'}
                    sx={{fontSize:'12px',height:32}}

                >
                    Find Now
                </StyledSearchButton>
            </StyledSearchBox>
        </StyledMainBox>
    )
}
export default SearchAppbar;