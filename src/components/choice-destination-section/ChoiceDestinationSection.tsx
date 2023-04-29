import DestinationCard from "./DestinationCard";


const ChoiceDestinationSection = () => {



    return (
        <section className="py-8 md:py-12">
            <div className="pt-8 md:pt-10 pb-4 md:pb-6">
                <h1 className="text-2xl md:text-5xl text-center">Choose Your Study Abroad Destination</h1>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 pb-6 md:pb-10">
                <DestinationCard></DestinationCard>
                <DestinationCard></DestinationCard>
                <DestinationCard></DestinationCard>
                <DestinationCard></DestinationCard>
                <DestinationCard></DestinationCard>
            </div>
        </section>
    );
};

export default ChoiceDestinationSection;