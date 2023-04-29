import React, { useState } from 'react';
import { FaLastfmSquare } from 'react-icons/fa';

const CategoryCard = ({category}) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () =>{
        setIsHover(true)
    }

    const handleMouseLeave = () =>{
        setIsHover(false)
    }
    return (
        <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="text-center h-40 flex flex-col items-center gap-3 justify-center p-5 cursor-pointer hover:bg-secondary bg-[#edf3f6] transition hover:text-[#edf3f6]">
            <img className="w-10" src={isHover ? category?.alt : category?.icon} alt="category_icon" />
            <p>{category?.name}</p>
        </div>
    );
};

export default CategoryCard;