import { BrowserRouter,Routes,Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import AboutUs from "./pages/AboutUs"
import Menu from "./pages/Menu"
import Blogs from "./pages/Blogs"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
		return(
	<BrowserRouter>
	<ScrollToTop/>
	<Routes>
		<Route path="/" element={<LandingPage/>}/>
		<Route path="/about-us" element={<AboutUs/>}/>
		<Route path="/menu" element={<Menu/>}/>
		<Route path="/blogs" element={<Blogs/>}/>
	</Routes>
	</BrowserRouter>
	)
};

export default App;
