import Image from 'next/image';
import SectionTitle from './SectionTitle';

const stats = [
    {
        icon: "/images/stats/experience.svg",
        value: "6+",
        description: "Year of Visa Experience",
    },
    {
        icon: "/images/stats/countries.svg",
        value: "50+",
        description: "Countries Served",
    },
    {
        icon: "/images/stats/partner.svg",
        value: "100+",
        description: "Trusted Partners",
    },
    {
        icon: "/images/stats/satisfiction.svg",
        value: "99%",
        description: "Customer Satisfaction",
    },
];

const StatsDisplay = () => {
    return (
        <div className='relative w-full bg-white'>
            <div className='bg-white py-[80px]'>
                <SectionTitle 
                title='"Experience Global Learning with Our Reliable Visa Consultancy"'
                color="text-green" 
                />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 px-4 lg:px-0 mx-auto bg-[#F8F8F8] py-[50px]'>
                {stats.map((stat, index) => (
                    <div key={index} className='flex flex-col items-center justify-center'>
                        <Image src={stat.icon} width={100} height={100} alt={stat.description} />
                        <h2 className='text-green text-[45px] font-semibold'>{stat.value}</h2>
                        <p className='text-black text-[16px] font-medium'>{stat.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StatsDisplay;