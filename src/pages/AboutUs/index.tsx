import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import OldCafe from "../../assets/old-cafe.jpg"
import Beans from "../../assets/beans.jpg"

const AboutUs = () =>{

    return(
        <div className="flex flex-col w-full">
			<Navbar />
			<div className="min-h-screen bg-[url('assets/bg-coffee.jpg')] bg-center bg-cover pt-48 bg-fixed">
        <div className="max-w-xl mt-48 mr-auto text-left text-white ml-15">
            <h1 className="px-10 text-3xl font-semibold leading-normal md:text-6xl">Our brief history.</h1>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen gap-20 md:flex-row-reverse">
        <img src={OldCafe} className="duration-300 md:w-[550px] w-[80%] h-100 rounded-3xl hover:scale-105"/>
        <div className="w-[80%] md:max-w-lg md:text-right text-center">
            <h1 className="mb-5 text-3xl font-semibold leading-normal md:text-5xl text-amber-900">The History of the Cafe.</h1>
            <p className="leading-8 text-md md:text-lg"> Founded with a passion for rich flavors and warm gatherings, our cafe began as a small 
                neighborhood spot where coffee lovers could connect from 1990. Over the years, our dedication to quality and 
                craftsmanship has transformed us into a beloved destination, serving expertly brewed coffee in a cozy, 
                welcoming atmosphere</p>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen gap-20 md:flex-row">
        <img src={Beans} className="duration-300 md:w-[550px] w-[80%] h-100 rounded-3xl hover:scale-105"/>
        <div className="w-[80%] md:max-w-lg md:text-left text-center">
            <h1 className="mb-5 text-3xl font-semibold leading-normal md:text-5xl text-amber-900">The Coffee Beans.</h1>
            <p className="leading-9 text-md md:text-lg">Our beans are sourced from the finest coffee-growing regions around the world, 
                handpicked for their exceptional quality and flavor. We work closely with local farmers to ensure ethical 
                practices and freshness, roasting each batch to perfection to bring out the unique notes and aromas in every cup</p>
        </div>
    </div>
    <div className="py-32 h-auto md:min-h-screen flex justify-center gap-20 items-center bg-[url('./assets/choose.png')] bg-auto bg-center bg-fixed">
        <div className="w-[80%] md:w-full max-w-xl text-center text-white">
            <h1 className="mb-10 text-4xl font-semibold leading-normal md:mb-20 md:text-6xl">Why Choose Us.</h1>
            <p className="leading-7 text-md md:text-lg md:leading-10">We believe that coffee is more than just a drink, it is an experience. From ethically sourced 
                beans to expertly crafted brews, we ensure every cup is made with care. Our friendly baristas, inviting ambiance, 
                and commitment to sustainability make us the perfect place to enjoy a moment of relaxation or productivity.
            </p>
        </div>
    </div>
			<Footer />
		</div>
    )
}

export default AboutUs

