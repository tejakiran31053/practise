import { useEffect, useState } from "react";
import axios from "axios";

function ApiData(){

  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(res => setData(res.data.slice(0,5)));
  },[]);

  return(
    <div>

      <table border="1">

        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>

          {data.map(post=>(
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}

export default ApiData;