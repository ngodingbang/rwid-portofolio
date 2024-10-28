import Icon from "@/app/icon.png";
import Image from "next/image";
import Link from "next/link";

export type Project = {
  title: string;
  description: JSX.Element;
  imgSrc: Parameters<typeof Image>[0]["src"];
  href?: {
    github?: Parameters<typeof Link>[0]["href"];
    deploy?: Parameters<typeof Link>[0]["href"];
  };
  tools?: Array<{
    url: string;
    text: string;
  }>;
};

const projects: Array<Project> = [
  {
    title: "Project 1",
    description: (
      <>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum eaque id
        animi delectus est! Fugit eligendi voluptates sint provident
        consequuntur odio delectus dolore harum similique hic inventore,
        corporis perspiciatis enim.
      </>
    ),
    imgSrc: Icon,
    href: {
      deploy: "https://rwid-portofolio.vercel.app",
    },
    tools: [
      { url: "https://php.net", text: "PHP" },
      { url: "https://laravel.com", text: "Laravel" },
      { url: "https://vuejs.org", text: "Vue.js" },
    ],
  },
];

export default projects;
