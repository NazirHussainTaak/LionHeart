// src/components/layout/Header.tsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import logo from "@/assets/logo.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

//import { Menu } from "lucide-react";

  const solutionsLinks = t("nav.solutionsLinks", { returnObjects: true }) as { name: string; href: string }[];
  const technologyLinks = t("nav.technologyLinks", { returnObjects: true }) as { name: string; href: string }[];

  // ── Shared pill classes to keep everything consistent in light & dark
  const pillBase =
    "group inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-medium transition-colors " +
    "text-foreground/90 bg-transparent " +
    "hover:bg-muted hover:text-foreground " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background " +
    "disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-white/10";

  const pillActive = "bg-accent text-accent-foreground dark:bg-white/10 dark:text-white";

  // NavigationMenuTrigger supports data-state=open
  const triggerPill = `${pillBase} data-[state=open]:bg-muted data-[state=open]:text-foreground dark:data-[state=open]:bg-white/10`;

  return (
    <header
      className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60
                 dark:bg-neutral-900/70 dark:supports-[backdrop-filter]:bg-neutral-900/60"
    >
      <div className="container-width">
        <div className="flex h-16 items-center justify-between px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Lion Heart Computer System" className="h-10 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${pillBase} ${isActive("/") ? pillActive : ""}`}>
                  <Link to="/">{t('nav.home')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>


              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${pillBase} ${isActive("/about") ? pillActive : ""}`}>
                  <Link to="/about">{t('nav.about')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>


              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerPill}>{t('nav.solutions')}</NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-xl border bg-popover shadow-md dark:border-white/10 dark:bg-neutral-900">
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    {solutionsLinks.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors
                                       hover:bg-muted hover:text-foreground dark:hover:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className={triggerPill}>{t('nav.technologies')}</NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-xl border bg-popover shadow-md dark:border-white/10 dark:bg-neutral-900">
                  <ul className="grid w-[400px] gap-3 p-4">
                    {technologyLinks.map((item) => (
                      <li key={item.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={item.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors
                                       hover:bg-muted hover:text-foreground dark:hover:bg-white/10"
                          >
                            <div className="text-sm font-medium leading-none">{item.name}</div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={`${pillBase} ${isActive("/about") ? pillActive : ""}`}>
                  <Link to="/vendors">{t('nav.vendors')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button & Theme Switcher - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeSwitcher />
            <Button asChild className="btn-hero">
              {/*<Link to="/contact">Contact Us</Link>*/}
              <Link to="/contact">{t('nav.contact')}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="lg:hidden rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {t('nav.home')}
                </Link>

                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {t('nav.about')}
                </Link>

                <Collapsible open={solutionsOpen} onOpenChange={setSolutionsOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors">
                    {t('nav.solutions')}
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/></svg>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pt-2">
                    {solutionsLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-4"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={techOpen} onOpenChange={setTechOpen}>
                  <CollapsibleTrigger className="flex items-center justify-between w-full text-lg font-medium hover:text-primary transition-colors">
                    {t('nav.technologies')}
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2"/></svg>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-2 pt-2">
                    {technologyLinks.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors pl-4"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                <Link
                  to="/vendors"
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  {t('nav.vendors')}
                </Link>

                <Button asChild className="btn-hero w-full mt-6">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    {t('nav.contact')}
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
