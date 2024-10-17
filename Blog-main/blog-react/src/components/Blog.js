import React, { useEffect, useState,useCallback } from "react";
import { useParams } from "react-router-dom";
import "../css/specificBlog.css";

function Blog() {
  const [myId, setMyId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const { id } = useParams();



  const getBlogData = useCallback (async () => {
    // console.log(id);
    const res = await fetch(`http://localhost:8999/getdata/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      const { id, title, body } = await res.json();
      // console.log(myBlogs);
      // console.log("myblogs "+myBlogs);
      setBody(body);
      setMyId(id);
      setTitle(title);
    }
  },[id]);

  useEffect(() => {
    getBlogData();
  }, [getBlogData]);

  return (
    <div key={myId} className="specific-blog">
      <h2>{title}</h2>
      <section>{body}</section>
    </div>
  );
}

export default Blog;
