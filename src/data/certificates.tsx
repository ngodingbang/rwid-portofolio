import Icon from "@/app/icon.png";
import Image from "next/image";
import Link from "next/link";

export type Certificate = {
  title: string;
  issuedBy: string;
  issuedAt: {
    start: string;
    end: string;
  };
  description: JSX.Element;
  imgSrc: Parameters<typeof Image>[0]["src"];
  href?: Parameters<typeof Link>[0]["href"];
  skills?: Array<{
    url: string;
    text: string;
  }>;
};

const certificates: Array<Certificate> = [
  {
    title: "Certificate 1",
    issuedBy: "Remote Worker Indonesia",
    issuedAt: {
      start: "Oct 2024",
      end: "Oct 2027",
    },
    description: (
      <>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum eaque id
        animi delectus est! Fugit eligendi voluptates sint provident
        consequuntur odio delectus dolore harum similique hic inventore,
        corporis perspiciatis enim.
      </>
    ),
    imgSrc: Icon,
    href: "https://rwid-portofolio.vercel.app",
    skills: [
      { url: "https://php.net", text: "PHP" },
      { url: "https://laravel.com", text: "Laravel" },
      { url: "https://vuejs.org", text: "Vue.js" },
    ],
  },
];

export default certificates;
