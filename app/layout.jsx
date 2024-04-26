import React from 'react'
import '@/assets/styles/globals.css'

export const metadata = {
    title: 'PropertyPulse | Find the perfect rental',
    description: 'find your dream rental property',
    keywords: 'rental, property, house, apartment, condo, townhouse, propertypulse',
};

const MainLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
        <div>{children}</div>
        </body>

    </html>
  )
};

export default MainLayout