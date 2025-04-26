import bg from "../assets/coffee.jpg";

const Header = () => {
	return (
		<div
			className="w-full h-[670px] relative bg-fixed bg-cover bg-center px-5"
			style={{ backgroundImage: `url(${bg})` }}
		>
			<div className="max-w-xl mt-48 ml-auto mr-10 text-right text-white">
            <h1 className="text-6xl font-semibold leading-normal">Unforgettable tastes await.</h1>
            <p className="text-lg">Crafted with passion and precision for an unforgettable coffee experience. We brew and serve the best coffee you 
                could ever imagine
            </p>

            <div className="mt-10">
                <a href="https://play.google.com/store/apps?hl=id" target="_blank" 
                className="px-6 py-2 font-medium text-white duration-200 bg-amber-900 rounded-3xl outline-2 outline-transparent hover:bg-white hover:text-amber-900 hover:outline-amber-900 hover:outline-4">Download App</a>
            </div>
        </div>
		</div>
	);
};

export default Header;
