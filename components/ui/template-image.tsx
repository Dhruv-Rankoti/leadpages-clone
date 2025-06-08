'use client'

import Image from "next/image"
import { useState } from "react"

interface TemplateImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export default function TemplateImage({ src, alt, width, height, className }: TemplateImageProps) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized
      onError={() => setImgSrc("https://placehold.co/300x400/9333ea/ffffff?text=Template")}
    />
  )
}
