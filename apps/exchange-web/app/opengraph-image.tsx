import { ImageResponse } from 'next/og';
import { siteDescription, siteName } from './seo';

export const alt = `${siteName} trading dashboard preview`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: '#0b0e11',
          color: '#f8fafc',
          display: 'flex',
          height: '100%',
          justifyContent: 'center',
          padding: 72,
          width: '100%'
        }}
      >
        <div
          style={{
            border: '1px solid rgba(250, 204, 21, 0.32)',
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
            padding: 56,
            width: '100%'
          }}
        >
          <div
            style={{
              color: '#facc15',
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 0
            }}
          >
            Crypto Exchange Frontend Architecture Lab
          </div>
          <div
            style={{
              color: '#ffffff',
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: 0,
              lineHeight: 1
            }}
          >
            {siteName}
          </div>
          <div
            style={{
              color: '#cbd5e1',
              fontSize: 32,
              lineHeight: 1.35,
              maxWidth: 920
            }}
          >
            {siteDescription}
          </div>
        </div>
      </div>
    ),
    size
  );
}
