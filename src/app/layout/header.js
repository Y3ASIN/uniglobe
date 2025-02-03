import Image from "next/image";
import Link from "next/link";

const uniglobeLogo = "/images/uniglobe-logo.svg";
const guidingSuccessLogo = "/images/guiding-success-logo.svg";

export default function Navbar() {
    return (
        <nav className="w-full absolute top-0 left-0 z-50">
            <div className="drawer container mx-auto pt-4">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex px-2">
                            <div className="flex items-center justify-start gap-3">
                                <Link href="/">
                                    <Image src={uniglobeLogo} width={100} height={100} alt="Uniglobe Logo" />
                                </Link>
                                <Link href="/">
                                    <Image src={guidingSuccessLogo} width={100} height={100} alt="Guiding Success Logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="hidden flex-1 lg:flex justify-center">
                            <ul className="menu menu-horizontal text-[14px] font-semibold tracking-wider text-white">
                                {/* Navbar menu content here */}
                                <li><a>Home</a></li>
                                <li><a>About Us</a></li>
                                <li><a>Services</a></li>
                                <li><a>Study Destination</a></li>
                                <li><a>Testimonial</a></li>
                                <li><a>Events</a></li>
                                <li><a>Contact Us</a></li>
                            </ul>

                        </div>
                        <div className="hidden flex-none lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <button className="text-[15px] text-white font-semibold bg-green py-[10px] px-[14px] rounded-[2px] tracking-widest">Free Consultation</button>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}