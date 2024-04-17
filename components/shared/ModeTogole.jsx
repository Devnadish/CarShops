"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, SunMoon } from "@/lib/icons";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const buttonClasses = (activeTheme) => ({
    "bg-accent": true,
    "rounded-full": true,
    "p-1": true,
    "size-6": true,
    "bg-[#353B4B]": theme === "dark", // Light theme button background
    "bg-[#353B4B]": theme === "light", // Dark theme button background
    ...(activeTheme === theme ? { "bg-green-600": true } : {}), // Active button highlight
  });

  return (
    <div className="bg-[#121620] w-[95%] rounded-full flex items-center justify-between h-[35px] px-2">
      <Button
        onClick={() => handleThemeChange("light")}
        className={buttonClasses("light")}
      >
        <SunMoon color={"white"} size={18} />
      </Button>
      <Button
        onClick={() => handleThemeChange("dark")}
        className={buttonClasses("dark")}
      >
        <Moon color={"white"} size={18} />
      </Button>
    </div>
  );
}
