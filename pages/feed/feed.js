import React from "react"
import Box from "@mui/material/Box"

import Post from "../post/post"

const Feed = () => {
  const posts = [
    {
      avatar: "/logo.png",
      username: "John Daniels",
      createdAt: "Tuesday 30, 2022",
      image: "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1",
      body: `This impressive paella is a perfect party dish and a fun meal to cook
     together with your guests. Add 1 cup of frozen peas along with the
     mussels, if you like.`,
      _id: 0,
    },
    {
      avatar: "",
      username: "Godwin Daniel",
      createdAt: "Tuesday 29, 2022",
      image: "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1",
      body: `This impressive paella is a perfect party dish and a fun meal to cook
     together with your guests. Add 1 cup of frozen peas along with the
     mussels, if you like.`,
      _id: 0,
    },
    {
      avatar: "",
      username: "John Daniels",
      createdAt: "Tuesday, 30 2022",
      image: "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1",
      body: `This impressive paella is a perfect party dish and a fun meal to cook
     together with your guests. Add 1 cup of frozen peas along with the
     mussels, if you like.`,
      _id: 0,
    },
    {
      avatar: "",
      username: "John Daniels",
      createdAt: "Tuesday, 30 2022",
      image: "https://techcrunch.com/wp-content/uploads/2021/07/GettyImages-1207206237.jpg?w=730&crop=1",
      body: `This impressive paella is a perfect party dish and a fun meal to cook
     together with your guests. Add 1 cup of frozen peas along with the
     mussels, if you like.`,
      _id: 0,
    },
  ]

  return (
    <div className="Feed_container">
        <Box flex={4} m='5px'>
        {posts.map((post, index) => (
            <Post post={post} key={index} />
        ))}
        </Box>
    </div>
  )
}

export default Feed