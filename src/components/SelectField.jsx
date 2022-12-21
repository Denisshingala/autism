import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  let { size } = props;
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: size }}>
      <FormControl fullWidth>
        <InputLabel>{props.label}</InputLabel>
        <Select id={props.field} value={value} onChange={handleChange}>
          {props.fieldValues.map((value, index) => (
            <MenuItem value={{ value }} key={index}>{value}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
