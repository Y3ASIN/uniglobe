import Image from "next/image";

export default function Button({ text, icon, onClick }) {
  return (
    <button
      className="flex items-center1justify-center bg-green text-white font-inria text-xs lg:text-sm font-bold px-4 lg:px-6 py-4 rounded-full  hover:bg-green-700 transition"
      onClick={onClick}
    >
      {icon && <Image className="mr-2 mt-0.5 lg:mt-1" src={icon} width={24} height={24} alt="Right Arrow" />}
      {text}
    </button>
  );
}