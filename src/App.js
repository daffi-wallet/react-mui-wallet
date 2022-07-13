import { Box, createTheme, CssBaseline, Stack } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { useState } from "react";

function App() {
	const [mode, setMode] = useState("light");
	const darkTheme = createTheme({
		palette: {
			mode: mode,
		},
	});

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Box>
				<Navbar mode={mode} setMode={setMode} />
				<Stack direction="row" spacing={2} justifyContent="space-between">
					<Sidebar />
					<Feed />
					<Rightbar />
				</Stack>
			</Box>
		</ThemeProvider>
	);
}

export default App;
