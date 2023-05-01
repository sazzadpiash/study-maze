import Image from 'next/image';
import React from 'react';
import photo from '../../../public/Assets/images/Harvard_University.633b09686b7cb.avif';
import logo from '../../../public/Assets/images/Harvard_shield_wreath.svg.png';
import { FiHeart } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';
import Link from 'next/link';

const ProgrammeCard = () => {
    return (
        <div className='rounded-md shadow'>
            <div className='h-40 overflow-hidden'>
                <Image className="object-cover w-full h-full rounded-t-md" src={photo} alt="cover_photo" />
            </div>
            <div className='p-5 bg-white rounded-b-md'>
                <div className='flex items-start justify-between gap-3 mb-5'>
                    <Link href="#" className='text-lg text-[#05293C] font-semibold'>Computer Science & Engineering</Link>
                    <button className='text-[#05293C] hover:text-primary'><FiHeart className='text-2xl' /></button>
                </div>
                <div className='flex items-start gap-3'>
                    <Image className="w-10 h-10" src={logo} alt="logo" />
                    <div>
                        <p className='text-[#05293C] text-sm mb-1'>Harvard University</p>
                        <p className='text-xs flex items-center gap-1 text-slate-600'><SlLocationPin />Cambridge, United States</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgrammeCard;