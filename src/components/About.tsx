import aboutImage from "../assets/barista.jpeg";

const About = () => {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen gap-10 md:gap-20 md:flex-row md:flex py-50">
        <img src={aboutImage} alt="about-image" className="md:w-[550px] w-[80%] duration-300 rounded-3xl hover:scale-105"/>
        <div className="w-[80%] md:w-[30%]">
            <h1 className="mb-5 text-xl font-semibold leading-normal text-center md:text-left md:text-5xl text-amber-900">Where Passion and Precision Meet.</h1>
            <p className="text-center text-md md:text-left md:text-lg"> Our workers are skilled coffee artisans who expertly craft and serve espresso-based drinks with precision and 
                passion. 
                From brewing the perfect shot to creating intricate latte art, they bring out the rich flavors and aromas of 
                coffee. 
                With deep knowledge of beans, roasts, and 
                brewing techniques, our workers ensure every cup delivers an exceptional coffee experience</p>
        </div>
    </div>
	);
};

export default About;
