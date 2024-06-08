import {
	FormatBold,
	FormatItalic,
	FormatUnderlined,
} from "@mui/icons-material";
import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useState } from "react";

const MuiToggleButton = () => {
	const [format, setFormat] = useState("");
	console.log("format", format);
	return (
		<div>
			<Stack direction={"row"} spacing={2}>
				<ToggleButtonGroup
					onChange={(_event, option) => setFormat(option)}
          // exclusive
          value={ format }
          color="warning"
				>
					<ToggleButton value={"bold"}>
						<FormatBold />
					</ToggleButton>
					<ToggleButton value={"italic"}>
						<FormatItalic />
					</ToggleButton>
					<ToggleButton value={"underline"}>
						<FormatUnderlined />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</div>
	);
};

export default MuiToggleButton;
