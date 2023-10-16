import React from 'react'
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
        <h1>NotFound</h1>
        <Link to="/">홈으로 이동하기</Link>
        <br />
        <a href="http://localhost:3000">a 태그로 홈이동</a>
        {/* a 태그는 처음부터 렌더링, link 태그는 컴포넌트만 렌더링 */}
        </div>
  )
}
