//import React from 'react';

export default (blogs, {text, sortBy}) => {
    return blogs.filter((blog) => {
        const blogsTextMatch = blog.title.toLowerCase().includes(text);
        //console.log(blog);
        return blogsTextMatch;
    }).sort((a, b) => {
        if (sortBy === 'date_desc') {
          return a.createdAt > b.createdAt ? 1 : -1;
        } else if (sortBy === 'title_asc') {
          return a.title < b.title ? 1 : -1;
        } else if (sortBy === 'title_desc') {
            return a.title > b.title ? 1 : -1;
        } else if (sortBy === 'date_asc') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } 
      });
}