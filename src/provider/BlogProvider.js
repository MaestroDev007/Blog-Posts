"use client";
import { createContext, useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchBlogPosts } from "@/services/blogService";

const BlogContext = createContext();

// c=custom hook to make the blogpost available through1out the app
export const BlogProvider = ({ children }) => {
  const {
    data: blogPosts = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: fetchBlogPosts,
  });
  return (
    <BlogContext.Provider value={{ blogPosts, isLoading, error, isError }}>
      {children}
    </BlogContext.Provider>
  );
};

// custom hook to use the blog context
export const useBlog = () => {
  const blogContext = useContext(BlogContext);
  if (!blogContext) {
    throw new Error(
      "This hook doesnt have access to your values. Please wrap your component with some provider"
    );
  }
  return blogContext;
};
