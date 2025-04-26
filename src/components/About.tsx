import aboutImage from "../assets/barista.jpeg";

const About = () => {
	return (
		<div className="container flex items-center justify-center min-h-screen gap-20 py-50">
        <img src={aboutImage} alt="about-image" className="w-[550px] h-[400px] duration-300 rounded-3xl hover:scale-105"/>
        <div className="max-w-lg">
            <h1 className="mb-5 text-5xl font-semibold leading-normal text-amber-900">Where Passion and Precision Meet.</h1>
            <p className="text-lg"> Our workers are skilled coffee artisans who expertly craft and serve espresso-based drinks with precision and 
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
