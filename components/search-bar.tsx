"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Search, X } from "lucide-react"

// Comprehensive mock search results for demonstration
const mockSearchResults = {
  pages: [
    { title: "Home", href: "/", description: "PULSE Education homepage with overview of our platform" },
    { title: "About", href: "/about", description: "Learn about our mission and team" },
    { title: "Features", href: "/features", description: "Explore all features of the PULSE platform" },
    { title: "AI Assistant", href: "/ai-assistant", description: "AI-powered learning companion for students" },
    { title: "Learning Analytics", href: "/learning-analytics", description: "Comprehensive analytics dashboard" },
    { title: "Pricing", href: "/pricing", description: "Pricing plans for schools and districts" },
    { title: "Contact", href: "/contact", description: "Get in touch with our team" },
    { title: "Team", href: "/team", description: "Meet the PULSE leadership team" },
    { title: "Careers", href: "/careers", description: "Join our mission to transform education" },
    { title: "Blog", href: "/blog", description: "Latest news and insights from PULSE" },
    { title: "Help Center", href: "/help", description: "Support resources and documentation" },
    { title: "Platform Overview", href: "/help/platform-overview", description: "Overview of the PULSE platform" },
    { title: "Case Studies", href: "/case-studies", description: "Success stories from schools using PULSE" },
    { title: "Roadmap", href: "/roadmap", description: "See what's coming next for PULSE" },
    { title: "Integrations", href: "/integrations", description: "Connect PULSE with your existing tools" },
  ],
  features: [
    {
      title: "AI-Powered Learning Paths",
      href: "/features#ai-learning",
      description: "Personalized learning journeys for every student",
    },
    {
      title: "Comprehensive Analytics",
      href: "/features#analytics",
      description: "Track student progress with detailed insights",
    },
    {
      title: "Seamless Communication",
      href: "/features#communication",
      description: "Connect teachers, students, and parents",
    },
    {
      title: "Gamified Engagement",
      href: "/features#engagement",
      description: "Keep students motivated with gamification",
    },
    {
      title: "Automated Workflows",
      href: "/features#automation",
      description: "Save time with automated administrative tasks",
    },
    { title: "Real-time Feedback", href: "/features#feedback", description: "Provide immediate feedback to students" },
    {
      title: "Adaptive Assessments",
      href: "/features#assessments",
      description: "Assessments that adapt to student ability",
    },
    { title: "Content Library", href: "/features#content", description: "Extensive library of educational content" },
    { title: "Multi-device Support", href: "/features#devices", description: "Access PULSE from any device" },
    { title: "Offline Mode", href: "/features#offline", description: "Learn even without internet connection" },
  ],
  resources: [
    { title: "Case Studies", href: "/case-studies", description: "Real-world success stories" },
    { title: "Help Center", href: "/help", description: "Support resources and guides" },
    { title: "Blog", href: "/blog", description: "Educational insights and updates" },
    { title: "Privacy Policy", href: "/privacy", description: "How we protect your data" },
    { title: "Terms of Service", href: "/terms", description: "Legal terms for using PULSE" },
    { title: "Cookie Policy", href: "/cookies", description: "How we use cookies" },
    { title: "Webinars", href: "/blog/webinars", description: "Educational webinars and recordings" },
    { title: "Research Papers", href: "/blog/research", description: "Academic research on educational technology" },
    { title: "Implementation Guide", href: "/help/implementation", description: "Guide to implementing PULSE" },
    { title: "Teacher Resources", href: "/help/teachers", description: "Resources specifically for teachers" },
  ],
  faq: [
    {
      title: "How does AI personalize learning?",
      href: "/help#ai-personalization",
      description: "Learn how our AI adapts to each student",
    },
    {
      title: "Is PULSE FERPA compliant?",
      href: "/help#compliance",
      description: "Information about our compliance standards",
    },
    {
      title: "How to set up a classroom",
      href: "/help#classroom-setup",
      description: "Step-by-step guide to classroom setup",
    },
    { title: "Data security measures", href: "/help#security", description: "How we keep your data secure" },
    { title: "Supported devices", href: "/help#devices", description: "Devices compatible with PULSE" },
  ],
}

interface SearchBarProps {
  className?: string
}

export function SearchBar({ className }: SearchBarProps) {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const [isSearching, setIsSearching] = React.useState(false)
  const [results, setResults] = React.useState<{
    pages: typeof mockSearchResults.pages
    features: typeof mockSearchResults.features
    resources: typeof mockSearchResults.resources
    faq: typeof mockSearchResults.faq
  } | null>(null)
  const router = useRouter()
  const searchRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)

  // Handle clicks outside of search component
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsExpanded(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Handle keyboard shortcuts
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault()
        setIsExpanded(true)
        setTimeout(() => inputRef.current?.focus(), 0)
      }
      if (e.key === "Escape" && isExpanded) {
        setIsExpanded(false)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [isExpanded])

  const handleSearch = React.useCallback((value: string) => {
    setQuery(value)
    if (value.length === 0) {
      setResults(null)
      return
    }

    setIsSearching(true)

    // Simulate search delay
    setTimeout(() => {
      const searchTerm = value.toLowerCase()
      // Filter mock results based on query - search in title, description, and category
      const filteredResults = {
        pages: mockSearchResults.pages.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm) ||
            (item.description && item.description.toLowerCase().includes(searchTerm)),
        ),
        features: mockSearchResults.features.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm) ||
            (item.description && item.description.toLowerCase().includes(searchTerm)),
        ),
        resources: mockSearchResults.resources.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm) ||
            (item.description && item.description.toLowerCase().includes(searchTerm)),
        ),
        faq: mockSearchResults.faq.filter(
          (item) =>
            item.title.toLowerCase().includes(searchTerm) ||
            (item.description && item.description.toLowerCase().includes(searchTerm)),
        ),
      }

      setResults(filteredResults)
      setIsSearching(false)
    }, 300)
  }, [])

  const handleSelect = React.useCallback(
    (href: string) => {
      setIsExpanded(false)
      setQuery("")
      router.push(href)
    },
    [router],
  )

  const clearSearch = () => {
    setQuery("")
    setResults(null)
    inputRef.current?.focus()
  }

  // Get the current search query from URL
  React.useEffect(() => {
    // Use window.location instead of useSearchParams
    const urlParams = new URLSearchParams(window.location.search)
    const queryParam = urlParams.get("q")
    if (queryParam) {
      setQuery(queryParam)
      handleSearch(queryParam)
    }
  }, [handleSearch])

  return (
    <div ref={searchRef} className={className}>
      {!isExpanded ? (
        <Button
          variant="outline"
          className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
          onClick={() => {
            setIsExpanded(true)
            setTimeout(() => inputRef.current?.focus(), 0)
          }}
        >
          <Search className="h-4 w-4 xl:mr-2" aria-hidden="true" />
          <span className="hidden xl:inline-flex">Search everything...</span>
          <span className="sr-only">Search the entire website</span>
          <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 xl:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
      ) : (
        <div className="relative">
          <div className="flex items-center rounded-md border bg-background shadow-sm">
            <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              ref={inputRef}
              type="search"
              placeholder="Search..."
              className="h-10 w-full min-w-[240px] border-0 pl-8 focus-visible:ring-0 focus-visible:ring-offset-0 xl:min-w-[320px]"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                handleSearch(e.target.value)
              }}
            />
            {isSearching && <Loader2 className="absolute right-2.5 h-4 w-4 animate-spin text-muted-foreground" />}
            {query && !isSearching && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 h-6 w-6 rounded-full p-0"
                onClick={clearSearch}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Clear search</span>
              </Button>
            )}
          </div>

          {/* Results dropdown */}
          {isExpanded && (query || results) && (
            <div className="absolute top-[calc(100%+4px)] z-50 w-full rounded-md border bg-popover p-2 shadow-md">
              {isSearching ? (
                <div className="flex items-center justify-center py-6">
                  <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                </div>
              ) : results === null ? (
                <p className="p-2 text-sm text-muted-foreground">Type to search...</p>
              ) : results.pages.length === 0 &&
                results.features.length === 0 &&
                results.resources.length === 0 &&
                results.faq.length === 0 ? (
                <p className="p-2 text-sm text-muted-foreground">No results found.</p>
              ) : (
                <div className="max-h-[300px] overflow-y-auto">
                  {results.pages.length > 0 && (
                    <div className="mb-2">
                      <h3 className="mb-1 px-2 text-xs font-medium text-muted-foreground">Pages</h3>
                      <ul>
                        {results.pages.map((page) => (
                          <li key={page.href}>
                            <button
                              className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                              onClick={() => handleSelect(page.href)}
                            >
                              <Search className="mr-2 h-4 w-4" />
                              {page.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {results.features.length > 0 && (
                    <div className="mb-2">
                      <h3 className="mb-1 px-2 text-xs font-medium text-muted-foreground">Features</h3>
                      <ul>
                        {results.features.map((feature) => (
                          <li key={feature.href}>
                            <button
                              className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                              onClick={() => handleSelect(feature.href)}
                            >
                              <Search className="mr-2 h-4 w-4" />
                              {feature.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {results.resources.length > 0 && (
                    <div className="mb-2">
                      <h3 className="mb-1 px-2 text-xs font-medium text-muted-foreground">Resources</h3>
                      <ul>
                        {results.resources.map((resource) => (
                          <li key={resource.href}>
                            <button
                              className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                              onClick={() => handleSelect(resource.href)}
                            >
                              <Search className="mr-2 h-4 w-4" />
                              {resource.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {results.faq && results.faq.length > 0 && (
                    <div>
                      <h3 className="mb-1 px-2 text-xs font-medium text-muted-foreground">FAQ</h3>
                      <ul>
                        {results.faq.map((item, index) => (
                          <li key={`faq-${index}`}>
                            <button
                              className="flex w-full items-center rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground"
                              onClick={() => handleSelect(item.href)}
                            >
                              <Search className="mr-2 h-4 w-4" />
                              {item.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
