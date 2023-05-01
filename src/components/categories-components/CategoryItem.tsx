import Link from "next/link";
import { useContext } from "react";


const CategoryItem = ({ category, location }: any) => {
    // const { products } : any = useContext();
    // const availableProducts = products.filter(product => product?.inStock === "available")
    // const count = availableProducts?.filter(product => product?.categoryId === category?._id)
    // const location = useLocation()
    const isSelected = `/pages/category/${category?._id}` === location?.pathname;
    return (
        <li className={`${isSelected && "bg-black text-white w-full rounded-sm"} md:pl-2`} >
            <Link href={``}>
                <button className="hover:text-[#f95c39]">
                    <div className="flex justify-start items-center">
                        <div className="mx-1">
                            <img src={category?.icon} alt={category?.icon} className="w-4 h-4" />
                        </div>
                        <div className="flex text-sm">
                            <p className="text-left">
                                {category?.category.length < 20 ? category?.category : category?.category.slice(0, 19)}
                                {
                                    category?.category.length < 25 ? "" : "..."
                                }
                            </p>
                            <p className="mx-4 text-gray-500">
                                (1000)
                            </p>
                        </div>
                    </div>
                </button>
            </Link>
        </li>
    );
};

export default CategoryItem;