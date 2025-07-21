import About from "../../components/About";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Services from "../../components/Services";
const LandingPage = () =>{

    return(
        <div className="flex flex-col w-full">
			<Navbar />
			<Header />
			<About />
			<Services />
			<Footer />
		</div>
    )
}

export default LandingPage

