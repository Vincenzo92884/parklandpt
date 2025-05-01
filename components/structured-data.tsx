export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Parkland PT",
    alternateName: "Quality In-Home Therapy",
    description: "Specialized in-home physical therapy services in Parkland by Dr. Vincenzo Bombara, DPT, GCS, MBA.",
    url: "https://parklandpt.com",
    logo: "https://parklandpt.com/parkland-pt-logo.png",
    image: "https://parklandpt.com/og-image.png",
    telephone: "(954) 593-1735",
    email: "v.bombara@qualityinhometherapy.com",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 26.3100998,
        longitude: -80.3294176,
      },
      geoRadius: "30 mi",
    },
    priceRange: "$$",
    openingHours: "Mo,Tu,We,Th,Fr 07:00-19:00 Sa 08:00-14:00",
    founder: {
      "@type": "Person",
      name: "Dr. Vincenzo Bombara",
      jobTitle: "Doctor of Physical Therapy, Board-Certified Geriatric Specialist",
      url: "https://vincenzobombara.com",
      sameAs: ["https://vincenzobombara.com", "https://qualityinhometherapy.com"],
    },
    sameAs: ["https://vincenzobombara.com", "https://qualityinhometherapy.com"],
    medicalSpecialty: [
      "Geriatric Physical Therapy",
      "Neurological Rehabilitation",
      "LSVT BIG for Parkinson's Disease",
      "Orthopedic Therapy",
    ],
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Geriatric Physical Therapy",
        description: "Specialized physical therapy for seniors to improve mobility, balance, and quality of life.",
      },
      {
        "@type": "MedicalTherapy",
        name: "LSVT BIG Therapy for Parkinson's Disease",
        description:
          "Specialized treatment program for individuals with Parkinson's Disease to improve movement and quality of life.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Neurological Rehabilitation",
        description: "Therapy for patients with neurological conditions like stroke, MS, or Parkinson's.",
      },
      {
        "@type": "MedicalTherapy",
        name: "Orthopedic Therapy",
        description: "Treatment for musculoskeletal injuries, joint pain, and post-surgical rehabilitation.",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
