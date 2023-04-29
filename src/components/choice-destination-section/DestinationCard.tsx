
const DestinationCard = () => {
    return (
        <div className="w-44 h-56 mx-auto">

            <div>
                <img className="w-full mt-0 pt-0" src="https://didmdw8v48h5q.cloudfront.net/wp-content/uploads/2023/01/Frame-10749.svg" alt="" />
            </div>
            <div className="border-x border-b rounded-md">
                <div className="flex flex-col justify-around items-start h-28 font-semibold">
                    <div className=" mt-2 ms-2">
                        <h1 className="text-xl">Study In the UK</h1>
                    </div>
                    <div className=" mt-2 ms-2">
                        <button className="text-[#f95c39] hover:text-[#f5c4ba]">
                            {"Explore ->"}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DestinationCard;