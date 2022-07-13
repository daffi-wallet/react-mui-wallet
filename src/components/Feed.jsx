import {
	Favorite,
	FavoriteBorderRounded,
	MoreVert,
	Share,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	Checkbox,
	Collapse,
	IconButton,
	Typography,
} from "@mui/material";
import React from "react";
import Post from "./Post";

const Feed = () => {
	return (
		<Box flex={5} p={2}>
			<Typography variant="h4" paddingBottom={"20px"}>
				DEFFI WALLET
			</Typography>

			<Card
				sx={{
					marginBottom: "50px",
					border: "2px",
				}}
			>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
							R
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVert />
						</IconButton>
					}
					title="Shrimp and Chorizo Paella"
					subheader="September 14, 2016"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along with
						the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<Checkbox
						icon={<FavoriteBorderRounded />}
						checkedIcon={<Favorite sx={{ color: "red" }} />}
					/>
					<IconButton aria-label="share">
						<Share />
					</IconButton>
				</CardActions>
			</Card>
			<Post />
			<Post />
			<Post />
			<Post />
		</Box>
	);
};

export default Feed;
