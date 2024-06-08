import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
	const [value, setValue] = useState("");
	const [countries, setCountries] = useState([]);
	const handleSelect = (event) => {
		console.log(event.target.value, "value");
		setValue(event.target.value);
	};
	const handleCountries = (event) => {
		const value = event.target.value;

		setCountries(typeof value === "string" ? value.split(",") : value);
	};
	return (
		<Box width="250px">
			<TextField
				fullWidth
				select
				label="Select Country"
				value={value}
				onChange={handleSelect}
			>
				<MenuItem value="">None</MenuItem>
				<MenuItem value="IN"> India</MenuItem>
				<MenuItem value="US"> USA</MenuItem>
				<MenuItem value="AUS"> Australia</MenuItem>
			</TextField>

			{/* multiple selection */}

			<TextField
				fullWidth
				select
				label="Select Country"
				SelectProps={{
					multiple: true,
					value: countries,
					onChange: handleCountries,
					inputProps: {
						id: "select-multiple-checkbox",
					},
				}}
			>
				<MenuItem value="">None</MenuItem>
				<MenuItem value="IN"> India</MenuItem>
				<MenuItem value="US"> USA</MenuItem>
				<MenuItem value="AUS"> Australia</MenuItem>
			</TextField>
		</Box>
	);
};

export default MuiSelect;
