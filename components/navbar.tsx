"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SearchBar } from "@/components/search-bar"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6-uDaHTo9u9lrcUdJDtAAO13lQ6PhrKj.png"
              alt="PULSE Smart Learning Logo"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-2xl font-medium tracking-[0.25em] text-slate-800">PULSE</span>
            <span className="text-[0.7rem] font-medium tracking-[0.2em] text-slate-600 block text-center w-full">
              SMART LEARNING
            </span>
          </div>
        </Link>

        {/* Desktop Navigation - Simplified */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} active={isActive("/")}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/about"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">About PULSE</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Learn about our mission to transform education through AI-powered personalized learning.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Our Team</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Meet the people behind PULSE
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/roadmap"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Roadmap</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Our future direction</p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Features</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="/features"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium">Features Overview</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover how PULSE transforms education with AI-powered learning tools.
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <Link
                      href="/ai-assistant"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">AI Assistant</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Your personal learning companion
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/integrations"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Integrations</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Connect with your favorite tools
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/comparison"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Comparison</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        See how PULSE compares to competitors
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2">
                  <li>
                    <Link
                      href="/case-studies"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Case Studies</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Success stories from schools using PULSE
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/help"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Help Center</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Guides and documentation
                      </p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      <div className="text-sm font-medium leading-none">Blog</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Latest news and insights
                      </p>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()} active={isActive("/contact")}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <SearchBar className="hidden md:inline-flex" />
          <Button asChild className="hidden md:inline-flex">
            <Link href="/contact">Request a Demo</Link>
          </Button>

          {/* Mobile Navigation - Simplified */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className={cn("h-5 w-5", isOpen ? "hidden" : "block")} />
                <X className={cn("h-5 w-5", isOpen ? "block" : "hidden")} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <SearchBar className="mb-4" />

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="about">
                    <AccordionTrigger
                      className={cn(
                        "flex items-center text-lg font-medium transition-colors hover:text-primary py-2",
                        isActive("/about") ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      About
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4">
                        <Link
                          href="/about"
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          About Us
                        </Link>
                        <Link
                          href="/team"
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          Our Team
                        </Link>
                        <Link
                          href="/careers"
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          Careers
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="features">
                    <AccordionTrigger
                      className={cn(
                        "flex items-center text-lg font-medium transition-colors hover:text-primary py-2",
                        isActive("/features") ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4">
                        <Link
                          href="/features"
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          Overview
                        </Link>
                        <Link
                          href="/ai-assistant"
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          AI Assistant
                        </Link>
                        <Link
                          href="/integrations"
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          Integrations
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="comparison">
                    <AccordionTrigger
                      className={cn(
                        "flex items-center text-lg font-medium transition-colors hover:text-primary py-2",
                        isActive("/comparison") ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      Comparison
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4">
                        <Link
                          href="/comparison"
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          PULSE vs Competitors
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="resources">
                    <AccordionTrigger
                      className={cn(
                        "flex items-center text-lg font-medium transition-colors hover:text-primary py-2",
                        isActive("/resources") ? "text-primary" : "text-muted-foreground",
                      )}
                    >
                      Resources
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2 pl-4">
                        <Link
                          href="/case-studies"
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          Case Studies
                        </Link>
                        <Link
                          href="/help"
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          Help Center
                        </Link>
                        <Link
                          href="/blog"
                          onClick={() => setIsOpen(false)}
                          className="text-muted-foreground hover:text-primary py-1"
                        >
                          Blog
                        </Link>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-primary py-2",
                    isActive("/") ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Home
                </Link>

                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-primary py-2",
                    isActive("/contact") ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  Contact
                </Link>

                <div className="flex flex-col gap-2 mt-4 pt-4 border-t">
                  <Button asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      Request a Demo
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
