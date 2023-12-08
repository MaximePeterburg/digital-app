"use client";

import { PRODUCT_CATEGORIES } from "@/config";
import { useState } from "react";
import { NavItem } from "./NavItem";

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);
  const isAnyOpen = activeIndex !== null;
  return (
    <div className="flex h-full gap-4">
      {PRODUCT_CATEGORIES.map((category, idx) => {
        const handleOpen = () => {
          if (activeIndex === idx) setActiveIndex(null);
          else setActiveIndex(idx);
        };
        const isOpen = idx === activeIndex;
        return (
          <NavItem
            key={category.value}
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })}
    </div>
  );
};
