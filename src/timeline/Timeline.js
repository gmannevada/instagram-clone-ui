import React, {useState} from 'react'

import './Timeline.css'
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
const [posts, setPosts] = useState([
  {
    id: 1,
    user: "Marion_",
    postImage : "https://images.unsplash.com/photo-1500150368783-cb8954285792?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    likes: 12,
    timestamp: "2d"
},
{  id: 2,
  user: "Christine_",
  postImage : "https://images.unsplash.com/photo-1541515929569-1771522cbaa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  likes: 14,
  timestamp: "12h"
}
]);

  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__post">
          {posts.map((post) => ( <Post user={post.user}  postImage={post.postImage} likes={post.likes} timestamp={post.timestamp} /> ))}
     </div>
       </div>
      <div className="timeline__right">
       <Suggestions />
       </div>
   </div>
      
  )
}

export default Timeline;