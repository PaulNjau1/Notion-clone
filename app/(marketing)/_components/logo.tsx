import Image from "next/image";
import { Poppins } from "next/font/google";
import { RiNotionFill, RiNotionLine } from "react-icons/ri";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <RiNotionLine size={40} className="hidden dark:block" />

      <RiNotionFill size={40} className="dark:hidden" />

      <p className={cn("font-semibold", font.className)}>Notion</p>
    </div>
  );
};
