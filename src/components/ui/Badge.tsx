import AnimationHover from "@/components/ui/AnimationHover";
import OptionalLink from "@/components/ui/OptionalLink";
import { type Skill } from "@/data/skills";
import Image from "next/image";

export default function Badge(props: {
  resolvedTheme?: string;
  isParent: boolean;
  skill: Skill;
}) {
  const { resolvedTheme, isParent, skill } = props;

  return (
    <OptionalLink href={skill.url} target="_blank" rel="noopener noreferrer">
      <AnimationHover
        title={skill.name}
        className={`group flex origin-center transform items-center justify-center gap-4 rounded-lg ${!props.isParent ? "border border-gray-300 dark:border-gray-500" : "border-b border-b-gray-300 dark:border-b-gray-500"} p-4 sm:justify-start md:origin-top`}
        resolvedTheme={resolvedTheme}
      >
        <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
          <Image
            src={skill.icon_url}
            alt={skill.name}
            className="h-8 w-8"
            width="32"
            height="32"
          />
        </div>
        <p
          className={`pointer-events-none ${isParent && "hidden"} select-none text-sm font-semibold sm:inline-flex md:text-base`}
        >
          {skill.name}
        </p>
      </AnimationHover>
    </OptionalLink>
  );
}
