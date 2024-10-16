import { useEffect, useState } from "react";
import axios from "axios";
const URL = "https: example";

const Posts = () => {
  //useState
  const [posts, setPosts] = useState([]);
  const [loading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  //useEffect
  useEffect(() => {
    //make http request
    axios
      .get(URL)
      .then((post) => {
        //update loading state
        setIsloading(false);
        //update the posts state
        setPosts(post.data);
      })
      .catch((err) => {
        setError(err);
        setIsloading(false);
      });
    
  }, []);
 //display loading
 if(loading) return <div>Loading....</div>;
 if(error) return <div style={{color: "red"}}>{error.message}</div>;
  return (
    <div>
      <h2>Network Request</h2>
      <div>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h2>{post.title} </h2>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
