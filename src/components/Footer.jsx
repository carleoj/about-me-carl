import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer>
        <span>Carl Paño &copy;{currentYear}</span>
    </footer>
  )
}

export default Footer