import { RemoveRedEye } from "@mui/icons-material";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const MuiTextField = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [value, setValue] = useState("");
	return (
		<Stack spacing={4} mt={4}>
			<Stack direction={"row"} spacing={2}>
				<TextField
					label="Name"
					color="secondary"
					size="small"
					variant="outlined"
				/>
				<TextField
					label="Name"
					color="secondary"
					size="small"
					required
					variant="filled"
				/>
				<TextField
					label="Name"
					color="secondary"
					size="small"
					variant="standard"
				/>
				<TextField
					label="Name"
					color="primary"
					size="small"
					helperText="Don't share you password with anyone"
				/>
				<TextField label="Name" color="secondary" size="small" />
				<TextField label="Name" color="secondary" size="small" disabled />
				<TextField
					label="Name"
					color="secondary"
					size="small"
					InputProps={{ readOnly: true }}
					value={"hello world"}
				/>
			</Stack>

			<Stack>
				<TextField
					label="Name"
					color="secondary"
					size="small"
					type={showPassword ? "text" : "password"}
					error={!value}
					value={value}
					required
					onChange={(e) => setValue(e.target.value)}
					helperText={!value ? "Required" : "Please Don't share your password"}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton onClick={() => setShowPassword(!showPassword)}>
									<RemoveRedEye />
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</Stack>
		</Stack>
	);
};

export default MuiTextField;
