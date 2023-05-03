import Image from "next/image";
import logo from "../../../public/Assets/graduation-hat.png";
import { AiOutlineSearch } from 'react-icons/ai';
import { FiHeart, FiUser } from 'react-icons/fi';
import Link from "next/link";
const Header = () => {
    return (
        <div className="h-16 px-20 flex items-center justify-between shadow">
            <div className="nav-logo flex gap-2 items-center">
                <Image src={logo} alt="" className="w-8" />
                <h2 className="text-xl font-medium"><span className="text-primary">Study</span><span className="text-secondary">maze</span></h2>
            </div>
            <div>
                <div className="flex">
                    <input className="outline-none border rounded-l text-sm px-3 py-2 focus:border-primary" type="text" placeholder="What to study?" />
                    <input className="outline-none border text-sm px-3 py-2 focus:border-primary" type="text" placeholder="Where to study?" />
                    <button className="bg-primary text-white px-3 rounded-r text-xl"><AiOutlineSearch /></button>
                </div>
            </div>
            <div className="flex gap-5">
                <button className="flex flex-col items-center text-slate-700 hover:text-primary transition"><FiHeart className="text-2xl" /><span className="text-sm">Wishlist</span></button>
                <Link href='/login' className="flex flex-col items-center text-slate-700 hover:text-primary transition"><FiUser className="text-2xl" /><span className="text-sm">Sign in</span></Link>
            </div>
        </div>
    );
};

export default Header;


