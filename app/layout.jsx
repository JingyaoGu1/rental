import React from 'react'
import '@/assets/styles/globals.css'
import NavBar from '@/components/NavBar'

export const metadata = {
    title: 'Property | Find the Perfect Rental',
    description: 'Find your dream rental property',
    keywords: 'rental, find rental, find property, home'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <NavBar/>
            <main>{children}</main>
        </body>
    </html>

  )
}

export default MainLayout