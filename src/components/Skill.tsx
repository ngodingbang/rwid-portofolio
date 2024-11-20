"use client";

import Badge from "@/components/ui/Badge";
import skills from "@/data/skills";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { RoughNotation } from "react-rough-notation";
import colors from "tailwindcss/colors";

export default function Skill() {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <h2 className="title-font text-2xl font-bold md:text-3xl">
        <RoughNotation
          type="box"
          show={true}
          color={
            colors.emerald[(resolvedTheme || "dark") === "dark" ? 500 : 300]
          }
          animationDelay={2100}
          animationDuration={1200}
        >
          My Skill
        </RoughNotation>
      </h2>

      {skills.map((skill) => (
        <motion.div
          key={skill.name}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delayChildren: 0, staggerChildren: 0.1 },
            },
          }}
          viewport={{ once: true }}
        >
          <div className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Badge
              resolvedTheme={resolvedTheme}
              isParent={false}
              skill={skill}
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {(skill.children || []).map((skill) => (
              <Badge
                key={skill.name}
                resolvedTheme={resolvedTheme}
                isParent={true}
                skill={skill}
              />
            ))}
          </div>
        </motion.div>
      ))}
    </>
  );
}
