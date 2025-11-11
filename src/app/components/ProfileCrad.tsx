import Image from "next/image";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

type ProfileCardProps = {
  name: string;
  title: string;
  image: string;
  linkedin: string;
};

export default function ProfileCard({
  name,
  title,
  image,
  linkedin,
}: ProfileCardProps) {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-1">{name}</h3>
        <p className="text-base text-[#1d8fff] font-medium mb-4">{title}</p>
        <div className="flex justify-center">
          <Link href={linkedin} passHref target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0077b5] transition-colors"
              aria-label={`${name}'s LinkedIn Profile`}>
            
              <FaLinkedin size={24} />
   
          </Link>
        </div>
      </div>
    </div>
  );
}