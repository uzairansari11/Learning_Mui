import { Typography } from "@mui/material";
import React from "react";

const MuiTypography = () => {
	return (
		<div>
			<Typography variant="h1">Hello typo 1</Typography>
			<Typography variant="h2">Hello typo 2</Typography>
			<Typography variant="h3" component={"h1"} gutterBottom>
				Hello typo 3
			</Typography>
			<Typography variant="h4">Hello typo 4</Typography>
			<Typography variant="h5">Hello typo 5</Typography>
			<Typography variant="h6">Hello typo 6</Typography>

			<Typography variant="subtitle1">subtitle 1 </Typography>
			<Typography variant="subtitle1">subtitle 2</Typography>

			<Typography variant="body1">
				lorem ipsum dolor sit amet, consectetur adip
			</Typography>
			<Typography variant="body2">
				{" "}
				lorem ipsum dolor sit amet, consectetur adip
			</Typography>
		</div>
	);
};

export default MuiTypography;
