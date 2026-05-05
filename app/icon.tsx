import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
export const runtime = 'nodejs'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0B0F1A',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 32 32"
          fill="none"
        >
          <polygon
            points="16,2 30,28 2,28"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <polygon
            points="16,9 24,26 8,26"
            fill="#2563FF"
            stroke="#2563FF"
            strokeWidth="0.5"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
