import CategoryItem from "./CategoryItem";


const CategoriesSidebar = () => {
    const categories: any = [
        {
            _id: "category001",
            category: "Agriculture & Forestry",
            icon: "https://i.ibb.co/vvVx9LQ/agriculture.png",
            alt: "https://i.ibb.co/pwh38N5/agriculture-alt.png"
        },
        {
            _id: "category002",
            category: "Applied Sciences & Professions",
            icon: "https://i.ibb.co/MGmj4gg/applied-science.png",
            alt: "https://i.ibb.co/zXRsy9G/applied-science-alt.png"
        },
        {
            _id: "category003",
            category: "Arts, Design & Architecture",
            icon: "https://i.ibb.co/44T95ZW/art.png",
            alt: "https://i.ibb.co/Bjtz6Qd/art-alt.png"
        },
        {
            _id: "category004",
            category: "Business & Management",
            icon: "https://i.ibb.co/T26GHBN/business.png",
            alt: "https://i.ibb.co/L6NC8r1/business-alt.png"
        },
        {
            _id: "category005",
            category: "Computer Science & IT",
            icon: "https://i.ibb.co/x1nK9Qr/command-line.png",
            alt: "https://i.ibb.co/Tk7SDX3/command-line-lat.png"
        },
        {
            _id: "category006",
            category: "Education & Training",
            icon: "https://i.ibb.co/V2JWPWH/education.png",
            alt: "https://i.ibb.co/x2MSQF5/education-alt.png"
        },
        {
            _id: "category007",
            category: "Engineering & Technology",
            icon: "https://i.ibb.co/ZzzcW0n/engineering.png",
            alt: "https://i.ibb.co/JcCmJzv/engineering-alt.png"
        },
        {
            _id: "category008",
            category: "Environmental Studies & Earth Sciences",
            icon: "https://i.ibb.co/VqDY0pg/earth.png",
            alt: "https://i.ibb.co/TPLwtk1/earth-alt.png"
        },
        {
            _id: "category009",
            category: "Hospitality, Leisure & Sports",
            icon: "https://i.ibb.co/nD3nMF0/sports.png",
            alt: "https://i.ibb.co/ZTFyv7t/sports-alt.png"
        },
        {
            _id: "category010",
            category: "Humanities",
            icon: "https://i.ibb.co/tm48TFV/humanities.png",
            alt: "https://i.ibb.co/q0Mffh2/humanities-alt.png"
        },
        {
            _id: "category011",
            category: "Journalism & Media",
            icon: "https://i.ibb.co/VgLBwG2/journalism.png",
            alt: "https://i.ibb.co/GVnFD08/journalism-alt.png"
        },
        {
            _id: "category012",
            category: "Law",
            icon: "https://i.ibb.co/7QKZnbK/law.png",
            alt: "https://i.ibb.co/1JjtsV6/law-alt.png"
        },
        {
            _id: "category013",
            category: "Medicine & Health",
            icon: "https://i.ibb.co/nMjTVvV/medicine.png",
            alt: "https://i.ibb.co/sKvG2Cw/medicine-alt.png"
        },
        {
            _id: "category014",
            category: "Natural Sciences & Mathematics",
            icon: "https://i.ibb.co/zs3kZtJ/science.png",
            alt: "https://i.ibb.co/71jffqx/science-alt.png"
        },
        {
            _id: "category015",
            category: "Social Sciences",
            icon: "https://i.ibb.co/T4w0GX2/social.png",
            alt: "https://i.ibb.co/PmS4VRF/social-alt.png"
        }
    ]
    return (
        <section className="mx-2 md:mx-4">
            <div className="h-1 rounded-sm bg-[#f95c39] hidden md:block"></div>
            <div>
                <div className='ml-2 font-semibold text-center md:text-start mt-4'>
                    <h3 className='underline md:no-underline'>Categories</h3>
                </div>
                <div className='mt-2'>
                    <ul className='text-sm md:text-lg font-semibold ml-2 md:ml-4 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-1 md:text-start'>

                        {categories?.length &&
                            categories?.map((category: any) => {
                                return <CategoryItem
                                    key={category?._id}
                                    category={category}
                                >
                                </CategoryItem>
                            })}

                    </ul>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSidebar;