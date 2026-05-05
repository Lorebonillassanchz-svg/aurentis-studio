import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

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
          borderRadius: '6px',
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 32 32"
          fill="none"
        >
          <polygon
            points="16,3 29,27 3,27"
            fill="none"
            stroke="white"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
          <polygon
            points="16,9 24,25 8,25"
            fill="rgba(37,99,255,0.5)"
            stroke="rgba(37,99,255,0.8)"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size }
  )
}
