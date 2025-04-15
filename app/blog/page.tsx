import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"

const featuredPosts = [
  {
    title: "The Future of AI in Education: A Deep Dive",
    excerpt:
      "Explore how artificial intelligence is revolutionizing personalized learning and what it means for students and educators.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=60",
    author: "Dr. Sarah Johnson",
    date: "2024-02-20",
    category: "Technology",
    readTime: "8 min read",
  },
  {
    title: "Best Practices for Remote Learning Success",
    excerpt:
      "Learn effective strategies for engaging students and maintaining academic excellence in virtual classrooms.",
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&auto=format&fit=crop&q=60",
    author: "Michael Chen",
    date: "2024-02-18",
    category: "Education",
    readTime: "6 min read",
  },
  {
    title: "Data-Driven Decision Making in Schools",
    excerpt: "How educational institutions are using analytics to improve student outcomes and operational efficiency.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    author: "Emily Rodriguez",
    date: "2024-02-15",
    category: "Analytics",
    readTime: "10 min read",
  },
]

const recentPosts = [
  {
    title: "Gamification in Education: Beyond Points and Badges",
    excerpt: "Discover how meaningful gamification strategies can enhance student engagement and learning outcomes.",
    author: "James Wilson",
    date: "2024-02-12",
    category: "Engagement",
    readTime: "5 min read",
  },
  {
    title: "Building Inclusive Digital Learning Environments",
    excerpt: "Essential strategies for creating accessible and equitable online learning spaces for all students.",
    author: "Dr. Alicia Henderson",
    date: "2024-02-10",
    category: "Accessibility",
    readTime: "7 min read",
  },
  {
    title: "The Role of Social-Emotional Learning in EdTech",
    excerpt: "Understanding how technology can support students' emotional well-being and social development.",
    author: "David Kim",
    date: "2024-02-08",
    category: "Wellness",
    readTime: "6 min read",
  },
  {
    title: "Measuring Student Success: Beyond Traditional Metrics",
    excerpt: "New approaches to assessing student achievement in the digital age of personalized learning.",
    author: "Sarah Johnson",
    date: "2024-02-05",
    category: "Assessment",
    readTime: "8 min read",
  },
]

const categories = [
  "Technology",
  "Education",
  "Analytics",
  "Engagement",
  "Accessibility",
  "Wellness",
  "Assessment",
  "Best Practices",
]

export default function BlogPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center gap-4 text-center">
              <Badge className="mb-4">Blog</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Insights & Updates
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Stay informed about the latest trends in education technology and learn how to maximize your PULSE
                experience.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-8">Featured Articles</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {featuredPosts.map((post) => (
                  <Card
                    key={post.title}
                    className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge>{post.category}</Badge>
                        <span className="text-sm text-muted-foreground">{post.readTime}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">
                        By {post.author} • {new Date(post.date).toLocaleDateString()}
                      </div>
                      <Button variant="ghost" size="sm">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-3">
              <ScrollReveal className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-8">Recent Posts</h2>
                <div className="grid gap-8">
                  {recentPosts.map((post) => (
                    <Card
                      key={post.title}
                      className="group relative overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1"
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge>{post.category}</Badge>
                          <span className="text-sm text-muted-foreground">{post.readTime}</span>
                        </div>
                        <CardTitle>{post.title}</CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardFooter className="flex items-center justify-between">
                        <div className="text-sm text-muted-foreground">
                          By {post.author} • {new Date(post.date).toLocaleDateString()}
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.map((category) => (
                        <Link key={category} href={`/blog/category/${category.toLowerCase()}`}>
                          <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-white">
                            {category}
                          </Badge>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                    <Card>
                      <CardHeader>
                        <CardTitle>Stay Updated</CardTitle>
                        <CardDescription>
                          Subscribe to our newsletter for the latest insights and updates.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form className="space-y-4">
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 border rounded-md"
                          />
                          <Button className="w-full">Subscribe</Button>
                        </form>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
