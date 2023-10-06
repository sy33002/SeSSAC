import React, {useEffect, useState} from 'react'

// 자식 컴포넌트
export default function PostItem({post}) {
  console.log('post',post);
  return (
    <>
    {post.length < 0 ? (): ()}
    </>
  )
}

