"use client";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { TextAlignJustify, Sun, Moon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "@/components/theme-provider";

export type NavigationSection = {
  title: string;
  href: string;
};

const navigationData: NavigationSection[] = [
  { title: "How it Works", href: "#how-it-works" },
  { title: "Rewards", href: "#rewards" },
];

const HatchLogo = () => (
  <div className="flex items-center gap-2 group cursor-pointer">
    <span className="font-bold text-xl tracking-tight text-foreground">Hatch cards plus</span>
  </div>
);

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <div className="fixed top-0 w-full z-50">
      <header className="bg-transparent pt-4">
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
          <nav
            className={cn(
              "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
              sticky
                ? "py-2 px-4 bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg shadow-black/5 dark:shadow-white/5 rounded-full"
                : "py-2 px-1 bg-transparent border-transparent"
            )}
          >
            <a href="#" className="flex-shrink-0">
              <HatchLogo />
            </a>
            
            <div className="flex-1 flex justify-center">
              <NavigationMenu className="max-lg:hidden bg-muted/80 backdrop-blur-sm border border-border p-0.5 rounded-full">
                <NavigationMenuList className="flex gap-1">
                  {navigationData.map((navItem) => (
                    <NavigationMenuItem key={navItem.title}>
                      <NavigationMenuLink
                        href={navItem.href}
                        className="px-4 py-2 text-sm font-medium rounded-full text-muted-foreground hover:text-foreground hover:bg-background outline outline-transparent hover:outline-border transition tracking-normal"
                      >
                        {navItem.title}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="flex flex-shrink-0 items-center gap-3">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-all backdrop-blur-md shadow-sm border border-black/10 dark:border-white/10"
              >
                <Sun className="h-4 w-4 transition-all dark:hidden text-gray-800" />
                <Moon className="h-4 w-4 transition-all hidden dark:block text-gray-200" />
                <span className="sr-only">Toggle theme</span>
              </button>
              
              <div className="hidden lg:flex" />

              <div className="lg:hidden">
                <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                  <DropdownMenuTrigger className="rounded-full bg-background border border-border p-2 outline-none flex items-center justify-center cursor-pointer transition-colors">
                    <TextAlignJustify size={20} />
                    <span className="sr-only">Menu</span>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end" className="w-56 mt-2">
                    {navigationData.map((item) => (
                      <DropdownMenuItem key={item.title}>
                        <a href={item.href} className="w-full cursor-pointer text-sm font-medium">{item.title}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
