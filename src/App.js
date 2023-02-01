import { BrowserRouter, Route, Routes } from "react-router-dom";
import { List } from "./Components/List/List";
import { Information } from "./Components/Information/Information";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<List />} />
				<Route path="/user/:id" element={<Information />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
