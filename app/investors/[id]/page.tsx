"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    (
      true
    ) ? (
      <Box sx={{ minWidth: 140 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Asset Class</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value='PE'>Private Equity</MenuItem>
          <MenuItem value='PD'>Private Debt</MenuItem>
          <MenuItem value='RE'>Real Estate</MenuItem>
          <MenuItem value='INF'>Infrastructure</MenuItem>
          <MenuItem value='NR'>Natural Resources</MenuItem>
          <MenuItem value='HF'>Hedge Funds</MenuItem>
        </Select>
      </FormControl>
    </Box>
    ) : (<div>table</div>)
  );
}
