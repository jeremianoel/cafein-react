import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import espreso from "../../assets/espreso-art.jpeg"
import colombia from "../../assets/colombia.jpg"
import snack from "../../assets/snack.jpg"
import brew from "../../assets/brew.jpeg"
import best from "../../assets/best.jpg"
import vs from "../../assets/vs.jpg"

const Blogs = () =>{

    return(
        <div className="flex flex-col w-full">
			<Navbar/>
			<div className="min-h-screen bg-[url('assets/blog.png')] bg-center bg-cover pt-48 bg-fixed">
        <div className="w-full mt-48 mr-auto text-center text-white ml-15">
            <h1 className="px-10 text-3xl font-semibold leading-normal md:text-6xl">Our freshly updated blogs.</h1>
        </div>
    </div>
    <div className="flex gap-10 p-5 mb-40 md:p-20 justify-evenly">
        <div className="flex flex-col justify-between h-320 w-1000">
            <div className="flex flex-col gap-5 py-3 mb-10 text-center md:py-0 md:text-left">
                <h1 className="text-3xl font-semibold md:text-4xl text-amber-900">Our top blogs</h1>
                <p className="text-black text-md md:text-lg">. . . for you to read</p>
            </div>
            <div className="flex flex-col gap-8">
            <div className="flex items-center w-full h-auto gap-10 text-left duration-300 shadow-lg rounded-2xl hover:cursor-pointer">
                <img src={espreso} className="w-[50%] h-full rounded-l-2xl"/>
                <div className="flex flex-col w-full gap-3 py-4 mr-10">
                    <h1 className="text-xs font-semibold md:leading-10 md:text-xl">"The Art of Espresso: Unlocking the Perfect Shot"</h1>
                    <p className="text-xs text-gray-600 md:text-lg">02/15/2024</p>
                    <p className="hidden text-sm leading-6 md:flex md:text-md">Ever wondered what makes a great espresso? In this post, we 
                        break down the science of espresso extraction, the importance of grind size, and how to achieve 
                        the perfect balance of crema, body, and flavor.</p>
                    <p className="text-xs leading-6 md:hidden md:text-md">Ever wondered what makes a great espresso? . . .</p>    
                </div>
            </div>
            <div className="flex items-center w-full h-auto gap-10 text-left duration-300 shadow-lg rounded-2xl hover:cursor-pointer">
                <img src={colombia} className="w-[50%] h-full rounded-l-2xl"/>
                <div className="flex flex-col w-full gap-3 py-4 mr-10">
                    <h1 className="text-xs font-semibold md:leading-10 md:text-xl">"A Journey Through Coffee Origins: Beans 
                        That Define Flavor"</h1>
                    <p className="text-xs text-gray-600 md:text-lg">06/27/2023</p>
                    <p className="hidden text-sm leading-6 md:flex md:text-md">From the highlands of Ethiopia to the volcanic soils of Colombia, 
                        coffee beans tell a story of culture, climate, and craftsmanship. Discover how different regions 
                        produce unique flavors and why sourcing the right beans matters for your daily brew.</p>
                        <p className="text-xs leading-6 md:hidden md:text-md">From the highlands of Ethiopia to the volcanic soils . . .</p>  
                </div>
            </div>
            <div className="flex items-center w-full h-auto gap-10 text-left duration-300 shadow-lg rounded-2xl hover:cursor-pointer">
                <img src={snack} className="w-[50%] h-full rounded-l-2xl"/>
                <div className="flex flex-col w-full gap-3 py-4 mr-10">
                    <h1 className="text-xs font-semibold md:leading-10 md:text-xl">"Beyond Coffee: Must-Try Café Treats That Pair Perfectly"</h1>
                    <p className="text-xs text-gray-600 md:text-lg">01/12/2025</p>
                    <p className="hidden text-sm leading-6 md:flex md:text-md">A great cup of coffee deserves the perfect pairing. Whether it's a 
                        buttery croissant,
                         a rich slice of tiramisu, or a savory quiche, we explore the best café treats that elevate your 
                         coffee experience.</p>
                         <p className="text-xs leading-6 md:hidden md:text-md">A great cup of coffee deserves the perfect pairing . . .</p>  
                </div>
            </div>
            </div>
            
        </div>
        <div className="relative hidden w-full py-12 shadow-lg md:flex h-fit rounded-2xl">
            <div className="absolute top-0 flex items-center w-full py-4 text-center h-15 rounded-t-2xl bg-amber-950">
                <p className="w-full text-xl font-semibold text-white">Latest Blogs</p>
            </div>
            <div className="flex flex-col items-start w-full gap-8 px-6 py-8 text-left">
                <div className="flex items-center gap-5 duration-300 hover:scale-105 hover:cursor-pointer">
                    <img src={brew} className="duration-300 rounded-lg w-[45%]"/>
                    <div className="">
                        <h1 className="leading-normal text-black">"How to brew Coffee"</h1>
                        <p className="text-gray-600">03/28/2025</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 duration-300 hover:scale-105 hover:cursor-pointer">
                    <img src={best} className="duration-300 rounded-lg w-[45%]"/>
                    <div className="">
                        <h1 className="leading-normal text-black">"What are the best beans?"</h1>
                        <p className="text-gray-600">03/29/2025</p>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-5 duration-300 hover:scale-105 hover:cursor-pointer">
                    <img src={vs} className="duration-300 rounded-lg w-[45%]"/>
                    <div className="">
                        <h1 className="leading-normal text-black">"Cold Brew vs. Iced Coffee"</h1>
                        <p className="text-gray-600">03/30/2025</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
			<Footer />
		</div>
    )
}

export default Blogs

