import React from "react"
import Home from "./home-page"

const IndexPage = ({ data }) => {
  const post = data
  console.log(post)



  return (
      <>
      <Home data={post}></Home>
      </>
  )
}

export default IndexPage
