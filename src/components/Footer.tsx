import grab from "../assets/grab.png";
import gofood from "../assets/gofood.png";
import facebook from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import x from "../assets/twitter.png";


const Footer = () => {
	return (
		<div className="w-full h-auto md:h-48 bg-[rgb(62,33,15,1)] text-white flex flex-col justify-between items-start text-center">
        <div className="flex flex-col justify-around w-full gap-2 mb-6 md:gap-0 md:flex-row">
            <div className="mt-3 md:ml-25">
                <h1 className="mb-3 text-xl font-semibold">Contact Us</h1>    
                <ul className="text-lg">
                    <li className="list-none">Jalan Tomang Raya No.22 A</li>
                    <li className="list-none">+628123123123</li>
                    <li className="list-none">cafein@gmail.com</li>
                </ul>
            </div>
            <div className="flex flex-col mt-3 md:mr-11">
                <h1 className="mb-3 text-xl font-semibold">Order Us</h1>    
                <div className="flex flex-col items-center space-y-5">
                    <a href="https://www.grab.com/id/food/" target="_blank">
                        <img src={grab} className="duration-300 w-[130px] hover:scale-110"/>
                    </a>
                    <a href="https://gofood.co.id/en" target="_blank">
                        <img src={gofood} className="duration-300 w-[170px] hover:scale-110"/>
                    </a>
                </div> 
            </div>
            <div className="flex flex-col mt-3 md:mr-25">
                <h1 className="mb-3 text-xl font-semibold">Follow Us</h1>
                <div className="flex items-center justify-center space-x-4">
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src={facebook} className="duration-300 size-12 hover:scale-110"/>
                    </a>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src={ig} className="duration-300 size-12 hover:scale-110"/>
                    </a>
                    <a href="https://www.x.com/" target="_blank">
                        <img src={x} className="duration-300 size-12 hover:scale-110"/>
                    </a>
                </div>    
            </div>
        </div>
        <p className="w-full py-3 mb-3 text-center md:py-0">© 2025 cafein. All rights reserved.</p>
    </div>
	)
};

export default Footer;
