import { Button, ButtonGroup, IconButton, Stack } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";
const MuiButton = () => {
	return (
		<Stack spacing={2} direction={"row"}>
			<Button variant="text" color="secondary">
				text
			</Button>
			<Button
				variant="contained"
				href="https://google.com"
				target="_blank"
				color="warning"
			>
				container
			</Button>
			<Button variant="outlined" color="error">
				outline
			</Button>

			<Stack direction={"row"} display={"block"}>
				<Button variant="text" color="secondary" size="small">
					text
				</Button>
				<Button
					variant="contained"
					href="https://google.com"
					target="_blank"
					color="warning"
					size="medium"
				>
					container
				</Button>
				<Button
					variant="outlined"
					color="error"
					size="large"
					disableElevation
					loading
				>
					outline
				</Button>
			</Stack>

			<Stack direction={"row"} spacing={2}>
				<Button variant="contained" startIcon={<SendIcon />}>
					{" "}
					Send
				</Button>
			</Stack>

			<IconButton aria-label="send" size="large" color="warning">
				<SendIcon />
			</IconButton>

			<Stack direction={"row"} spacing={2}>
				<ButtonGroup aria-label="group-button" orientation="vertical">
					<Button>Left</Button>
					<Button>Center</Button>
					<Button>Right</Button>
				</ButtonGroup>
			</Stack>
		</Stack>
	);
};

export default MuiButton;
