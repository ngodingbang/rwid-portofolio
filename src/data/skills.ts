export type Skill = {
  name: string;
  icon_url: string;
  url?: string;
};

export type SkillWithChildren = Skill & {
  children?: Array<Skill>;
};

const skills: Array<SkillWithChildren> = [
  {
    name: "JavaScript",
    icon_url: "/me.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    children: [
      {
        name: "TypeScript",
        icon_url: "/me.png",
        url: "https://www.typescriptlang.org",
      },
      {
        name: "Node.js",
        icon_url: "/me.png",
        url: "https://nodejs.org/en",
      },
      {
        name: "Express",
        icon_url: "/me.png",
        url: "https://expressjs.com",
      },
    ],
  },

  {
    name: "Database",
    icon_url: "/me.png",
    children: [
      {
        name: "mySQL",
        icon_url: "/me.png",
        url: "https://www.mysql.com",
      },
      {
        name: "PostgreSQL",
        icon_url: "/me.png",
        url: "https://www.postgresql.org",
      },
    ],
  },

  {
    name: "Git",
    icon_url: "/me.png",
    url: "https://github.com/about",
  },
];

export default skills;
