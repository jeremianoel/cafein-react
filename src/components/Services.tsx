import bg from "../assets/cafe.jpg"
import bean from "../assets/bean.png"

const Services = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-20 bg-fixed bg-center bg-cover md:px-10 md:flex-row"
		style={{ backgroundImage: `url(${bg})` }}>
       <div className="flex flex-col items-center justify-center p-10 text-center bg-white w-[70%] md:w-[500px] h-auto md:h-80 rounded-3xl">
        <h1 className="py-5 text-xl font-bold md:text-2xl text-amber-900">Opening Hours</h1>
        <ul className="text-md md:text-lg">
            <li className="py-1 list-none">Monday - Thursday : 10.00 - 23.00</li>
            <li className="py-1 list-none">Friday : 10.00 - 02.00</li>
            <li className="py-1 list-none">Saturday : 08.00 - 03.00</li>
            <li className="py-1 list-none">Sunday : 08.00 - 04.00</li>
        </ul>
       </div>
       <div className="flex flex-col items-center justify-center p-10 text-center bg-white w-[70%] md:w-[500px] h-auto md:h-80 rounded-3xl">
        <h1 className="py-5 text-xl font-bold md:text-2xl text-amber-900">Curious about our latest entries?</h1>
        <a href="blog.html" className="mb-3">
            <img src={bean} className="bg-center bg-cover w-32 md:w-[120px] hover:animate-spin"/>
        </a>
        <p className="font-bold text-md md:text-xl text-amber-900">
            Click the bean!
        </p>
       </div>
    </div>
	);
};

export default Services;
