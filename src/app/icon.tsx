import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
        <rect width="512" height="512" rx="112" fill="#050505" />
        <polygon points="130,330 200,330 200,90 130,90" fill="#E63946" />
        <polygon points="312,330 382,330 382,90 312,90" fill="#E63946" />
        <polygon points="130,90 220,90 382,330 292,330" fill="#E63946" />
        <text x="264" y="430" fontFamily="sans-serif" fontWeight="900" fontSize="80" fill="#FFFFFF" textAnchor="middle" letterSpacing="16">FPV</text>
      </svg>
    ),
    { ...size }
  )
}
