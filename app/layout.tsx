import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "./providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "정승훈 이력서",
  description: "정승훈의 이력서 웹사이트입니다.",
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
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
