import React from 'react'
import Header from './Header'
const Content = () => {

    const handleRandomDescription = () => {
        const description = ['My Content Is Out Of The World', 'Click On The Link Below And Explore', 'Get Ready To Enjoy The Best Blog Ever'];

        const randomDescription = Math.floor(Math.random() * 3 )
        return description[randomDescription]
    }

  return (
    <main>
        <Header />
        
        <h1>Welcome To My Blog</h1>

        <h2>{ handleRandomDescription() }</h2>

        <a href='' className='main-link'>Explore Now</a>

    </main>
  )
}

export default Content
