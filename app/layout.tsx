import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: '이력서 | 정승훈',
  description: '정승훈 - 소프트웨어 개발자 이력서 및 포트폴리오. VTK 3D 시각화, 풀스택 웹 개발',
  keywords: '이력서, 포트폴리오, 정승훈, 소프트웨어 개발자, resume, portfolio',
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
