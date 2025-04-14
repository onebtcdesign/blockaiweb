"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

// 团队成员数据
const teamMembers = [
  {
    id: 1,
    name: "Young",
    designation: "CTO",
    image: "/young.JPG",
  },
  {
    id: 2,
    name: "Jesn",
    designation: "UI/UX",
    image: "/jesn.JPG",
  },
  {
    id: 3,
    name: "Power",
    designation: "Blockchain, Frontend",
    image: "/power.JPG",
  },
  {
    id: 4,
    name: "Tomey",
    designation: "Community, Marketing",
    image: "/tomey.JPG",
  }
];

// AnimatedTooltip component (integrated from animated-tooltip.tsx)
const AnimatedTooltip = ({
  items,
  className,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      {items.map((item, index) => (
        <div
          className="relative group mx-1"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-foreground z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px" />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-background relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-muted-foreground text-xs">
                  {item.designation}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="relative z-0">
            <Image
              onMouseMove={handleMouseMove}
              height={100}
              width={100}
              src={item.image}
              alt={item.name}
              className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-background relative transition duration-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const Team = () => {
  return (
    <section className="py-44 relative" id="team">
      {/* 背景效果 */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-5 z-0"></div>

      <div className="container max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
            Core Team
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Professionals passionate about blockchain and Web3 with rich industry experience
          </p>
        </div>

        <div className="flex min-h-[150px] w-full items-center justify-center">
          <AnimatedTooltip items={teamMembers} className="scale-125" />
        </div>
      </div>
    </section>
  );
};

export default Team; 