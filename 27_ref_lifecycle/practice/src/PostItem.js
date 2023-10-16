import React from 'react';
import './PostItem.scss';

// 자식 컴포넌트
export default function PostItem({ post }) {
  return (
    <div>
      {post.map((item) => (
        <div className='block' key={item.id}>
          <div className='title'><p className='No'>No {item.id}</p>-{item.title}</div>
          <div className='body'>{item.body}</div>
        </div>
      ))}
    </div>
  );
}


