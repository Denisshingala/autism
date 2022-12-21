import React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchComponent = () => {
    return (
        <>
            <FormControl sx={{ m: 1, width: '30ch' }}>
                <OutlinedInput
                    sx={{ border: 'none', background: 'white' }}
                    id="outlined-adornment-password"
                    type='search'
                    placeholder='Search...'
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Search"
                                onClick={() => console.log('click')}
                                edge="end"
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </>
    );
}

export default SearchComponent;