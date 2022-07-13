import { Image, ModeNightRounded } from "@mui/icons-material";
import {
	Box,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Switch,
} from "@mui/material";
import React from "react";

const CustomPrimaryTypographyProps = {
	fontSize: "0.8rem",
};

const CustomSecondaryTypographyProps = {
	fontSize: "0.7rem",
};

const Sidebar = () => {
	return (
		<Box
			disablePadding
			flex={1}
			p={2}
			sx={{
				display: { xs: "none", sm: "block" },
				borderRight: 0.5,
				borderColor: "lightblue",

				boxShadow: 2,
				color: (theme) =>
					theme.palette.mode === "dark" ? "grey.300" : "grey.800",
				padding: "0px",
			}}
		>
			<List>
				<ListItem
					sx={{
						bgcolor: (theme) => theme.palette.action.hover,
						color: "text.primary",
						marginBottom: "1px",
						padding: 0,
					}}
				>
					<ListItemButton>
						<ListItemIcon>
							<Image />
						</ListItemIcon>
						<ListItemText
							primary="Algo Account 1"
							secondary="Jan 9, 2014"
							primaryTypographyProps={CustomPrimaryTypographyProps}
							secondaryTypographyProps={CustomSecondaryTypographyProps}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem
					sx={{
						bgcolor: (theme) => theme.palette.action.hover,
						color: "text.primary",
						marginBottom: "1px",
						padding: 0,
					}}
				>
					<ListItemButton>
						<ListItemIcon>
							<Image />
						</ListItemIcon>
						<ListItemText
							primary="Algo Account 1"
							secondary="Jan 9, 2014"
							primaryTypographyProps={CustomPrimaryTypographyProps}
							secondaryTypographyProps={CustomSecondaryTypographyProps}
						/>
					</ListItemButton>
				</ListItem>
				<ListItem
					sx={{
						bgcolor: (theme) => theme.palette.action.hover,
						color: "text.primary",
						marginBottom: "1px",
						padding: 0,
					}}
				>
					<ListItemButton>
						<ListItemIcon>
							<Image />
						</ListItemIcon>
						<ListItemText
							primary="Algo Account 1"
							secondary="Jan 9, 2014"
							primaryTypographyProps={CustomPrimaryTypographyProps}
							secondaryTypographyProps={CustomSecondaryTypographyProps}
						/>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);
};

export default Sidebar;
