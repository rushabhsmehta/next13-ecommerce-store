import { Urbanist } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

import './globals.css'
import ScrollToTop from '@/components/ui/ScrollToTop'
import { Analytics } from '@vercel/analytics/react';

const font = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'Aagam Holidays',
  description: 'We plan memorable Trips',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Analytics />
        <ScrollToTop/>
        <Footer />
      </body>
    </html>
  )
}
