import Image from "next/image"
import Link from "next/link"

export default function Logo({ className = "", showTagline = false }: { className?: string; showTagline?: boolean }) {
  return (
    <Link href="/" className={`flex flex-col items-start ${className}`}>
      <span className="sr-only">Parkland Physical Therapy</span>
      <div className="flex items-center">
        <Image
          src="/parkland-pt-logo.png"
          alt="Parkland PT Logo"
          width={240}
          height={140}
          className="h-24 w-auto"
          priority
        />
      </div>
      {showTagline && <span className="text-xs text-gray-600 mt-1">A Quality In Home Therapy Service</span>}
    </Link>
  )
}
