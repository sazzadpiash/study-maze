import Image from "next/image";
import cover from "../../../public/Assets/images/Harvard_University.633b09686b7cb.avif";
import logo from "../../../public/Assets/images/Harvard_shield_wreath.svg.png";
import { FiHeart } from 'react-icons/fi';
import { SlCalender } from 'react-icons/sl';
import { BsStarFill, BsStarHalf, BsArrowRight } from 'react-icons/bs';
import { MdOutlineWatchLater, MdOutlineAttachMoney } from 'react-icons/md';
import { FaUniversity, FaRegPaperPlane } from 'react-icons/fa';
import Link from "next/link";
import SimilarProgrammes from "@/components/SimilarProgrammes/SimilarProgrammes";
import OurPartners from "@/components/OurPartners/OurPartners";
import Scholarship from "@/components/Scholarship/Scholarship";


const studyname = () => {
    return (
        <div>
            <div className="relative">
                <div className="max-h-screen overflow-hidden relative">
                    <Image className="object-cover w-full h-full" src={cover} alt="cover_photo" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full p-20 grid items-end">
                    <div className="grid grid-cols-12 items-end">
                        <div className="col-span-4 bg-white rounded p-6 grid items-start gap-5 shadow-md">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex gap-3">
                                    <button className="border border-[#05293C] rounded-full text-sm py-2 px-3">B.Sc.</button>
                                    <button className="border border-[#05293C] rounded-full text-sm py-2 px-3">On Campus</button>
                                </div>
                                <div>
                                    <button><FiHeart className="text-2xl text-[#05293C]" /></button>
                                </div>
                            </div>
                            <div>
                                <p className="text-[#05293C] text-sm mb-2">Harvard University</p>
                                <h1 className="flex items-start gap-3 font-bold text-2xl text-[#05293C]"><FaUniversity className="text-3xl" /> Computer Science & Engineering</h1>
                            </div>
                            <div>
                                <button className="bg-primary hover:bg-[#f95c39d2] transition flex items-center gap-2 justify-center text-white font-semibold text-lg py-2 rounded w-full">Apply <FaRegPaperPlane /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 translate-y-1/2 w-full px-20">
                    <div className="grid grid-cols-4 items-center justify-around h-full shadow-md py-8 bg-white rounded">
                        <div className="flex justify-center items-start gap-2">
                            <span className="text-3xl text-[#05293C]"><MdOutlineWatchLater /></span>
                            <div>
                                <h1 className="text-2xl text-[#05293C] font-bold">4 Years</h1>
                                <p>Duration</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-start gap-2">
                            <span className="text-3xl text-[#05293C]"><MdOutlineAttachMoney /></span>
                            <div>
                                <h1 className="text-2xl text-[#05293C] font-bold">10,137 EUR<span className="text-base font-normal">/year</span></h1>
                                <p>Tution fee</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-start gap-2">
                            <span className="text-3xl text-[#05293C]"><FaRegPaperPlane /></span>
                            <div>
                                <h1 className="text-2xl text-[#05293C] font-bold">Jun 2023</h1>
                                <p>Apply date</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-start gap-2">
                            <span className="text-3xl text-[#05293C]"><SlCalender /></span>
                            <div>
                                <h1 className="text-2xl text-[#05293C] font-bold">Aug 2023</h1>
                                <p>Start date</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="px-24 pt-24 pb-16 grid grid-cols-12 gap-10">
                <div className="col-span-8">
                    <h2 className="text-2xl text-[#05293C] font-bold mb-3">About</h2>
                    <p className="text-lg">The Agricultural Science program at South Dakota State University offers students a practical, well-rounded education in agriculture. Because of their comprehensive background, Ag Science majors are placed in a wide variety of professional capacities in the agricultural industry, including sales, business, management, and production.</p>
                </div>
                <div className="col-span-4 shadow-md p-5 border rounded">
                    <div className="flex gap-5 mb-5">
                        <Image className="w-14 h-14" src={logo} alt="logo" />
                        <div>
                            <h2 className="text-xl text-[#05293C]">Harvard University</h2>
                            <p className="text-sm">Cambridge, United States</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 justify-between mb-5">
                        <div>
                            <h2 className="text-xl text-[#05293C]">001 <span className="text-sm text-slate-600">(ARWU)</span></h2>
                            <p className="text-sm">World ranking</p>
                        </div>
                        <div>
                            <h2 className="text-xl text-[#05293C] flex items-center gap-2">4.4
                                <span className="text-[#FFD700] flex text-base">
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarFill/>
                                    <BsStarHalf/>
                                </span>
                            </h2>
                            <p className="text-sm">6 reviews</p>
                        </div>
                    </div>
                    <p className="text-sm">Featured by</p>
                    <Link href="" className="text-sm text-[#05293C] hover:underline flex items-center gap-1">Harvard University <BsArrowRight/></Link>
                </div>
            </div>
            <SimilarProgrammes></SimilarProgrammes>
            <OurPartners></OurPartners>
            <Scholarship></Scholarship>
        </div>
    );
};

export default studyname;