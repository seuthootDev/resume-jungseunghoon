import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '정승훈 | 소프트웨어 개발자',
  description: '정승훈의 개발자 포트폴리오',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: [
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/favicon.svg' }
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
