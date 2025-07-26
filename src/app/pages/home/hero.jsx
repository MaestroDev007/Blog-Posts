"use client"
import React from 'react'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useBlog } from '@/provider/BlogProvider'
import Error from '@/utils/error';
import Loading from '@/utils/loading';
import Image from 'next/image';


const Hero = () => {
   const {blogPosts, isLoading, error, isError} = useBlog();
  return (
    <Stack>
       <Typography>Blog Posts</Typography>
        {isLoading && <Loading/>}
        {isError && <Error/>}

        <Stack>
            {blogPosts.map((post) => (
                <Stack key={post.id} sx={{ padding: '10px', border: '1px solid #ccc', marginBottom: '10px' }}>
                <Typography variant="h6">{post.title}</Typography>
                <Typography variant="body2">{post.content}</Typography>
               { console.log("Image URL for post:", post.imageUrl) }
                {/* <Image 
  src={post.image_url}
  alt={post.title}
  width={400} // or any appropriate size
  height={200}
  style={{ objectFit: 'cover' }}
/> */}
                </Stack>
            ))}
            </Stack>
    </Stack>
  )
}

export default Hero
