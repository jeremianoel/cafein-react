import logo from "../assets/cafein.png";
import { navItems } from "../data";

const Navbar = () => {
	return (
			<div className="w-full flex items-center justify-between h-auto lg:px-[310px] px-5">
				<img className="w-[140px] my-3 duration-300 h-[140px] hover:scale-110"
					src={logo}
					alt="logo"
				/>
				<div className="items-center hidden gap-12 lg:flex">
					{navItems.map((item) => (
						<a
							href={item.path}
							key={item.title}
							className={`font-Source text-lg`}
						>
							{item.title}
						</a>
					))}
				</div>
			</div>
	);
};

export default Navbar;
