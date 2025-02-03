import React from 'react';
import SectionTitle from './SectionTitle';
import Image from 'next/image';

const StudentExperienceSection = () => {
    const cards = [
        {
            image: "/images/student/student1.png",
            icon: "/images/student/play.svg",
        },
        {
            image: "/images/student/student1.png",
            icon: "/images/student/play.svg",
        },
        {
            image: "/images/student/student1.png",
            icon: "/images/student/play.svg",
        },
        {
            image: "/images/student/student1.png",
            icon: "/images/student/play.svg",
        },
    ];

    return (
        <div className='relative w-full bg-white'>
            <div className='bg-white pt-[80px] pb-[24px]'>
                <SectionTitle
                    title='Students Experience with UniGlobe Consulting'
                    subtitle="Students Experience with UniGlobe Consulting"
                    color="text-green"
                />
            </div>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 gap-5 lg:gap-0 lg:grid-cols-4 px-4 lg:px-0 py-[50px]'>
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className='relative w-[273px] h-[318px] bg-cover bg-center transition-transform duration-300 ease-in-out transform hover:scale-105'
                            style={{ backgroundImage: `url(${card.image})` }}
                        >
                            <div className='absolute inset-0 flex items-center justify-center'>
                                <Image src={card.icon} width={50} height={50} alt="Icon" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StudentExperienceSection;