import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
    console.log("About rendering...")

    const interval = setInterval(() => {
      console.log("about")
    }, 1000)

    return () => {
      clearInterval(interval)
      console.log("I am triggered")
    }
  }, [])

  return (
    <div>About</div>
  )
}

export default About