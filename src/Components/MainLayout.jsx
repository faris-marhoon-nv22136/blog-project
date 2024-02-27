import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({childern}) => {
    return (
      <div>
          <Header />
          {childern}
          <Footer />
      </div>
    ) 
  }

export default MainLayout;