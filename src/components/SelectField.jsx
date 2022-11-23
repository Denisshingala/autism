import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  let { size } = props;
  const [fieldVal, setValue] = React.useState("");

  const handleChange = async (event) => {
    await setValue(event.target.value);
    props.method({ ...props.data, [props.field]: event.target.value });
  };

  return (
    <Box sx={{ minWidth: size }}>
      <FormControl fullWidth>
        <Select
          id={props.field}
          value={fieldVal}
          displayEmpty
          onChange={(e) => handleChange(e)}
        >
          <MenuItem value="" disabled>
            <em>-Select-</em>
          </MenuItem>
          {props.fieldValues.map((data, index) => (
            <MenuItem value={data} key={index}>
              {data}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
