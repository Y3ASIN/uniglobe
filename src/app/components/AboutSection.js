import Image from 'next/image';

const aboutImage = "/images/about.png";
const checkIcon = "/images/check.svg";

const AboutSection = () => {
    return (
        <div className='relative w-full bg-white'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-0 mx-auto  py-[50px] max-w-6xl'>
                <div className='flex justify-left items-center'>
                    <Image src={aboutImage} width={366} height={364} alt="About Us" />
                </div>
                <div className='flex flex-col justify-right items-start'>
                    <div>
                        <p className='text-green-500 font-semibold text-lg text-[30px] font-inria text-green'>ABOUT US</p>
                        <h2 className='text-black font-bold text-3xl lg:text-4xl mt-4 text-[30px] font-inter'>Building Your Future with Trusted Strategies Partnership</h2>
                    </div>
                    <div className='flex flex-col gap-10 lg:gap-0 lg:flex lg:flex-row items-start justify-between  w-full mt-10'>
                        <div >
                            <div className='max-w-[273px]'>
                                <p className='text-[25px] font-semibold text-white bg-green px-5 py-3 rounded-[3px] text-center'>Pre Visa Services</p>
                            </div>
                            <div className='flex flex-col gap-3 mt-6 max-w-[269px]'>
                                <div className='flex items-center justify-start gap-1'>
                                    <Image src={checkIcon} width={12} height={12} alt="About Us" />
                                    <p className='text-[14px] text-black'>Assessment on Profile</p>
                                </div>
                                <div className='flex items-center justify-start gap-1'>
                                    <Image src={checkIcon} width={12} height={12} alt="About Us" />
                                    <p className='text-[14px] text-black'>Application with Scholarship</p>
                                </div>
                                <div className='flex items-center justify-start gap-1'>
                                    <Image src={checkIcon} width={12} height={12} alt="About Us" />
                                    <p className='text-[14px] text-black'>Advice on Bank Sponsor</p>
                                </div>
                                <div className='flex items-start justify-start gap-1'>
                                    <Image src={checkIcon} width={12} height={12} alt="About Us" />
                                    <p className='text-[14px] text-black -mt-1'>Pre Program All Interview with SOP Guidence</p>
                                </div>
                                <div className='flex items-center justify-start gap-1'>
                                    <Image src={checkIcon} width={12} height={12} alt="About Us" />
                                    <p className='text-[14px] text-black'>Visa Application with Expert Hands</p>
                                </div>
                            </div>
                        </div>
                        <div className='max-w-[273px]'>
                            <div>
                                <p className='text-[25px] font-semibold text-white bg-green px-5 py-3 rounded-[3px] text-center'>Pre Visa Services</p>
                            </div>
                            <div className='flex flex-col gap-3 mt-6 max-w-[269px]'>
                                <div className='flex items-center justify-start gap-1'>
                                    <Image src={checkIcon} width={12} height={12} alt="About Us" />
                                    <p className='text-[14px] text-black'>Pre Departure Guidance</p>
                                </div>
                                <div className='flex items-center justify-start gap-1'>
                                    <Image src={checkIcon} width={12} height={12} alt="About Us" />
                                    <p className='text-[14px] text-black'>Ticketing Assistance</p>
                                </div>
                                <div className='flex items-center justify-start gap-1'>
                                    <Image src={checkIcon} width={12} height={12} alt="About Us" />
                                    <p className='text-[14px] text-black'>Support For Accommodate</p>
                                </div>
                                <div className='flex items-center justify-start gap-1'>
                                    <Image src={checkIcon} width={12} height={12} alt="About Us" />
                                    <p className='text-[14px] text-black'>Assistance to Finding Jobs</p>
                                </div>
                                <div className='flex items-center justify-start gap-1'>
                                    <Image src={checkIcon} width={12} height={12} alt="About Us" />
                                    <p className='text-[14px] text-black'>Legal & Immigration Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;