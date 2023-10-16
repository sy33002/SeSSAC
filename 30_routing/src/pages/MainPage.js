import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function MainPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  // 키에 대한 value값을 겟하겠다.
  console.log(searchParams.get('mode')); // 없을 땐 null, 다크모드 퀴리url추가 되면 Dark 출력
  return (
    <div className={['Main', searchParams.get('mode')].join(' ')}>
      <h1>MainPage</h1>
      <button onClick={() => {setSearchParams({ mode: 'Dark' });}}>Dark Mode</button>
    </div>
  )
}
