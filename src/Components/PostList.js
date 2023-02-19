import {useState,useEffect} from 'react'

function PostList() {
    const [postts,setPosts]=useState([]);

    useEffect(()=>{

        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
      .then(json => setPosts(json));
   
    },[])
    
  return (
    <div>
     
        <ul>
         {
                postts.map(item=>{
                  return   <li key={item.id}>{item.title}</li>
                })
            }
        </ul>
    </div>
  )
}

export default PostList