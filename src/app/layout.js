import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header';
import { Mulish } from 'next/font/google';
import Footer from './components/Footer';
const mulish= Mulish({
  weight:['300', '400', '500', '600', '700', '800', '900'],
  subsets:['latin'],
  display:'swap'

}

)
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MoviesFlix',
  description: 'Best Movies for all.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
   
      <body className={inter.className}>
      <Header />
      {children}
      <Footer />
      </body>
    </html>
  )
}
