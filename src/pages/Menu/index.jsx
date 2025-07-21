import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Espresso from "../../assets/espresso.jpg"
import Capucino from "../../assets/capucino.jpg"
import latte from "../../assets/latte.jpg"
import americano from "../../assets/americano.jpg"
import mocha from "../../assets/mocha.jpg"
import brew from "../../assets/brew.jpg"
import croisant from "../../assets/croisant.jpg"
import avocado from "../../assets/avocado.jpg"
import bagel from "../../assets/bagel.jpeg"
import panini from "../../assets/panini.jpg"
import quiche from "../../assets/quiche.jpg"
import cheesecake from "../../assets/cheesecake.jpg"

const Menu = () =>{

    return(
        <div className="flex flex-col w-full">
			<Navbar />
			<div className="min-h-screen bg-[url('assets/menu.png')] bg-center bg-cover pt-48 bg-fixed">
        <div className="w-full mt-48 mr-auto text-center text-white ml-15">
            <h1 className="px-10 text-3xl font-semibold leading-normal md:text-6xl">Here's our menu.</h1>
        </div>
    </div>
    <div className="w-full mt-10 text-center text-amber-900">
        <h1 className="text-3xl font-semibold leading-normal md:text-5xl">Drinks</h1>
        <p className="text-black text-md md:text-lg">. . . to quench your thirst</p>
    </div>
    <div className="flex justify-center mt-10">
    <div className="grid items-center grid-cols-2 gap-8 p-10 px-12 mx-auto text-center md:grid-cols-3 md:gap-28">
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={Espresso} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Espresso</h1>
            <p className="mb-5 text-sm md:text-md">IDR 25.000</p>
        </div>
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={Capucino} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Cappuccino</h1>
            <p className="mb-5 text-sm md:text-md">IDR 27.000</p>
        </div>
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={latte} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Latte</h1>
            <p className="mb-5 text-sm md:text-md">IDR 35.000</p>
        </div>
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={americano} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Americano</h1>
            <p className="mb-5 text-sm md:text-md">IDR 23.000</p>
        </div>
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={mocha} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Mocha</h1>
            <p className="mb-5 text-sm md:text-md">IDR 55.000</p>
        </div>
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={brew} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Cold Brew</h1>
            <p className="mb-5 text-sm md:text-md">IDR 42.000</p>
        </div>
    </div>
    </div>
    <div className="w-full mt-10 text-center text-amber-900">
        <h1 className="text-5xl font-semibold leading-normal">Foods</h1>
        <p className="text-lg text-black">. . . to quench your hunger</p>
    </div>
    <div className="flex justify-center mt-10 mb-50">
    <div className="grid items-center grid-cols-2 gap-8 p-10 px-12 mx-auto text-center md:grid-cols-3 md:gap-28">
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={croisant} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Croissants</h1>
            <p className="mb-5 text-sm md:text-md">IDR 45.000</p>
        </div>
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={avocado} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Avocado Toast</h1>
            <p className="mb-5 text-sm md:text-md">IDR 68.000</p>
        </div>
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={bagel} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Bagels with Cream Cheese</h1>
            <p className="mb-5 text-sm md:text-md">IDR 43.000</p>
        </div>
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={panini} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Panini Sandwiches</h1>
            <p className="mb-5 text-sm md:text-md">IDR 105.000</p>
        </div>
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={quiche} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Quiche</h1>
            <p className="mb-5 text-sm md:text-md">IDR 83.000</p>
        </div>
        <div className="flex flex-col duration-300 bg-white shadow-lg gap-3 md:gap-7 rounded-xl h-auto w-[100%] md:w-80 hover:scale-105">
            <img src={cheesecake} className="w-full h-28 md:h-60 rounded-t-xl"/>
            <h1 className="text-lg font-semibold md:text-2xl text-amber-900">Cheesecake</h1>
            <p className="mb-5 text-sm md:text-md">IDR 22.000</p>
        </div>
    </div>
    </div>
			<Footer />
		</div>
    )
}

export default Menu

