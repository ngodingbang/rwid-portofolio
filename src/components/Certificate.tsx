"use client";

import AnimationHover from "@/components/ui/AnimationHover";
import CertificateCard from "@/components/ui/CertificateCard";
import certificates from "@/data/certificates";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import colors from "tailwindcss/colors";

export default function Certificate({ max }: Readonly<{ max?: number }>) {
  const { resolvedTheme } = useTheme();

  return (
    <>
      <h2 className="title-font text-2xl font-bold md:text-3xl">
        <RoughNotation
          type="box"
          show={true}
          color={colors.rose[(resolvedTheme || "dark") === "dark" ? 500 : 300]}
          animationDelay={2400}
          animationDuration={1200}
        >
          My Certificate
        </RoughNotation>
      </h2>

      <div className="py-5">
        <motion.div
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
          className="mx-auto grid grid-cols-1 gap-4 md:ml-[20%] xl:ml-[24%]"
          transition={{ staggerChildren: 0.5 }}
        >
          {(max ? certificates.slice(0, max) : certificates).map(
            (certificate) => (
              <AnimationHover
                key={certificate.title}
                title={certificate.title}
                className="card mt-[30%] flex max-w-2xl flex-col items-center gap-8 rounded-lg border border-gray-300 bg-opacity-20 p-5 transition-all dark:border-gray-500 sm:mt-8 sm:flex-row sm:p-10"
                resolvedTheme={resolvedTheme}
              >
                <CertificateCard
                  {...certificate}
                  resolvedTheme={resolvedTheme}
                  imageClassName="relative -mt-[35%] w-full shrink-0 overflow-hidden rounded-xl shadow-2xl before:absolute before:inset-0 before:bg-black/20 sm:-mt-0 sm:w-1/2 md:-ml-[35%] md:w-8/12"
                />
              </AnimationHover>
            ),
          )}
        </motion.div>
      </div>

      <div className="flex justify-end text-base font-medium leading-6 md:mt-5">
        <Link
          href="/certificate"
          className="mt-5 hover:text-emerald-500 hover:dark:text-gray-300"
          aria-label="all certificates"
        >
          All Certificates &rarr;
        </Link>
      </div>
    </>
  );
}
