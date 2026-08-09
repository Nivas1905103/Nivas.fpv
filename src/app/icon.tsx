import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'
export const size = { width: 512, height: 512 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050505',
          color: 'white',
          fontWeight: 900,
          flexDirection: 'column',
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="300" height="300">
          <polygon points="130,330 200,330 200,90 130,90" fill="#E63946" />
          <polygon points="312,330 382,330 382,90 312,90" fill="#E63946" />
          <polygon points="130,90 220,90 382,330 292,330" fill="#E63946" />
        </svg>
        <div style={{ fontSize: '80px', letterSpacing: '16px', marginTop: '-40px', marginLeft: '16px' }}>FPV</div>
      </div>
    ),
    { ...size }
  )
}
