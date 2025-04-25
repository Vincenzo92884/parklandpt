import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, User } from "lucide-react"

export const metadata = {
  title: "Blog - Physical Therapy Insights for Seniors",
  description:
    "Expert articles on physical therapy for seniors, Parkinson's Disease, fall prevention, and maintaining mobility as you age.",
}

const blogPosts = [
  {
    id: 1,
    title: "5 Essential Balance Exercises for Fall Prevention",
    excerpt:
      "Falls are a leading cause of injury among seniors. Learn these five simple exercises you can do at home to improve your balance and reduce fall risk.",
    date: "April 15, 2023",
    readTime: "6 min read",
    author: "Dr. Vincenzo Bombara",
    category: "Fall Prevention",
    slug: "balance-exercises-fall-prevention",
  },
  {
    id: 2,
    title: "Understanding Parkinson's Disease: How Physical Therapy Can Help",
    excerpt:
      "Physical therapy plays a crucial role in managing Parkinson's Disease symptoms. Discover how specialized exercises and techniques can improve mobility and quality of life.",
    date: "March 22, 2023",
    readTime: "8 min read",
    author: "Dr. Vincenzo Bombara",
    category: "Parkinson's Disease",
    slug: "parkinsons-disease-physical-therapy",
  },
  {
    id: 3,
    title: "Recovering from Hip Replacement Surgery: A Guide for Seniors",
    excerpt:
      "A comprehensive guide to recovery after hip replacement surgery, including timeline expectations, exercises, and tips for a successful rehabilitation.",
    date: "February 10, 2023",
    readTime: "10 min read",
    author: "Dr. Vincenzo Bombara",
    category: "Rehabilitation",
    slug: "hip-replacement-recovery-guide",
  },
  {
    id: 4,
    title: "The Benefits of In-Home Physical Therapy for Seniors",
    excerpt:
      "Discover why many seniors are choosing in-home physical therapy over traditional clinic visits, and how it can lead to better outcomes and convenience.",
    date: "January 18, 2023",
    readTime: "5 min read",
    author: "Dr. Vincenzo Bombara",
    category: "Senior Care",
    slug: "benefits-in-home-physical-therapy",
  },
  {
    id: 5,
    title: "Managing Arthritis Pain Through Physical Therapy",
    excerpt:
      "Learn effective physical therapy techniques and exercises that can help reduce arthritis pain and improve joint function without medication.",
    date: "December 5, 2022",
    readTime: "7 min read",
    author: "Dr. Vincenzo Bombara",
    category: "Pain Management",
    slug: "arthritis-pain-physical-therapy",
  },
  {
    id: 6,
    title: "Staying Active as You Age: Safe Exercise Guidelines for Seniors",
    excerpt:
      "Physical activity is crucial for healthy aging. Here are safe, effective exercise guidelines specifically designed for adults over 65.",
    date: "November 12, 2022",
    readTime: "6 min read",
    author: "Dr. Vincenzo Bombara",
    category: "Fitness",
    slug: "safe-exercise-guidelines-seniors",
  },
]

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-teal-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Physical Therapy Insights</h1>
            <p className="text-xl text-gray-600">
              Expert articles on physical therapy for seniors, Parkinson's Disease, fall prevention, and maintaining
              mobility as you age
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=600&query=senior doing balance exercises with physical therapist"
                alt="Senior doing balance exercises"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
                <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                  Fall Prevention
                </span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <Link href="/blog/balance-exercises-fall-prevention" className="hover:text-teal-700">
                  5 Essential Balance Exercises for Fall Prevention
                </Link>
              </h2>
              <p className="text-gray-600 mb-6">
                Falls are a leading cause of injury among seniors. Learn these five simple exercises you can do at home
                to improve your balance and reduce fall risk.
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>April 15, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  <span>Dr. Vincenzo Bombara</span>
                </div>
              </div>
              <Button asChild className="bg-teal-700 hover:bg-teal-800">
                <Link href="/blog/balance-exercises-fall-prevention">Read Article</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">
                    <Link href={`/blog/${post.slug}`} className="hover:text-teal-700">
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/blog/${post.slug}`}>Read More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/blog/archive">View All Articles</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Informed</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter for the latest articles, tips, and resources on physical therapy for seniors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button className="bg-teal-700 hover:bg-teal-800 whitespace-nowrap">Subscribe</Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </>
  )
}
