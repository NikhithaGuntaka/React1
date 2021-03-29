
import React from 'react';
class BlogDetails extends React.Component{
  state={
    blogs: [
      {
        name: "React Learning",
        author: "Stephen Biz",
        desc: "Welcome to learning React"
      },
      {
        name: "Installation",
        author: "Schewzdenier",
        desc: "You can install React from npm"
      }
    ]
  }
  render(){
    return (
      <div>
        <h1>Blog Details</h1>
        <Blog blogs={blogs} />
      </div>
    );
  }
}

  function Blog(props) {
    return props.blogs.map((blog) => {
      return (
        <div>
        <h2>{blog.name}</h2>
        <b>{blog.author}</b>
        <p>{blog.desc}</p>
      </div>
    );
  });
}
export default BlogDetails;
