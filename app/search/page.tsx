import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string }
}) {
  const query = searchParams.q || ""

  // In a real application, you would fetch search results from an API
  // This is just a mock implementation
  const results = query
    ? [
        {
          id: "1",
          title: "Personalized Learning Paths",
          description: "Discover how PULSE adapts to each student's unique learning journey.",
          url: "/features#personalized-learning",
          category: "Features",
        },
        {
          id: "2",
          title: "AI Learning Assistant",
          description: "Learn about our AI-powered learning companion that guides students.",
          url: "/ai-assistant",
          category: "Features",
        },
        {
          id: "3",
          title: "Student Progress Analytics",
          description: "Track student progress with detailed analytics and insights.",
          url: "/learning-analytics",
          category: "Features",
        },
        {
          id: "4",
          title: "Pricing Plans for Schools",
          description: "Explore our flexible pricing options for schools of all sizes.",
          url: "/pricing",
          category: "Pricing",
        },
        {
          id: "5",
          title: "About PULSE Education",
          description: "Learn about our mission to transform education through AI.",
          url: "/about",
          category: "About",
        },
      ].filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()),
      )
    : []

  return (
    <div className="container py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold tracking-tight mb-6">Search Results</h1>

        {/* Search form */}
        <form className="mb-8 flex w-full max-w-lg items-center space-x-2">
          <Input type="text" placeholder="Search PULSE..." name="q" defaultValue={query} className="flex-1" />
          <Button type="submit">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </form>

        {/* Results */}
        <div className="space-y-8">
          {query ? (
            <>
              <p className="text-muted-foreground">
                {results.length} results found for "{query}"
              </p>

              {results.length > 0 ? (
                <div className="space-y-6">
                  {results.map((result) => (
                    <div key={result.id} className="group">
                      <Link href={result.url} className="block space-y-1">
                        <div className="flex items-center">
                          <h2 className="text-xl font-semibold group-hover:text-primary group-hover:underline">
                            {result.title}
                          </h2>
                          <span className="ml-2 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                            {result.category}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{result.description}</p>
                        <p className="text-sm text-primary">{result.url}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="rounded-lg border border-dashed p-8 text-center">
                  <h3 className="text-lg font-medium mb-2">No results found</h3>
                  <p className="text-muted-foreground mb-4">
                    We couldn't find any results matching your search. Please try a different query.
                  </p>
                  <div className="flex justify-center">
                    <Button asChild variant="outline">
                      <Link href="/">Return Home</Link>
                    </Button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-lg border border-dashed p-8 text-center">
              <h3 className="text-lg font-medium mb-2">Enter a search term</h3>
              <p className="text-muted-foreground">
                Please enter a search term to find content across the PULSE platform.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
