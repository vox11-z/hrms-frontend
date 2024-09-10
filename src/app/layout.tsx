import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import RootLayoutClient from './RootLayoutClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HRMS',
  description: 'Human Resource Management System',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <RootLayoutClient inter={inter}>
        {children}
      </RootLayoutClient>
    </html>
  )
}