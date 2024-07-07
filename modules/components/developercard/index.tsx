import React from "react";
import Image from "next/image";
import { Facebook, Github, Linkedin } from "lucide-react";
import Link from "next/link";

type Props = {
  imgSrc: string;
  name: string;
  designation: string;
  about: any;
  fbLink: string;
  linkedinLink: string;
  githubLink: string;
};

const socialButtonStyle =
  "flex align-middle justify-center rounded-full hover:bg-dark-3 p-3 border border-textColor";

const DeveloperCard = ({
  imgSrc,
  name,
  designation,
  about,
  fbLink,
  linkedinLink,
  githubLink,
}: Props) => {
  return (
    <div className="mx-16 flex justify-center align-middle">
      <div className="bg-dark-2 flex lg:flex-row flex-col px-8 py-6 rounded-xl justify-between">
        <div className="flex flex-col">
          <Image
            src={imgSrc}
            width={300}
            height={300}
            alt={name}
            className="rounded-lg mb-6"
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-purpleText font-semibold text-xl">{name}</h2>
            <p className="font-medium text-sm italic">{designation}</p>
          </div>
        </div>
        {about}
        <div className="flex flex-col gap-12 my-8 justify-center align-middle">
          <Link className={socialButtonStyle} href={githubLink}>
            <Github size={24} />
          </Link>
          <Link className={socialButtonStyle} href={fbLink}>
            <Facebook size={24} />
          </Link>
          <Link className={socialButtonStyle} href={linkedinLink}>
            <Linkedin size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeveloperCard;
