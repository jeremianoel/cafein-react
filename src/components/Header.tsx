import bg from "../assets/coffee.jpg";

const Header = () => {
	return (
		<div
			className="relative w-full min-h-screen px-5 bg-fixed bg-center bg-cover py-60"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="w-[80%] md:w-[40%] ml-auto flex flex-col gap-12 md:mr-10 text-right text-white">
            <h1 className="text-xl font-semibold leading-normal md:text-6xl">Unforgettable tastes await.</h1>
            <p className="text-md md:text-lg">Crafted with passion and precision for an unforgettable coffee experience. We brew and serve the best coffee you 
                could ever imagine
            </p>

            <div>
                <a href="https://play.google.com/store/apps?hl=id" target="_blank" 
                className="px-6 py-2 font-medium text-white duration-200 md:text-lg text-md bg-amber-900 rounded-3xl outline-2 outline-transparent hover:bg-white hover:text-amber-900 hover:outline-amber-900 hover:outline-4">Download App</a>
            </div>
        </div>
		</div>
	);
};

export default Header;
