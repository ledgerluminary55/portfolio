import type { Metadata } from 'next'
import { Montserrat, Orbitron  } from 'next/font/google'
import './globals.css'
import {StarfieldCustom} from '../components/ui';
import { CustomCursor } from '../components/ui/CustomCursor';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat', 
  display: 'swap',
})
const orbitron = Orbitron({
  subsets:['latin'], 
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Crypto Pioneers Portfolio',
  description: 'Crypto Pioneers\'s portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  className={`${montserrat.variable} ${orbitron.variable }`}>
      <body className={`bg-black `}>
        <CustomCursor/>
        <div className="flex flex-col items-center justify-center ">
          {children}
        </div>
        <StarfieldCustom/>
      </body>
    </html>
  )
}
