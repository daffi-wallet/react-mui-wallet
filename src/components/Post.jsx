import {
	Favorite,
	FavoriteBorderRounded,
	MoreVert,
	Share,
} from "@mui/icons-material";
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	Collapse,
	IconButton,
	Typography,
} from "@mui/material";
import React from "react";

const Post = () => {
	return (
		<Card>
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
		</Card>
	);
};

export default Post;
