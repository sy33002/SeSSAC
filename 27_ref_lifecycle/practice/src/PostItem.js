import React, {useEffect, useState} from 'react'

// 자식 컴포넌트
export default function PostItem({post}) {
  
  const block = {
    margin: '30px 30px 30px 30px',
    backgroundColor:'#87CEFA',
    width:'500px',
    height:'150px',
    textAlign: 'center',
    borderRadius:'20px',
  }
  return(
    <>
      <div>
        {post.map((item) => (
          <div class='block' style={block}>
            <div class='title' key={item.id}>No {item.id}-{item.title}</div>
            <div class='body' key={item.id}>{item.body}</div>
          </div> 
          ))}
      </div>
    </>
  )
}

