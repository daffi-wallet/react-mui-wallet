import { Box } from "@mui/material";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<Box>
			<Sidebar />
			<Feed />
			<Rightbar />
		</Box>
	);
}

export default App;
