import {
	Brightness7,
	CurrencyBitcoinRounded,
	DarkMode,
	EmailRounded,
	NightsStayRounded,
	NotificationsRounded,
} from "@mui/icons-material";
import {
	AppBar,
	Toolbar,
	styled,
	Typography,
	InputBase,
	Badge,
	Avatar,
	Menu,
	MenuItem,
	Button,
	IconButton,
	Switch,
	Checkbox,
	TextField,
} from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const MyTextField = styled(TextField)(({ theme }) => ({
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "50%",
}));

const SocialBlock = styled("div")(({ theme }) => ({
	display: "none",
	gap: "20px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const ProfileBlock = styled("div")(({ theme }) => ({
	display: "flex",
	gap: "10px",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const Navbar = ({ mode, setMode }) => {
	const [open, setOpen] = useState(false);

	return (
		<AppBar
			position="sticky"
			sx={{
				background: (theme) => theme.palette.background.default,
				color: (theme) => theme.palette.text.primary,
			}}
		>
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					DAFFI Wallet
				</Typography>
				<CurrencyBitcoinRounded sx={{ display: { xs: "block", sm: "none" } }} />
				<MyTextField id="filled-basic" label="Filled" variant="filled" />
				<SocialBlock>
					<Checkbox
						icon={<NightsStayRounded />}
						checkedIcon={<Brightness7 />}
						onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
					/>
					<Badge badgeContent={5} color="error">
						<NotificationsRounded />
					</Badge>
					<IconButton variant="contained" onClick={(e) => setOpen(true)}>
						<Avatar
							sx={{ width: 30, height: 30 }}
							src={
								"https://assets.coingecko.com/coins/images/4380/small/download.png?1547039725"
							}
						/>
					</IconButton>
				</SocialBlock>
				<ProfileBlock>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="https://assets.coingecko.com/coins/images/4380/small/download.png?1547039725"
						onClick={(e) => setOpen(true)}
					/>
					<Menu
						id="demo-positioned-menu"
						aria-labelledby="demo-positioned-button"
						// anchorEl={anchorEl}
						open={open}
						// onClose={handleClose}
						onClose={(e) => setOpen(false)}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
					>
						<MenuItem>Profile</MenuItem>
						<MenuItem>My account</MenuItem>
						<MenuItem>Logout</MenuItem>
					</Menu>
				</ProfileBlock>
			</StyledToolbar>
		</AppBar>
	);
};

export default Navbar;
