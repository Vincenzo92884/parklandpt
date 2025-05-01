import Head from "next/head"

interface MetaTagsProps {
  title?: string
  description?: string
  canonicalUrl?: string
  ogImage?: string
}

export default function MetaTags({
  title = "Parkland PT | In-Home Physical Therapy by Dr. Vincenzo Bombara",
  description = "Specialized in-home physical therapy services in Parkland by Dr. Vincenzo Bombara, DPT, GCS, MBA. Board-Certified Geriatric Specialist providing personalized treatment plans for seniors.",
  canonicalUrl = "https://parklandpt.com",
  ogImage = "/og-image.png",
}: MetaTagsProps) {
  return (
    <Head>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO Tags */}
      <meta name="author" content="Dr. Vincenzo Bombara" />
      <meta name="publisher" content="Quality In-Home Therapy" />
      <meta name="robots" content="index, follow" />
    </Head>
  )
}
